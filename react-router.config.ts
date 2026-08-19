import type { Config } from '@react-router/dev/config';

const config = {
	appDirectory: 'src',
	ssr: false,
	prerender: ({ getStaticPaths }) => getStaticPaths(),
} satisfies Config;

export default config;
