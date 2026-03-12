import type { ReactElement } from 'react';

import { Link } from 'react-router';

import PageContainer from '@/components/layout/PageContainer';

const NotFound = (): ReactElement => (
	<PageContainer heading='404'>
		<p>
			Page not found.{' '}
			<Link to='/' className='text-blue-500 hover:underline'>
				Go home
			</Link>
		</p>
	</PageContainer>
);

export default NotFound;
