/// <reference types="vite/client" />

declare module '*.svg?react' {
	import type { ReactElement } from 'react';
	const content: () => ReactElement;
	export default content;
}
