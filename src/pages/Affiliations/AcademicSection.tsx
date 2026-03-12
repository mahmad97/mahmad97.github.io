import type { ReactElement } from 'react';

import { Subheading } from '@/components/typography';
import { academic } from '@/data/affiliations.json';

import AffiliationCard from './AffiliationCard';

const AcademicSection = (): ReactElement => (
	<section className='flex flex-col gap-3'>
		<Subheading>Academic</Subheading>
		<ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
			{academic.map((item) => (
				<AffiliationCard
					key={item.institution}
					name={item.institution}
					url={item.url}
					logo={item.logo}
					subtitle={item.roles}
				/>
			))}
		</ul>
	</section>
);

export default AcademicSection;
