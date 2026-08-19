import type { ReactElement } from 'react';

import { Link } from 'react-router';

import PageContainer from '@/components/layout/PageContainer';
import { BaseText, inlineLinkTextStyle } from '@/components/typography';
import { NOT_FOUND_META } from '@/utils/meta';

const meta = () => NOT_FOUND_META;

const NotFound = (): ReactElement => (
	<PageContainer heading='404'>
		<BaseText>
			Page not found.{' '}
			<Link to='/' className={inlineLinkTextStyle}>
				Go home
			</Link>
		</BaseText>
	</PageContainer>
);

export { meta };
export default NotFound;
