// Runs after `react-router build`. Everything here needs the pre-rendered
// output, so it can't be a Vite plugin or a file in `public/`:
//
//   - `404.html`   — GitHub Pages' not-found page, which is how the `*` route
//                    gets served (Vite writes it as `__spa-fallback.html`)
//   - `sitemap.xml`— one <loc> per pre-rendered route, read from `src/routes.ts`
//   - `robots.txt` — points crawlers at the sitemap
import { access, copyFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import routes from '../src/routes.ts';
import { pageUrl, SITE_URL } from '../src/utils/meta.ts';

const OUT_DIR = fileURLToPath(new URL('../build/client/', import.meta.url));

const exists = async (path) =>
	access(path).then(
		() => true,
		() => false,
	);

// The catch-all is served through the SPA fallback and `:params` have no
// enumerable URLs, so neither belongs in a sitemap.
const routePaths = routes
	.map(({ path = '' }) => path)
	.filter((path) => !path.includes('*') && !path.includes(':'))
	.map((path) => `/${path}`);

const sitemapUrls = [];

for (const path of routePaths) {
	const html = join(OUT_DIR, path, 'index.html');

	if (!(await exists(html))) {
		throw new Error(
			`Route "${path}" is in src/routes.ts but was not pre-rendered to ${html}. ` +
				'Either it should be excluded from the sitemap or the build is broken.',
		);
	}

	sitemapUrls.push(pageUrl(path));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `\t<url>\n\t\t<loc>${url}</loc>\n\t</url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await copyFile(join(OUT_DIR, '__spa-fallback.html'), join(OUT_DIR, '404.html'));
await writeFile(join(OUT_DIR, 'sitemap.xml'), sitemap);
await writeFile(join(OUT_DIR, 'robots.txt'), robots);

console.log(
	`postbuild: 404.html, robots.txt, sitemap.xml (${sitemapUrls.length} URLs)`,
);
