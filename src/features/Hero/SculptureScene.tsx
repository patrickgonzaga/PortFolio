import { useEffect, useRef, useState, type RefObject } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { Color, Group, MathUtils, MeshPhysicalMaterial } from 'three';

type SceneProps = {
  color: string;
  animate: boolean;
  pointer: RefObject<{ x: number; y: number }>;
  onContextLost: () => void;
};

function Sculpture({ color, animate, pointer, onContextLost, compact }: SceneProps & { compact: boolean }) {
  const group = useRef<Group>(null);
  const core = useRef<Group>(null);
  const material = useRef<MeshPhysicalMaterial>(null);
  const elapsed = useRef(0);
  const targetColor = useRef(new Color(color));
  const { gl, invalidate } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('webglcontextlost', onContextLost);
    return () => canvas.removeEventListener('webglcontextlost', onContextLost);
  }, [gl, onContextLost]);

  useEffect(() => {
    targetColor.current.set(color);
    if (!animate && material.current) material.current.color.set(color);
    invalidate();
  }, [color, animate, invalidate]);

  // A slow-moving sculpture does not need a display's full refresh rate.
  useEffect(() => {
    if (!animate) return;
    const timer = window.setInterval(invalidate, 1000 / 30);
    return () => window.clearInterval(timer);
  }, [animate, invalidate]);

  useFrame((_, delta) => {
    if (!animate || !group.current || !core.current) return;
    const step = Math.min(delta, 0.05);
    elapsed.current += step;
    const time = elapsed.current;
    core.current.rotation.y += step * 0.14;
    core.current.rotation.z = Math.sin(time * 0.22) * 0.12;
    group.current.position.y = Math.sin(time * 0.7) * 0.09;
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.3, 3, step);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, pointer.current.y * 0.18, 3, step);
    material.current?.color.lerp(targetColor.current, 1 - Math.exp(-step * 4));
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 5]} intensity={3} color="#e9f8ff" />
      <pointLight position={[-4, -2, 2]} intensity={12} color={color} />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={4} color="white" scale={[4, 8]} position={[-4, 2, 4]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={3} color="#b9e8ff" scale={[2, 7]} position={[4, 1, 3]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={5} color="white" scale={[5, 3]} position={[0, 5, -2]} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={2} color="#578bff" scale={5} position={[0, -3, -4]} target={[0, 0, 0]} />
      </Environment>
      <group ref={group} scale={0.94}>
        <group ref={core} rotation={[0.28, -0.35, 0]}>
          <mesh>
            <torusKnotGeometry args={[1.22, 0.39, compact ? 96 : 144, compact ? 12 : 20, 2, 3]} />
            <meshPhysicalMaterial ref={material} color="#81d6fa" metalness={0.92} roughness={0.19} clearcoat={1} clearcoatRoughness={0.15} envMapIntensity={1.2} />
          </mesh>
        </group>
        <group rotation={[0.9, 0.3, -0.35]}>
          <mesh>
            <torusGeometry args={[2.25, 0.012, 8, 160]} />
            <meshBasicMaterial color={color} transparent opacity={0.65} />
          </mesh>
          <mesh position={[2.25, 0, 0]}>
            <sphereGeometry args={[0.065, 16, 12]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[-2.25, 0, 0]}>
            <sphereGeometry args={[0.1, 16, 12]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
        <mesh position={[1.7, 1.65, -0.4]} rotation={[0.5, 0.8, 0.3]}>
          <octahedronGeometry args={[0.16]} />
          <meshStandardMaterial color={color} metalness={0.85} roughness={0.16} />
        </mesh>
        <mesh position={[-1.9, -1.25, 0]}>
          <sphereGeometry args={[0.13, 20, 16]} />
          <meshStandardMaterial color="#b6d9ed" metalness={0.95} roughness={0.18} />
        </mesh>
      </group>
    </>
  );
}

export default function SculptureScene(props: SceneProps) {
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 767px), (pointer: coarse)').matches);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px), (pointer: coarse)');
    const update = () => setCompact(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7.9], fov: 39 }}
      dpr={compact ? 1 : [1, 1.25]}
      frameloop="demand"
      gl={{ alpha: true, antialias: !compact, powerPreference: 'low-power' }}
      style={{ pointerEvents: 'none' }}
    >
      <Sculpture {...props} compact={compact} />
    </Canvas>
  );
}
