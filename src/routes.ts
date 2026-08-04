import { type RouteConfig, index, route } from '@react-router/dev/routes';

const routes = [
	index('pages/Home/index.tsx'),
	route('publications', 'pages/Publications.tsx'),
	route('projects', 'pages/Projects.tsx'),
	route('services', 'pages/Services/index.tsx'),
	route('news', 'pages/News.tsx'),
	route('background', 'pages/Background/index.tsx'),
	route('awards', 'pages/Awards.tsx'),
	route('affiliations', 'pages/Affiliations/index.tsx'),
	// route('blog/:slug', 'pages/BlogPost.tsx'),
	route('*', 'pages/NotFound.tsx'),
] satisfies RouteConfig;

export default routes;
