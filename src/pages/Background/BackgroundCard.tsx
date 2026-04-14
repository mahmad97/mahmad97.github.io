import type { ReactElement } from 'react';

import { BaseText, SmallText, XlText } from '@/components/typography';

interface BackgroundCardProps {
	title: string;
	subtitle: string;
	period: string;
	description: string;
	logo?: string;
	logoBg?: string;
	cgpa?: string;
	highlights?: string[];
}

const BackgroundCard = ({
	title,
	subtitle,
	period,
	description,
	logo,
	logoBg,
	cgpa,
	highlights,
}: BackgroundCardProps): ReactElement => (
	<li className='p-4 border flex flex-col gap-3 rounded-xl border-slate-400 dark:border-slate-600'>
		<div className='flex items-center justify-between gap-4'>
			<div className='flex items-center gap-3'>
				{logo ? (
					<img
						src={logo}
						alt={subtitle}
						className='h-14 w-14 rounded-sm object-contain shrink-0 p-2'
						style={{ backgroundColor: logoBg ?? '#f8fafc' }}
					/>
				) : (
					<div className='h-14 w-14 rounded-sm shrink-0 bg-neutral-100 dark:bg-neutral-800' />
				)}
				<div>
					<XlText className='text-blue-500 dark:text-blue-500'>{title}</XlText>
					<BaseText className='text-neutral-500 dark:text-neutral-400'>
						{subtitle}
					</BaseText>
				</div>
			</div>

			<div className='flex flex-col gap-1 items-end shrink-0'>
				<SmallText>{period}</SmallText>
				<SmallText className={cgpa ? '' : 'invisible'}>CGPA: {cgpa}</SmallText>
			</div>
		</div>

		<BaseText>{description}</BaseText>

		{highlights && (
			<ul className='flex flex-col gap-1 list-disc list-outside pl-4'>
				{highlights.map((h) => (
					<li key={h}>
						<SmallText className='inline'>{h}</SmallText>
					</li>
				))}
			</ul>
		)}
	</li>
);

export default BackgroundCard;
