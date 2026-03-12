import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';

import AcademicSection from './AcademicSection';
import AdvisorsAndSupervisorsSection from './AdvisorsAndSupervisorsSection';
import CollaboratorsSection from './CollaboratorsSection';
import OrganizationalSection from './OrganizationalSection';

const Affiliations = (): ReactElement => (
	<PageContainer heading='Affiliations'>
		<AcademicSection />
		<AdvisorsAndSupervisorsSection />
		<CollaboratorsSection />
		<OrganizationalSection />
	</PageContainer>
);

export default Affiliations;
