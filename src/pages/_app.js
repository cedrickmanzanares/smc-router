import { AnimatePresence } from 'framer-motion';

import { ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

import Nav from '@/components/Layout/Nav/nav';
import ShapeBg from '@/components/Layout/ShapeBg/shapebg';
import Footer from '@/components/Layout/Footer/footer';
import '@/styles/styles.scss';
import { Merriweather, Merriweather_Sans } from 'next/font/google';

import { extendTheme } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import {
	getMenu,
	getTheme,
	getToken,
	initializeToken,
	useGetMenu,
	useGetTheme,
} from '../data/data';
import { env } from '/next.config';
const { api_url, api_uname, api_pass } = env;

const mw = Merriweather({
	weight: ['300', '400', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mw',
});

const mw_sans = Merriweather_Sans({
	weight: ['300', '400', '600', '800'],
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
		bodyBg: '#000000',
	},
	lineHeights: {
		base: '2',
	},
});

export const fonts = {
	mw,
	mw_sans,
};

export const TokenContext = createContext('');
export const MenuContext = createContext([]);
export const ThemeContext = createContext();

export default function App({ Component, pageProps, router }) {
	const [token, setToken] = useState('');
	const { menu } = useGetMenu();
	const { smcTheme } = useGetTheme(menu);

	useEffect(() => {
		console.log(smcTheme);
	}, [smcTheme]);
	useEffect(() => {
		if (!token) {
			let request_data = new FormData();
			request_data.append('email', api_uname);
			request_data.append('password', api_pass);

			fetch(`${api_url}/request`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: api_uname,
					password: api_pass,
				}),
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setToken(data.token);
				});
		}
	}, []);

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
				<ChakraProvider theme={theme}>
					<ThemeContext.Provider value={smcTheme}>
						<MenuContext.Provider value={menu}>
							<TokenContext.Provider value={token}>
								<Nav />
								<AnimatePresence mode='wait'>
									<Component key={router.route} {...pageProps} />
								</AnimatePresence>
								<Footer></Footer>
							</TokenContext.Provider>
						</MenuContext.Provider>
					</ThemeContext.Provider>
				</ChakraProvider>

				{/* <ShapeBg /> */}
			</div>
		</>
	);
}
