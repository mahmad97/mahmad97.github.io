import type { ReactElement, ReactNode } from 'react';

import { Heading } from '@/components/typography';

type PageContainerProps = Readonly<{
	children: ReactNode;
	heading?: string;
}>;

// The document title now comes from each route's `meta` export (see
// `@/utils/meta`), so it lands in the pre-rendered HTML instead of being set
// after hydration.
const PageContainer = ({
	children,
	heading,
}: PageContainerProps): ReactElement => (
	<div className='max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-8'>
		{heading && <Heading>{heading}</Heading>}
		{children}
	</div>
);

export default PageContainer;
