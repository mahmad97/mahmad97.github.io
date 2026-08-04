import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { buildMeta } from '@/utils/meta';

import AcademicSection from './AcademicSection';
import AdvisorsAndSupervisorsSection from './AdvisorsAndSupervisorsSection';
import CollaboratorsSection from './CollaboratorsSection';
import OrganizationalSection from './OrganizationalSection';

const meta = () =>
	buildMeta({
		title: 'Affiliations',
		description:
			'Academic and organizational affiliations, advisors, supervisors, and collaborators of Mohammad Ahmad.',
		path: '/affiliations',
	});

const Affiliations = (): ReactElement => (
	<PageContainer heading='Affiliations'>
		<AcademicSection />
		<AdvisorsAndSupervisorsSection />
		<CollaboratorsSection />
		<OrganizationalSection />
	</PageContainer>
);

export { meta };
export default Affiliations;
