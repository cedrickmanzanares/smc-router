'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';

export default function SingleParallax({ children, scrollYProgress_start }) {
	const springScroll = useSpring(scrollYProgress_start, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	let yValues = useTransform(springScroll, [0, 1], [`-60%`, `-40%`]);

	return (
		<motion.div className='single-parallax'>
			<motion.div
				initial={{
					x: '-50%',
					y: '-50%',
					height: '120%',
					width: '120%',
				}}
				style={{
					y: yValues,
				}}>
				{children}
			</motion.div>
		</motion.div>
	);
}
