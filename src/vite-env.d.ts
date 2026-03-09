/// <reference types="vite/client" />

declare module '*.svg?react' {
	import type { ReactElement, SVGProps } from 'react';
	const content: (props: SVGProps<SVGSVGElement>) => ReactElement;
	export default content;
}
