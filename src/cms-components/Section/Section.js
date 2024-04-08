'use client';

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

	return (
		<motion.div
			className={sectionClasses}
			initial='initial'
			whileInView='visible'
			style={sectionStyle}
			viewport={{
				// once: true,
				amount: 0.5,
			}}>
			<div className={sectionContainerClasses} style={containerStyle}>
				{children}
			</div>
		</motion.div>
	);
}
