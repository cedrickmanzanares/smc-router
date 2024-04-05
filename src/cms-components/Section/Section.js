'use client';
import SingleParallax from '@/components/single-parallax/single-parallax';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';
import Image3D from '../Image3D/Image3D';
import Image from 'next/image';

export default function Section({
	children,
	columnCount = 1,
	containerSize = 'medium',
	sectionStyle,
	containerStyle,
	direction,
}) {
	const sectionClasses = `section-content column-${columnCount} ${
		direction ? direction : ''
	}`;
	const sectionContainerClasses = `container-fluid-width ${containerSize}`;

	const column = useRef(null);

	const { scrollYProgress: column_scroll } = useScroll({
		target: column,
		offset: ['start end', 'end start'],
	});

	const { scrollYProgress: column_scroll_images } = useScroll({
		target: column,
		offset: ['start end', 'end start'],
	});

	return (
		<motion.div
			className={sectionClasses}
			initial='initial'
			whileInView='visible'
			style={sectionStyle}
			viewport={{
				// once: true,
				amount: 0.5,
			}}
			ref={column}>
			<div className={sectionContainerClasses} style={containerStyle}>
				{children}
			</div>
		</motion.div>
	);
}
