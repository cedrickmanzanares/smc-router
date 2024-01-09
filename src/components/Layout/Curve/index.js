import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { text, curve, translate } from './anim';
import useAnim from '@/hooks/use-anim';
import Lenis from '@studio-freight/lenis';

const routes = {
	'/': 'Ready For Tomorrow',
	'/disclosures': 'Disclosures',
	'/disclosures/inner': 'Disclosures Inner',
	'/contact': 'Contact',

	'/our-story': 'Our Story',
	'/our-story/our-values': 'Our Values',
	'/our-story/our-strategy': 'Our Strategy',
	'/our-story/our-history': 'Our History',
	'/our-story/our-business': 'Our Business',

	'/news': 'News',
};

export default function Curve({ children, backgroundColor }) {
	const router = useRouter();

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
		<div className='page curve' style={{ backgroundColor }}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className='background'
			/>

			<motion.h6 className='route heading-1' {...useAnim(text)}>
				{routes[router.route]}
			</motion.h6>
			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
		</div>
	);
}

const SVG = ({ height, width }) => {
	console.log(height, width);
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
