import type { ReactElement } from 'react';

import { Subheading } from '@/components/typography';
import { education } from '@/data/background.json';

import BackgroundCard from './BackgroundCard';

const EducationSection = (): ReactElement => (
	<section className='flex flex-col gap-4'>
		<Subheading>Education</Subheading>

		<ol className='flex flex-col gap-4'>
			{education.map((entry) => (
				<BackgroundCard
					key={entry.degree}
					title={entry.degree}
					subtitle={entry.institution}
					logo={entry.logo}
					logoBg={entry.logoBg}
					period={entry.period}
					description={entry.description}
					cgpa={entry.cgpa}
					highlights={entry.highlights}
				/>
			))}
		</ol>
	</section>
);

export default EducationSection;
