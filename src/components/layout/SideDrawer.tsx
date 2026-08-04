import type { ReactElement, RefObject } from 'react';

import { useEffect, useRef } from 'react';
import { LuX } from 'react-icons/lu';
import { Link } from 'react-router';

import MALogo from '@/assets/logos/MA.svg?react';
import Navigation from '@/components/layout/Navigation';

type SideDrawerProps = Readonly<{
	isOpen: boolean;
	closeDrawer: () => void;
	menuButtonRef: RefObject<HTMLButtonElement | null>;
}>;

const FOCUSABLE = 'a[href], button:not([disabled])';

const SideDrawer = ({
	isOpen,
	closeDrawer,
	menuButtonRef,
}: SideDrawerProps): ReactElement => {
	const asideRef = useRef<HTMLElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const wasOpen = useRef(false);

	// Move focus into the drawer on open and back to the hamburger on close.
	// Without the return step `inert` drops focus to <body> and a keyboard user
	// restarts from the top of the document. Guarded by `wasOpen` so the first
	// render doesn't steal focus on a page that was never opened.
	useEffect(() => {
		if (isOpen) {
			wasOpen.current = true;
			closeButtonRef.current?.focus();
		} else if (wasOpen.current) {
			wasOpen.current = false;
			menuButtonRef.current?.focus();
		}
	}, [isOpen, menuButtonRef]);

	// The drawer is modal — the overlay covers the page behind it — so Tab has to
	// stay inside it rather than walking through controls the user can't see.
	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') {
				closeDrawer();
				return;
			}

			if (event.key !== 'Tab' || !asideRef.current) return;

			const items = asideRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
			if (items.length === 0) return;

			const first = items[0];
			const last = items[items.length - 1];
			const active = document.activeElement;

			if (event.shiftKey && active === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && active === last) {
				event.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [isOpen, closeDrawer]);

	return (
		<>
			<div
				className={`md:hidden fixed inset-0 z-20 bg-black/20 dark:bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
				onClick={closeDrawer}
			/>
			{/* `inert` when closed: the drawer is only translated off-screen, so
			    without it the 8 controls inside stay focusable and keyboard users
			    tab through invisible links after the hamburger. */}
			<aside
				ref={asideRef}
				inert={!isOpen}
				role='dialog'
				aria-modal='true'
				aria-label='Site navigation'
				className={`fixed left-0 z-30 w-64 h-full px-4 py-3 border-r md:hidden flex flex-col border-slate-400 dark:border-slate-600 backdrop-blur transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
				<div className='flex items-center justify-between pb-3 border-b border-slate-400 dark:border-slate-600'>
					<Link
						to='/'
						className='w-10 h-10 [&>svg]:w-full [&>svg]:h-full'
						onClick={closeDrawer}>
						<MALogo />
					</Link>

					<button
						ref={closeButtonRef}
						type='button'
						className='cursor-pointer text-blue-500'
						aria-label='Close menu'
						onClick={closeDrawer}>
						<LuX size={24} strokeWidth={2.5} />
					</button>
				</div>

				<Navigation onClose={closeDrawer} />
			</aside>
		</>
	);
};

export default SideDrawer;
