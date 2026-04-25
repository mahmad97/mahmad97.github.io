import type { ReactElement } from 'react';

import { BaseText, Subheading } from '@/components/typography';
import { reviewer } from '@/data/services.json';

const ReviewerSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Reviewer</Subheading>

		<ul className='space-y-3 pl-4'>
			{reviewer.map((item) => (
				<li key={item.venue}>
					<BaseText>{item.venue}</BaseText>
				</li>
			))}
		</ul>
	</section>
);

export default ReviewerSection;
