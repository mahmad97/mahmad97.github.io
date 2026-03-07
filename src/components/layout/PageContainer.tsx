import type { ReactElement, ReactNode } from 'react';

import { Heading } from '@/components/typography';

type PageContainerProps = Readonly<{
	children: ReactNode;
	heading?: string;
}>;

const PageContainer = ({ children, heading }: PageContainerProps): ReactElement => {
	return (
		<div className='max-w-7xl mx-auto p-8 flex flex-col'>
			{heading && <Heading className='mb-4'>{heading}</Heading>}
			{children}
		</div>
	);
};

export default PageContainer;
