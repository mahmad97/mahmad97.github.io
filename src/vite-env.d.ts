/// <reference types="vite/client" />

/** ISO timestamp of the build, injected by `define` in `vite.config.ts`. */
declare const __BUILD_DATE__: string;

declare module '*.svg?react' {
	import type { ReactElement, SVGProps } from 'react';
	const content: (props: SVGProps<SVGSVGElement>) => ReactElement;
	export default content;
}
