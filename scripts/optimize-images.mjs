import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { resolve, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const content = await readFile(resolve(root, 'src/data/cvData.ts'), 'utf8');
const sources = [...new Set([
  '/hero-profile.png', '/pat.jpg',
  ...Array.from(content.matchAll(/image:\s*"([^"\n]+\.(?:png|jpe?g))"/g), match => match[1]),
])];
const manifest = {};
let originalBytes = 0;
let optimizedBytes = 0;

for (const source of sources) {
  const input = resolve(root, 'public', source.slice(1));
  const { width, height } = await sharp(input).metadata();
  const name = basename(source, extname(source));
  const widths = [...new Set([480, 960, 1600].map(size => Math.min(size, width)))];
  const variants = [];
  for (const size of widths) {
    const url = `/images/optimized/${name}-${size}.webp`;
    const output = resolve(root, 'public', url.slice(1));
    await mkdir(dirname(output), { recursive: true });
    const result = await sharp(input).rotate().resize({ width: size, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 }).toFile(output);
    variants.push({ url, width: result.width, bytes: result.size });
  }
  const primary = variants.find(variant => variant.width >= 960) ?? variants.at(-1);
  manifest[source] = {
    src: primary.url,
    srcSet: variants.map(variant => `${variant.url} ${variant.width}w`).join(', '),
    width, height,
  };
  originalBytes += (await stat(input)).size;
  optimizedBytes += primary.bytes;
}
await writeFile(resolve(root, 'src/data/imageManifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Optimized ${sources.length} images: ${(originalBytes / 1048576).toFixed(2)} MB → ${(optimizedBytes / 1048576).toFixed(2)} MB at default size (${Math.round((1 - optimizedBytes / originalBytes) * 100)}% smaller).`);
