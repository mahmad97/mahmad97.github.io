import type { ReactElement } from 'react';

import { BaseText, InlineLink, Subheading } from '@/components/typography';

const BiographySection = (): ReactElement => (
	<section>
		<Subheading className='mb-4'>Biography</Subheading>
		<BaseText className='mb-4'>
			I am a PhD student in Computer Science at{' '}
			<InlineLink href='https://www.utsa.edu/'>
				The University of Texas at San Antonio
			</InlineLink>
			, where I am advised by{' '}
			<InlineLink href='https://sites.google.com/view/mxie'>
				Dr. Mimi Xie
			</InlineLink>
			. My research focuses on computer architecture, with a particular interest
			in in-memory computing and domain wall memory. I am also interested in
			energy-efficient computing, embedded systems, and the implementation of
			machine learning algorithms on novel hardware architectures.
		</BaseText>
		<BaseText>
			I hold an MS in Computer Science from{' '}
			<InlineLink href='https://www.psu.edu/'>
				The Pennsylvania State University
			</InlineLink>{' '}
			and a BEng in Computer Science from{' '}
			<InlineLink href='https://www.hku.hk/'>
				The University of Hong Kong
			</InlineLink>
			.
		</BaseText>
	</section>
);

export default BiographySection;
