import type { ReactElement } from 'react';

import {
	InlineLink,
	SmallText,
	Subheading,
	XlText,
} from '@/components/typography';
import data from '@/data/affiliations.json';

const AdvisorsAndSupervisorsSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Advisors & Supervisors</Subheading>
		<ul className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2'>
			{data.advisorsAndSupervisors.map((item) => (
				<li key={item.name} className='flex flex-col'>
					<XlText>
						<InlineLink href={item.url}>{item.name}</InlineLink>
					</XlText>
					<SmallText className='block'>{item.title}</SmallText>
					<SmallText className='block'>{item.affiliation}</SmallText>
				</li>
			))}
		</ul>
	</section>
);

export default AdvisorsAndSupervisorsSection;
