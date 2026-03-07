import type { ReactElement } from 'react';

import PageContainer from '@/components/layout/PageContainer';
import { Heading } from '@/components/typography';

const Home = (): ReactElement => {
	return (
		<PageContainer>
			<div className='flex items-center justify-between'>
				<div>Image</div>
				<div className='flex flex-col'>
					<Heading>Mohammad Ahmad</Heading>
					<p>PhD Student in Computer Science</p>
					<p>University of Texas at San Antonio</p>
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
