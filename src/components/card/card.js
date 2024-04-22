'use client';

import Image3D from '@/cms-components/Image3D/Image3D';
import { useRef } from 'react';
import SingleParallax from '../../cms-components/SingleParallax/single-parallax';
import Button from '../button/button';
import { motion, useScroll } from 'framer-motion';

export default function Card({ scrollYProgress_start, children, images }) {
	const parent = useRef(null);
	// const { scrollYProgress: scrollYProgress_start } = useScroll({
	// 	target: parent,
	// 	offset: ['start end', 'end start'],
	// });

	return (
		<>
			<Image3D images={images} scrollYProgress_start={scrollYProgress_start} />
			<SingleParallax scrollYProgress_start={scrollYProgress_start}>
				{children}
			</SingleParallax>
		</>
	);
}
