'use client';

import useAnim from '@/hooks/use-anim';
import { motion, useAnimate, usePresence } from 'framer-motion';

import { useRef } from 'react';

export default function Section({
	children,
	columnCount = 1,
	containerSize = 'medium',
	containerClass,
	sectionStyle,
	containerStyle,
	direction,
}) {
	const sectionClasses = `section-content column-${columnCount} ${
		direction ? direction : ''
	}`;
	const sectionContainerClasses = `container-fluid-width ${containerSize} ${
		containerClass ? containerClass : ''
	}`;

	const column = useRef(null);

	// const [isPresent, safeToRemove] = usePresence();
	// const [scope, animate] = useAnimate();
	const section_anim = {
		initial: {
			y: 100,
			opacity: 0,
		},
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.75,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			y: -50,
			opacity: 0,
			transition: {
				duration: 0.5,
				delay: 0.075,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	};

	return (
		<motion.div
			className={sectionClasses}
			{...useAnim(section_anim)}
			style={sectionStyle}>
			<div className={sectionContainerClasses} style={containerStyle}>
				{children}
			</div>
		</motion.div>
	);
}
