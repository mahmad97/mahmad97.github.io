import type { ReactElement } from 'react';

import { Link } from 'react-router';

import PageContainer from '@/components/layout/PageContainer';
import { BaseText } from '@/components/typography';

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

export default NotFound;
