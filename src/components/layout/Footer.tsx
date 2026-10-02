import type { ReactElement } from 'react';

import { InlineLink, SmallText } from '@/components/typography';
import { BUILD_MONTH, BUILD_YEAR } from '@/utils/buildDate';

const Footer = (): ReactElement => (
	<footer className='pt-4 pb-8 flex flex-col text-center gap-1'>
		<SmallText>© {BUILD_YEAR} Mohammad Ahmad</SmallText>

		<SmallText>
			<InlineLink href='https://github.com/mahmad97/mahmad97.github.io'>
				{'</>'}
			</InlineLink>{' '}
			• Last updated{' '}
			{BUILD_MONTH}
		</SmallText>
	</footer>
);

export default Footer;
