import type { ReactElement } from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { LuFileUser, LuMail } from 'react-icons/lu';

import OrchidIcon from '@/assets/orchidicon.svg?react';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import { Heading, XlText } from '@/components/typography';

const ProfileSection = (): ReactElement => (
	<div className='flex flex-col md:flex-row gap-6 md:gap-8 mb-8'>
		<img
			src={new URL('@/assets/profile.png', import.meta.url).href}
			alt='Profile picture'
			className='w-56 h-56 mx-auto md:mx-0 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-lg object-cover shrink-0'
		/>
		<div className='flex flex-col flex-grow gap-6 md:gap-8'>
			<div className='flex flex-col'>
				<Heading className='mb-4'>Mohammad Ahmad</Heading>
				<XlText className='mb-2 text-xl'>PhD Student in Computer Science</XlText>
				<XlText className='mb-2'>College of AI, Cyber and Computing</XlText>
				<XlText>The University of Texas at San Antonio</XlText>
			</div>

			<div className='flex gap-4'>
				<IconButton href='mailto:mohammad.ahmad@utsa.edu' title='Email'>
					<LuMail size={24} strokeWidth={2.5} />
				</IconButton>

				<IconButton
					href='https://www.linkedin.com/in/mahmad97/'
					title='LinkedIn'
					target='_blank'
					rel='noopener noreferrer'>
					<FaLinkedin size={24} />
				</IconButton>

				<IconButton
					href='https://scholar.google.com/citations?hl=en&user=jg16MDkAAAAJ&view_op=list_works&sortby=pubdate'
					title='Google Scholar'
					target='_blank'
					rel='noopener noreferrer'>
					<FaGoogleScholar size={24} />
				</IconButton>

				<IconButton
					href='https://github.com/mahmad97'
					title='GitHub'
					target='_blank'
					rel='noopener noreferrer'>
					<FaGithub size={24} />
				</IconButton>

				<IconButton
					href='https://orcid.org/0009-0005-9923-7490'
					title='ORCID'
					target='_blank'
					rel='noopener noreferrer'>
					{/* @ts-expect-error SVG component types */}
					<OrchidIcon className='w-6 h-6' />
				</IconButton>
			</div>

			<div>
				<Button href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
					<LuFileUser size={24} strokeWidth={2} />
					Resume
				</Button>
			</div>
		</div>
	</div>
);

export default ProfileSection;
