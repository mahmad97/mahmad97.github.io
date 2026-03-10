import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Affiliations from '@/pages/Affiliations';
import Awards from '@/pages/Awards';
import Background from '@/pages/Background';
import Home from '@/pages/Home';
import Publications from '@/pages/Publications';
// import Research from '@/pages/Research';
// import BlogPost from './pages/BlogPost';
// import NotFound from './pages/NotFound';

import './App.css';

const App = (): ReactElement => {
	return (
		<div className='min-w-xs min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/publications' element={<Publications />} />
					<Route path='/awards' element={<Awards />} />
					<Route path='/background' element={<Background />} />
					<Route path='/affiliations' element={<Affiliations />} />
					{/* <Route path='/research' element={<Research />} /> */}
					{/* <Route path='/blog/:slug' element={<BlogPost />} />
					<Route path='*' element={<NotFound />} /> */}
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
