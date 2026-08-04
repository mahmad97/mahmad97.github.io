import type { ReactElement } from 'react';

import { Link } from 'react-router';

import PageContainer from '@/components/layout/PageContainer';
import { BaseText } from '@/components/typography';
import { buildMeta } from '@/utils/meta';

const meta = () => [
	...buildMeta({
		title: 'Page not found',
		description: 'The requested page could not be found.',
		path: '/404',
	}),
	{ name: 'robots', content: 'noindex' },
];

const NotFound = (): ReactElement => (
	<PageContainer heading='404'>
		<BaseText>
			Page not found.{' '}
			<Link to='/' className='text-blue-500 hover:underline'>
				Go home
			</Link>
		</BaseText>
	</PageContainer>
);

export { meta };
export default NotFound;
