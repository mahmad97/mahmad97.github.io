import type { ReactElement } from 'react';

import { InlineLink, SmallText, Subheading, XlText } from '@/components/typography';
import servicesData from '@/data/services.json';

type CommitteeEntry = { organization: string; url: string; role: string; year: string };

const committee = servicesData.committee as CommitteeEntry[];

const CommitteeSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Program Committee</Subheading>

		<ul className='flex flex-col gap-3'>
			{committee.map((item) => (
				<li key={`${item.organization}-${item.year}`} className='flex flex-col'>
					<XlText className='text-blue-500 dark:text-blue-500'>
						{item.url ? (
							<InlineLink href={item.url}>{item.organization}</InlineLink>
						) : (
							item.organization
						)}
					</XlText>
					<SmallText className='block'>
						{item.role}
						{item.year ? ` · ${item.year}` : ''}
					</SmallText>
				</li>
			))}
		</ul>
	</section>
);

export default CommitteeSection;
