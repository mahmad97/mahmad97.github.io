import type { ReactElement } from 'react';

import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';

import OrchidIcon from '@/assets/orchidicon.svg?react';
import PageContainer from '@/components/layout/PageContainer';
import { Heading, XlText } from '@/components/typography';

const linkButtonStyle =
	'relative w-9 h-9 border flex items-center justify-center cursor-pointer rounded-md border-slate-400 dark:border-slate-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 transition-colors';

const Home = (): ReactElement => {
	return (
		<PageContainer>
			<div className='flex gap-8 mb-8'>
				<img
					src={new URL('@/assets/profile.png', import.meta.url).href}
					alt='Profile picture'
					className='w-96 h-96 rounded-lg object-cover'
				/>
				<div className='flex flex-col flex-grow gap-8'>
					<div className='flex flex-col'>
						<Heading className='mb-4'>Mohammad Ahmad</Heading>
						<XlText className='mb-2 text-xl'>
							PhD Student in Computer Science
						</XlText>
						<XlText className='mb-2'>College of AI, Cyber and Computing</XlText>
						<XlText>The University of Texas at San Antonio</XlText>
					</div>

					<div className='flex gap-4'>
						<a
							href='mailto:mohammad.ahmad@utsa.edu'
							title='Email'
							className={linkButtonStyle}>
							<Mail size={24} />
						</a>

						<a
							href='https://www.linkedin.com/in/mahmad97/'
							title='LinkedIn'
							target='_blank'
							rel='noopener noreferrer'
							className={linkButtonStyle}>
							<FaLinkedin size={24} />
						</a>

						<a
							href='https://scholar.google.com/citations?hl=en&user=jg16MDkAAAAJ&view_op=list_works&sortby=pubdate'
							title='Google Scholar'
							target='_blank'
							rel='noopener noreferrer'
							className={linkButtonStyle}>
							<FaGoogleScholar size={24} />
						</a>

						<a
							href='https://github.com/mahmad97'
							title='GitHub'
							target='_blank'
							rel='noopener noreferrer'
							className={linkButtonStyle}>
							<FaGithub size={24} />
						</a>

						<a
							href='https://orcid.org/0009-0005-9923-7490'
							title='ORCID'
							target='_blank'
							rel='noopener noreferrer'
							className={linkButtonStyle}>
							{/* @ts-expect-error SVG component types */}
							<OrchidIcon className='w-6 h-6' />
						</a>
					</div>

					<div>Resume</div>
				</div>
			</div>

			<div>
				<p className='font-sans'>This is Inter.</p>
				<p className='font-mono'>This text is in Roboto.</p>
				<p className='font-serif'>And this text is in fancy Garamond.</p>
			</div>
		</PageContainer>
	);
};

export default Home;
