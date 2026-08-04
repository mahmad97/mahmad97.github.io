import type { Config } from '@react-router/dev/config';

// The site is fully static: every route is pre-rendered to HTML at build time
// and served by GitHub Pages. There is no runtime server, so route modules must
// not export `action` or `headers` (the build enforces this).
const config = {
	appDirectory: 'src',
	ssr: false,
	prerender: true,
} satisfies Config;

export default config;
