import type { ReactElement, ReactNode } from 'react';

import { useEffect } from 'react';

import { Heading } from '@/components/typography';

const BASE_TITLE = 'Mohammad Ahmad';

type PageContainerProps = Readonly<{
	children: ReactNode;
	heading?: string;
}>;

const PageContainer = ({
	children,
	heading,
}: PageContainerProps): ReactElement => {
	useEffect(() => {
		document.title = heading ? `${BASE_TITLE} | ${heading}` : BASE_TITLE;

		return () => {
			document.title = BASE_TITLE;
		};
	}, [heading]);

	return (
		<div className='max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-8'>
			{heading && <Heading>{heading}</Heading>}
			{children}
		</div>
	);
};

export default PageContainer;
