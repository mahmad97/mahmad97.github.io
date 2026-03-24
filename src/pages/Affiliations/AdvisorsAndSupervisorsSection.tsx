import type { ReactElement } from 'react';

import {
	InlineLink,
	SmallText,
	Subheading,
	XlText,
} from '@/components/typography';
import { advisorsAndSupervisors } from '@/data/affiliations.json';

const AdvisorsAndSupervisorsSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Advisors & Supervisors</Subheading>

		<ul className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
			{advisorsAndSupervisors.map((item) => (
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
