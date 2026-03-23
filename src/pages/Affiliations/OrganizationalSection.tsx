import type { ReactElement } from 'react';

import { Subheading } from '@/components/typography';
import { organizational } from '@/data/affiliations.json';

import AffiliationCard from './AffiliationCard';

const OrganizationalSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Organizational</Subheading>

		<ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
			{organizational.map((item) => (
				<AffiliationCard
					key={item.organization}
					name={item.organization}
					url={item.url}
					logo={item.logo}
					logoBg={item.logoBg}
					subtitle={item.role}
				/>
			))}
		</ul>
	</section>
);

export default OrganizationalSection;
