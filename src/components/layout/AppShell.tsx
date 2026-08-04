import type { ReactElement } from 'react';

import { useCallback, useState } from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SideDrawer from '@/components/layout/SideDrawer';

const AppShell = (): ReactElement => {
	const [open, setOpen] = useState(false);

	// Stable identity so the drawer's Escape listener isn't torn down and
	// re-attached on every render.
	const openDrawer = useCallback(() => setOpen(true), []);
	const closeDrawer = useCallback(() => setOpen(false), []);

	return (
		<>
			{/* Mobile topbar */}
			<Header onMenuClick={openDrawer} />

			{/* Mobile drawer */}
			<SideDrawer isOpen={open} closeDrawer={closeDrawer} />

			{/* Desktop sidebar */}
			<Sidebar />
		</>
	);
};

export default AppShell;
