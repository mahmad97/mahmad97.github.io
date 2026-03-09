import type { ReactElement } from 'react';

import { SmallLinkText, SmallText } from '@/components/typography';

const Footer = (): ReactElement => (
	<footer className='py-6 text-center'>
		<SmallText>
			© {new Date().getFullYear()} Mohammad Ahmad · Last updated{' '}
			{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })} ·{' '}
			<SmallLinkText href='https://github.com/mahmad97/mahmad97.github.io'>
				Source
			</SmallLinkText>
		</SmallText>
	</footer>
);

export default Footer;
