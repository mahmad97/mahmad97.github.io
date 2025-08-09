import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div className='p-2'>
			<div>
				<p>Hello Vite</p>
				<p>This is Mohammad's website</p>
			</div>
			<div>
				<p className='font-sans'>This is Inter.</p>
				<p className='font-mono'>This text is in Roboto.</p>
				<p className='font-serif'>And this text is in fancy Garamond.</p>
			</div>
		</div>
	);
}
