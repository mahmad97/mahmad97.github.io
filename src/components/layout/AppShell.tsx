import type { ReactElement } from 'react';

import { useState } from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SideDrawer from '@/components/layout/SideDrawer';

const AppShell = (): ReactElement => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Mobile topbar */}
			<Header onMenuClick={() => setOpen(true)} />

			{/* Mobile drawer */}
			{open && <SideDrawer />}

			{/* Desktop sidebar */}
			<Sidebar />
		</>
	);
};

export default AppShell;
