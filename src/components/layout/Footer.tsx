import type { ReactElement } from 'react';

import { InlineLink, SmallText } from '@/components/typography';

const Footer = (): ReactElement => (
	<footer className='pt-4 pb-8 flex flex-col text-center gap-1'>
		<SmallText>© {new Date().getFullYear()} Mohammad Ahmad</SmallText>

		<SmallText>
			<InlineLink href='https://github.com/mahmad97/mahmad97.github.io'>
				{'</>'}
			</InlineLink>{' '}
			• Last updated{' '}
			{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
		</SmallText>
	</footer>
);

export default Footer;
