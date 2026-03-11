import type { ReactElement } from 'react';

import { InlineLink, SmallText, Subheading, XlText } from '@/components/typography';
import data from '@/data/affiliations.json';

const OrganizationalSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Organizational</Subheading>
		<ul className='flex flex-col gap-4'>
			{data.organizational.map((item) => (
				<li key={item.organization} className='flex flex-col'>
					<InlineLink href={item.url}>
						<XlText>{item.organization}</XlText>
					</InlineLink>
					<SmallText>{item.role}</SmallText>
					<SmallText>{item.years}</SmallText>
				</li>
			))}
		</ul>
	</section>
);

export default OrganizationalSection;
