import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildLinks, buildMeta } from '@/utils/meta';

const PAGE = {
	title: 'Projects',
	description: 'Research and software projects by Mohammad Ahmad.',
	path: '/projects',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

const Projects = (): ReactElement => (
	<PageContainer heading='Projects'>
		<p>Work in progress...</p>
	</PageContainer>
);

export { links, meta };
export default Projects;
