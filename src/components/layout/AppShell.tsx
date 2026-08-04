import type { ReactElement } from 'react';

import { useCallback, useRef, useState } from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SideDrawer from '@/components/layout/SideDrawer';

const AppShell = (): ReactElement => {
	const [open, setOpen] = useState(false);

	// The drawer returns focus here when it closes.
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	// Stable identity so the drawer's key listeners aren't torn down and
	// re-attached on every render.
	const openDrawer = useCallback(() => setOpen(true), []);
	const closeDrawer = useCallback(() => setOpen(false), []);

	return (
		<>
			{/* Mobile topbar */}
			<Header onMenuClick={openDrawer} menuButtonRef={menuButtonRef} />

			{/* Mobile drawer */}
			<SideDrawer
				isOpen={open}
				closeDrawer={closeDrawer}
				menuButtonRef={menuButtonRef}
			/>

			{/* Desktop sidebar */}
			<Sidebar />
		</>
	);
};

export default AppShell;
