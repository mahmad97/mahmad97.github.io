import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildLinks, buildMeta } from '@/utils/meta';

import AcademicSection from './AcademicSection';
import AdvisorsAndSupervisorsSection from './AdvisorsAndSupervisorsSection';
import CollaboratorsSection from './CollaboratorsSection';
import OrganizationalSection from './OrganizationalSection';

const PAGE = {
	title: 'Affiliations',
	description:
		'Academic and organizational affiliations, advisors, supervisors, and collaborators of Mohammad Ahmad.',
	path: '/affiliations',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

const Affiliations = (): ReactElement => (
	<PageContainer heading='Affiliations'>
		<AcademicSection />
		<AdvisorsAndSupervisorsSection />
		<CollaboratorsSection />
		<OrganizationalSection />
	</PageContainer>
);

export { links, meta };
export default Affiliations;
