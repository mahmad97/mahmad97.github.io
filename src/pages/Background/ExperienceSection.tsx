import type { ReactElement } from 'react';

import { Subheading } from '@/components/typography';
import { experience } from '@/data/background.json';

import BackgroundCard from './BackgroundCard';

const ExperienceSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Experience</Subheading>

		<ol className='flex flex-col gap-4'>
			{experience.map((entry) => (
				<BackgroundCard
					key={`${entry.role}-${entry.organization}`}
					title={entry.role}
					subtitle={entry.organization}
					logo={entry.logo}
					logoBg={entry.logoBg}
					period={entry.period}
					description={entry.description}
					highlights={entry.highlights}
				/>
			))}
		</ol>
	</section>
);

export default ExperienceSection;
