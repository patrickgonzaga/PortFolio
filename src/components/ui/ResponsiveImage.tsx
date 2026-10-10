import type { ImgHTMLAttributes } from 'react';
import imageManifest from '../../data/imageManifest.json';

type OptimizedImage = { src: string; srcSet: string; width: number; height: number };
const images: Record<string, OptimizedImage> = imageManifest;

/** Serve an appropriately sized asset while preserving the original as a fallback. */
export function ResponsiveImage({ src = '', alt = '', sizes = '(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 45vw, 600px', loading = 'lazy', onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const image = images[src];
  return (
    <img
      {...props}
      src={image?.src ?? src}
      srcSet={image?.srcSet}
      sizes={image ? sizes : undefined}
      width={props.width ?? image?.width}
      height={props.height ?? image?.height}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={event => {
        const element = event.currentTarget;
        if (image && element.getAttribute('src') !== src) {
          element.removeAttribute('srcset');
          element.src = src;
        } else onError?.(event);
      }}
    />
  );
}
