import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router';

import Header from '@/components/layout/Header';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Research from '@/pages/Research';
// import BlogPost from './pages/BlogPost';
// import NotFound from './pages/NotFound';

import './App.css';

const App = (): ReactElement => {
	return (
		<div className='min-w-xs min-h-screen'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/research' element={<Research />} />
				{/* <Route path='/blog/:slug' element={<BlogPost />} />
				<Route path='*' element={<NotFound />} /> */}
			</Routes>
		</div>
	);
};

export default App;
