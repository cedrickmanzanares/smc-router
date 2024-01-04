import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import '@/styles/styles.scss';
import Nav from '@/components/Layout/Nav/nav';
import ShapeBg from '@/components/Layout/ShapeBg/shapebg';
import Footer from '@/components/Layout/Footer/footer';

export default function App({ Component, pageProps, router }) {
	return (
		<div className='main'>
			<Nav />
			<AnimatePresence mode='wait'>
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<Footer></Footer>
			<ShapeBg />
		</div>
	);
}
