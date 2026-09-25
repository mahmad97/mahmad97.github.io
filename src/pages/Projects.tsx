import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import {
	accentTitleTextStyle,
	BaseText,
	InlineLink,
	SmallText,
	XlText,
} from '@/components/typography';
import projectsData from '@/data/projects.json';
import { buildLinks, buildMeta } from '@/utils/meta';

const PAGE = {
	title: 'Projects',
	description: 'Research and software projects by Mohammad Ahmad.',
	path: '/projects',
};

const meta = () => buildMeta(PAGE);

const links = () => buildLinks(PAGE);

interface ProjectLink {
	label: string;
	url: string;
}

const Projects = (): ReactElement => (
	<PageContainer heading='Projects'>
		<ul className='flex flex-col gap-4'>
			{projectsData.map((item) => (
				<li
					key={item.title}
					className='p-4 border flex flex-col gap-3 rounded-xl border-slate-400 dark:border-slate-600'>
					<div className='flex items-start justify-between gap-4'>
						<XlText className={accentTitleTextStyle}>{item.title}</XlText>
						<div className='flex flex-col gap-1 items-end shrink-0'>
							<SmallText>{item.period}</SmallText>
							<SmallText>{item.status}</SmallText>
						</div>
					</div>

					<BaseText>{item.description}</BaseText>

					{item.highlights.length > 0 && (
						<ul className='flex flex-col gap-1 list-disc list-outside pl-4'>
							{item.highlights.map((h) => (
								<li key={h}>
									<SmallText className='inline'>{h}</SmallText>
								</li>
							))}
						</ul>
					)}

					<ul className='flex flex-wrap gap-2'>
						{item.stack.map((tool) => (
							<li
								key={tool}
								className='px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800'>
								<SmallText>{tool}</SmallText>
							</li>
						))}
					</ul>

					{item.links.length > 0 && (
						<div className='flex flex-wrap gap-4'>
							{(item.links as ProjectLink[]).map((link) => (
								<InlineLink key={link.url} href={link.url}>
									{link.label}
								</InlineLink>
							))}
						</div>
					)}
				</li>
			))}
		</ul>
	</PageContainer>
);

export { links, meta };
export default Projects;
