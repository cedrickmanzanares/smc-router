'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';

export default function SingleParallax({ children, scrollYProgress_start }) {
	const springScroll = useSpring(scrollYProgress_start, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	let yValues = useTransform(
		springScroll,
		[0, 1],
		[`-25%`, `25%`],
		'anticipate'
	);

	return (
		<motion.div
			className='single-parallax'
			style={{
				y: yValues,
			}}>
			{children}
		</motion.div>
	);
}
