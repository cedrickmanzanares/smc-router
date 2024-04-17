import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';
import { text, curve, translate } from './anim';
import useAnim from '@/hooks/use-anim';
import Lenis from '@studio-freight/lenis';
import { initializeToken, useGetToggleFill } from '@/data/data';

import { env } from '/next.config';

import { MenuContext, PreloadContext, ThemeContext } from '@/pages/_app';
import { getColors } from '@/hooks/use-color';

// const routes = {
// 	'/': 'Your World Made Better',
// 	'/disclosures': 'Disclosures',
// 	'/disclosures/inner': 'Disclosures Inner',
// 	'/contact': 'Contact',

// 	'/our-story': 'Our Story',
// 	'/our-story/our-values': 'Our Values',
// 	'/our-story/our-strategy': 'Our Strategy',
// 	'/our-story/our-history': 'Our History',
// 	'/our-story/our-business': 'Our Business',
// 	'/our-story/environmental-and-other-programs':
// 		'Enviromental and other Programs',
// 	'/news': 'News',

// 	'/corporate': 'Corporate',
// };

export default function Curve({ children }) {
	const router = useRouter();
	const { red, blue, yellow } = getColors;
	const { smcTheme } = useContext(ThemeContext);
	const preload = useContext(PreloadContext);
	const menu = useContext(MenuContext);

	const [routes, setRoutes] = useState({ '/': 'Your World Made Better' });

	useEffect(() => {
		let route = routes;
		let parentSlug = '/';
		menu.map((item_1) => {
			let parentSlug_1 = '/';
			let item_1_link = item_1.url ? ite_1.urlm : item_1.page[0].slug;

			route[`${parentSlug_1}${item_1_link}`] = item_1.title;

			item_1.children.map((item_2) => {
				let parentSlug_2 = `${parentSlug_1}${item_1_link}`;

				let item_2_link = item_2.url ? item_2.url : item_2.page[0].slug;
				item_2_link = item_2_link.split('/').pop();
				route[`${parentSlug_2}/${item_2_link}`] = item_2.title;

				item_2.children.map((item_3) => {
					let parentSlug_3 = `${parentSlug_1}${item_2_link}`;

					let item_3_link = item_3.url ? item_3.url : item_3.page[0].slug;
					item_3_link = item_3_link.split('/').pop();
					route[`${parentSlug_2}/${item_3_link}`] = item_3.title;

					item_3.children.map((item_4) => {
						let parentSlug_4 = `${parentSlug_1}${item_3_link}`;

						let item_4_link = item_4.url ? item_4.url : item_4.page[0].slug;
						item_4_link = item_4_link.split('/').pop();
						route[`${parentSlug_2}/${item_4_link}`] = item_4.title;
					});
				});
			});
		});

		setRoutes((prev) => {
			return { ...prev, ...route };
		});
	}, [menu]);

	let text_altered = text;
	text_altered.enter.top = router.route == '/' ? '40vh' : -100;
	// text_altered.exit.transitionEnd = router.route == '/' ? '40vh' : '47.5%';

	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		const lenis = new Lenis();

		const raf = (time) => {
			lenis.raf(time);

			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<div className={`${smcTheme} page curve`}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className='background'
			/>

			<motion.h6
				className='route heading-1'
				{...useAnim(text_altered, preload)}>
				{routes[router.route]}
			</motion.h6>

			{dimensions.width != null && <SVG {...dimensions} />}
			{dimensions.width == null && <div className='cheat-cover'></div>}
			{children}
		</div>
	);
}

const SVG = ({ height, width }) => {
	const { smcTheme } = useContext(ThemeContext);
	const { red, blue, yellow } = getColors;

	const [color, setColor] = useState(red);
	useEffect(() => {
		if (smcTheme === 'smc-red') setColor(red);
		if (smcTheme === 'smc-blue') setColor(blue);
		if (smcTheme === 'smc-yellow') setColor(yellow);
	}, [smcTheme]);

	const preload = useContext(PreloadContext);
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
	    M0 300
	    Q${width / 2} 0 ${width} 300
	    L${width} ${height}
	    Q${width / 2} ${height} 0 ${height}
	    L0 0
	`;

	return (
		<motion.svg className='route-transition' {...useAnim(translate, preload)}>
			<motion.path
				// animate={{ fill: color }}
				fill={color}
				{...useAnim(curve(initialPath, targetPath, color), preload)}
			/>
		</motion.svg>
	);
};
