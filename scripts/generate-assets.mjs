// Regenerates the raster assets in `public/` from their sources:
//
//   public/MA.svg                → favicon.ico, icon-192/512.png,
//                                  icon-maskable-512.png, apple-touch-icon.png
//   scripts/og-image.html        → og-image.png (1200x630 link preview)
//
// Run it with `npm run assets` after changing the logo, the portrait, or the
// template; the outputs are committed, so the deploy workflow never needs a
// browser. Rendering is done by headless Chrome (set CHROME to override the
// binary) — the OG template pulls Inter and Roboto Mono from Google Fonts, so
// generation needs network access.
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const run = promisify(execFile);

const CHROME = process.env.CHROME ?? 'google-chrome';
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PUBLIC = join(ROOT, 'public');

const LOGO = join(PUBLIC, 'MA.svg');
const PORTRAIT = join(ROOT, 'src/assets/images/profile.png');
const BRAND = '#2b7fff';
const GLYPH = '#f1f5f9';

const workDir = await mkdtemp(join(tmpdir(), 'site-assets-'));

const screenshot = async ({ html, width, height, out, background }) => {
	const page = join(workDir, `page-${width}x${height}-${Date.now()}.html`);
	await writeFile(page, html);

	await run(CHROME, [
		'--headless',
		'--disable-gpu',
		'--hide-scrollbars',
		'--force-device-scale-factor=1',
		`--default-background-color=${background}`,
		`--window-size=${width},${height}`,
		`--screenshot=${out}`,
		// Lets webfonts finish loading before the frame is captured.
		'--virtual-time-budget=8000',
		`file://${page}`,
	]);
};

// The logo is a rounded tile, so the corners have to stay transparent. Scaling
// happens in the page rather than by resampling a big PNG, which keeps the
// small sizes crisp.
const renderLogo = async (size, out) =>
	screenshot({
		html: `<style>html,body{margin:0}img{display:block;width:100vw;height:100vh}</style><img src="file://${LOGO}">`,
		width: size,
		height: size,
		out,
		background: '00000000',
	});

// iOS and Android mask these themselves, so they need a full-bleed square: the
// wordmark alone on brand blue, inset far enough to survive a circular crop.
const renderMasked = async (size, out, inset) => {
	const svg = await readFile(LOGO, 'utf8');
	const [, path] = svg.match(/<path d="([^"]+)"/);
	const glyph = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="85 139.5 359 227.5"><path d="${path}" fill="${GLYPH}"/></svg>`;
	const src = `data:image/svg+xml;base64,${Buffer.from(glyph).toString('base64')}`;

	return screenshot({
		html: `<style>html,body{margin:0;height:100%}body{background:${BRAND};display:flex;align-items:center;justify-content:center}img{width:${inset}%}</style><img src="${src}">`,
		width: size,
		height: size,
		out,
		background: 'ffffffff',
	});
};

// ICO is just a directory of images; every size here is a PNG payload, which
// every browser still in use understands.
const buildIco = (icons) => {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(icons.length, 4);

	let offset = header.length + icons.length * 16;

	const entries = icons.map(({ size, data }) => {
		const entry = Buffer.alloc(16);
		entry.writeUInt8(size, 0);
		entry.writeUInt8(size, 1);
		entry.writeUInt16LE(1, 4); // colour planes
		entry.writeUInt16LE(32, 6); // bits per pixel
		entry.writeUInt32LE(data.length, 8);
		entry.writeUInt32LE(offset, 12);
		offset += data.length;
		return entry;
	});

	return Buffer.concat([header, ...entries, ...icons.map(({ data }) => data)]);
};

const renderOgImage = async () => {
	const template = await readFile(join(ROOT, 'scripts/og-image.html'), 'utf8');

	await screenshot({
		html: template.replace('__PROFILE_SRC__', `file://${PORTRAIT}`),
		width: 1200,
		height: 630,
		out: join(PUBLIC, 'og-image.png'),
		background: 'ff020617',
	});
};

try {
	await renderLogo(192, join(PUBLIC, 'icon-192.png'));
	await renderLogo(512, join(PUBLIC, 'icon-512.png'));
	await renderMasked(180, join(PUBLIC, 'apple-touch-icon.png'), 70);
	await renderMasked(512, join(PUBLIC, 'icon-maskable-512.png'), 64);

	const favicons = [];
	for (const size of [16, 32, 48]) {
		const out = join(workDir, `favicon-${size}.png`);
		await renderLogo(size, out);
		favicons.push({ size, data: await readFile(out) });
	}
	await writeFile(join(PUBLIC, 'favicon.ico'), buildIco(favicons));

	await renderOgImage();

	console.log('assets: favicon.ico, icons, apple-touch-icon, og-image.png');
} finally {
	await rm(workDir, { recursive: true, force: true });
}
