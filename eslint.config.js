import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const config = tseslint.config([
	globalIgnores(['build', '.react-router']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
	{
		files: ['src/root.tsx', 'src/pages/**/*.tsx'],
		rules: {
			'react-refresh/only-export-components': [
				'error',
				{
					allowExportNames: [
						'meta',
						'links',
						'loader',
						'clientLoader',
						'handle',
						'shouldRevalidate',
					],
				},
			],
		},
	},
]);

export default config;
