import type { ReactElement } from 'react';

import { Subheading } from '@/components/typography';

const researchInterests = [
	'Computer Architecture',
	'In-Memory Computing',
	'Domain Wall Memory',
	'Embedded Systems',
	'TinyML',
	'ML on Novel Hardware',
	'Intermittent Computing',
	'IoT',
];

const ResearchInterestsSection = (): ReactElement => (
	<div>
		<Subheading className='mb-4'>Research Interests</Subheading>
		<div className='flex flex-wrap gap-2'>
			{researchInterests.map((interest) => (
				<span
					key={interest}
					className='px-3 py-1 text-sm rounded-full border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 transition-colors duration-200'>
					{interest}
				</span>
			))}
		</div>
	</div>
);

export default ResearchInterestsSection;
