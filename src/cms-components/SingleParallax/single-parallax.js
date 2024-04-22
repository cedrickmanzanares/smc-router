'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';

export default function SingleParallax({ children }) {
	const singleParallax = useRef();
	const { scrollYProgress } = useScroll({
		target: singleParallax,
	});

	let yValues = useTransform(scrollYProgress, [0, 1], [`-55%`, `-45%`]);

	return (
		<motion.div className='single-parallax' ref={singleParallax}>
			<motion.div
				initial={{
					x: '-50%',
					y: '-50%',
					height: '110%',
					width: '110%',
				}}
				style={{
					y: yValues,
				}}>
				{children}
			</motion.div>
		</motion.div>
	);
}
