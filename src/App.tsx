import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router';

import AppShell from './components/layout/AppShell';
import Footer from '@/components/layout/Footer';
import Affiliations from '@/pages/Affiliations';
import Awards from '@/pages/Awards';
import Background from '@/pages/Background';
import Home from '@/pages/Home';
import News from '@/pages/News';
import NotFound from '@/pages/NotFound';
import Projects from '@/pages/Projects';
import Publications from '@/pages/Publications';
import Services from '@/pages/Services';
// import BlogPost from './pages/BlogPost';

import './App.css';

const App = (): ReactElement => {
	return (
		<div className='min-w-xs h-screen overflow-y-auto md:overflow-y-hidden flex flex-col md:flex-row'>
			<AppShell />
			<div className='flex-grow md:overflow-y-auto flex flex-col'>
				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/publications' element={<Publications />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/news' element={<News />} />
						<Route path='/background' element={<Background />} />
						<Route path='/awards' element={<Awards />} />
						<Route path='/affiliations' element={<Affiliations />} />
						<Route path='/services' element={<Services />} />
						{/* <Route path='/blog/:slug' element={<BlogPost />} /> */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default App;
