import type { ReactElement } from 'react';

import { NavLink } from 'react-router';

import { navHeadingStyle, navTextStyle } from '@/components/typography';

const navGroups = [
	{
		label: 'Research',
		links: [
			{ to: '/publications', label: 'Publications' },
			{ to: '/projects', label: 'Projects' },
		],
	},
	{
		label: 'About',
		links: [
			{ to: '/background', label: 'Background' },
			{ to: '/awards', label: 'Awards' },
			{ to: '/affiliations', label: 'Affiliations' },
		],
	},
];

type NavigationProps = Readonly<{
	onClose: () => void;
}>;

const Navigation = ({ onClose }: NavigationProps): ReactElement => (
	<nav className='min-h-0 flex-1 overflow-y-auto flex flex-col gap-3 py-3'>
		{navGroups.map((group) => (
			<div key={group.label} className='flex flex-col gap-1'>
				<span className={navHeadingStyle}>{group.label}</span>
				<div className='border-l flex flex-col gap-1 border-slate-400 dark:border-slate-600 transition-colors duration-200'>
					{group.links.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={navTextStyle}
							onClick={onClose}>
							{link.label}
						</NavLink>
					))}
				</div>
			</div>
		))}
	</nav>
);

export default Navigation;
