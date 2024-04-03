import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';
import { text, curve, translate } from './anim';
import useAnim from '@/hooks/use-anim';
import Lenis from '@studio-freight/lenis';
import { initializeToken } from '@/data/data';

import { env } from '/next.config';

import { MenuContext, ThemeContext } from '@/pages/_app';

const routes = {
	'/': 'Your World Made Better',
	'/disclosures': 'Disclosures',
	'/disclosures/inner': 'Disclosures Inner',
	'/contact': 'Contact',

	'/our-story': 'Our Story',
	'/our-story/our-values': 'Our Values',
	'/our-story/our-strategy': 'Our Strategy',
	'/our-story/our-history': 'Our History',
	'/our-story/our-business': 'Our Business',
	'/our-story/environmental-and-other-programs':
		'Enviromental and other Programs',
	'/news': 'News',

	'/corporate': 'Corporate',
};

export default function Curve({ children }) {
	const router = useRouter();

	const smcTheme = useContext(ThemeContext);

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

			<motion.h6 className='route heading-1' {...useAnim(text_altered)}>
				{routes[router.route]}
			</motion.h6>

			{dimensions.width != null && <SVG {...dimensions} />}
			{dimensions.width == null && <div className='cheat-cover'></div>}
			{children}
		</div>
	);
}

const SVG = ({ height, width }) => {
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
		<motion.svg className='route-transition' {...useAnim(translate)}>
			<motion.path {...useAnim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};
