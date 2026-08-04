import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildMeta } from '@/utils/meta';

const meta = () =>
	buildMeta({
		title: 'Projects',
		description: 'Research and software projects by Mohammad Ahmad.',
		path: '/projects',
	});

const Projects = (): ReactElement => (
	<PageContainer heading='Projects'>
		<p>Work in progress...</p>
	</PageContainer>
);

export { meta };
export default Projects;
