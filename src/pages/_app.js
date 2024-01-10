import { AnimatePresence } from 'framer-motion';

import { ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

import Nav from '@/components/Layout/Nav/nav';
import ShapeBg from '@/components/Layout/ShapeBg/shapebg';
import Footer from '@/components/Layout/Footer/footer';
import '@/styles/styles.scss';
import { Merriweather, Merriweather_Sans } from 'next/font/google';

const mw = Merriweather({
	weight: ['300', '400', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mw',
});

const mw_sans = Merriweather_Sans({
	weight: ['300', '400', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mw_sans',
});

const theme = extendTheme({
	fonts: {
		heading: 'var(--font-mw_sans)',
		body: 'var(--font-mw)',
	},
	colors: {
		bodyBg: '#fffbf2',
	},
	lineHeights: {
		base: '2',
	},
});

export const fonts = {
	mw,
	mw_sans,
};

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-mw: ${fonts.mw.style.fontFamily};
						--font-mw_sans: ${fonts.mw_sans.style.fontFamily};
					}
				`}
			</style>
			<div
				className='main'
				style={{
					position: 'relative',
				}}>
				<Nav />
				<ChakraProvider theme={theme}>
					<AnimatePresence mode='wait'>
						<Component key={router.route} {...pageProps} />
					</AnimatePresence>
				</ChakraProvider>
				<Footer></Footer>
				<ShapeBg />
			</div>
		</>
	);
}

import { extendTheme } from '@chakra-ui/react';
