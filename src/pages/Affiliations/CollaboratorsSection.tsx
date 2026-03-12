import type { ReactElement } from 'react';

import { InlineLink, SmallText, Subheading, XlText } from '@/components/typography';
import { collaborators } from '@/data/affiliations.json';

const CollaboratorsSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Collaborators</Subheading>
		<ul className='flex flex-col gap-4'>
			{collaborators.map((item) => (
				<li key={item.name} className='flex flex-col'>
					<InlineLink href={item.url}>
						<XlText>{item.name}</XlText>
					</InlineLink>
					<SmallText>{item.institution}</SmallText>
				</li>
			))}
		</ul>
	</section>
);

export default CollaboratorsSection;
