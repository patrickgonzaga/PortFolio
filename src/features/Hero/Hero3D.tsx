import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../contexts/ThemeContext';

// Floating Particles Component
const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random coordinates inside a sphere-like shape
  const [sphere] = useState(() => {
    const arr = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5 + Math.random() * 2.0; // Keep particles spaced out
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

// Abstract Wireframe Shape with Mouse Interaction
interface ShapeProps {
  theme: 'light' | 'dark';
}

const AbstractShape: React.FC<ShapeProps> = ({ theme }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Track mouse coordinates
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse positions to [-0.5, 0.5]
      const x = (event.clientX / window.innerWidth) - 0.5;
      const y = (event.clientY / window.innerHeight) - 0.5;
      targetRotation.current = {
        x: y * 0.5, // Rotate on X based on vertical mouse movement
        y: x * 0.5, // Rotate on Y based on horizontal mouse movement
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Auto-rotation
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.08;

      // Smoothly interpolate to target mouse rotation (inertia)
      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.05;
    }
  });

  const wireframeColor = theme === 'dark' ? '#8b5cf6' : '#6d28d9';

  return (
    <mesh ref={meshRef} scale={Math.min(viewport.width / 4, 1.6)}>
      {/* 20-sided regular polyhedron (Icosahedron) */}
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color={wireframeColor}
        wireframe
        transparent
        opacity={theme === 'dark' ? 0.25 : 0.15}
      />
    </mesh>
  );
};

export const Hero3D: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-75">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <AbstractShape theme={theme} />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
};
