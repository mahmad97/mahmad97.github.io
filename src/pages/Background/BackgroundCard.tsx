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
	<li className='p-4 border flex flex-col gap-3 rounded-xl border-slate-400 dark:border-slate-600 transition-colors duration-200'>
		<div className='flex items-start justify-between gap-4'>
			<div className='flex items-center gap-3'>
				{logo ? (
					<img
						src={logo}
						alt={subtitle}
						className={`h-12 w-12 rounded-sm object-contain shrink-0 p-1 ${logoBg ?? 'bg-slate-50'}`}
					/>
				) : (
					<div className='h-12 w-12 rounded-sm shrink-0 bg-neutral-100 dark:bg-neutral-800' />
				)}
				<div>
					<XlText className='text-blue-500 dark:text-blue-500'>{title}</XlText>
					<BaseText className='text-neutral-500 dark:text-neutral-400'>
						{subtitle}
					</BaseText>
				</div>
			</div>

			<div className='flex flex-col gap-1 items-end shrink-0'>
				<SmallText className='mt-1'>{period}</SmallText>
				{cgpa && <SmallText>CGPA: {cgpa}</SmallText>}
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
