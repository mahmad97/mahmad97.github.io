import type { ReactElement } from 'react';

import { InlineLink, SmallText } from '@/components/typography';

interface AffiliationCardProps {
	name: string;
	url: string;
	logo?: string;
	logoBg?: string;
	subtitle: string;
}

const AffiliationCard = ({
	name,
	url,
	logo,
	logoBg,
	subtitle,
}: AffiliationCardProps): ReactElement => (
	<li className='p-4 border flex flex-col items-center text-center gap-3 rounded-xl border-slate-400 dark:border-slate-600'>
		{logo ? (
			<img
				src={logo}
				alt={name}
				className={`w-full h-16 p-2 rounded-sm object-contain ${logoBg ?? 'bg-slate-50'}`}
			/>
		) : (
			<div className='w-full h-16 rounded-lg bg-neutral-100 dark:bg-neutral-800' />
		)}

		<div className='flex flex-col gap-1'>
			<SmallText className='font-semibold'>
				<InlineLink href={url}>{name}</InlineLink>
			</SmallText>
			<SmallText className='block'>{subtitle}</SmallText>
		</div>
	</li>
);

export default AffiliationCard;
