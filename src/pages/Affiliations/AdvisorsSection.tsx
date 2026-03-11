import type { ReactElement } from 'react';

import { InlineLink, SmallText, Subheading, XlText } from '@/components/typography';
import data from '@/data/affiliations.json';

const AdvisorsSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Advisors</Subheading>
		<ul className='flex flex-col gap-4'>
			{data.advisors.map((item) => (
				<li key={item.name} className='flex flex-col'>
					<InlineLink href={item.url}>
						<XlText>{item.name}</XlText>
					</InlineLink>
					<SmallText>{item.title}</SmallText>
					<SmallText>{item.institution}</SmallText>
				</li>
			))}
		</ul>
	</section>
);

export default AdvisorsSection;
