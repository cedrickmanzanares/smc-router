'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { animate } from 'framer-motion/dom';

import useMousePosition from '@/hooks/use-mousepoition';
import { useDimensions } from '@/hooks/use-dimension';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Button({ className, link, children }) {
	const button = useRef(null);
	const windowDimensions = useWindowSize();

	const { width: buttonwidth } = useDimensions(button);
	const { x: mouseX, y: mouseY } = useMousePosition();
	// useEffect(() => {
	// 	console.log(`x: ${mouseX} y: ${mouseY}`);
	// }, [mouseX, mouseY]);
	const buttonVariants = {
		hover: {
			scale: 1.1,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
		tap: {
			scale: 0.95,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
	};

	const buttonHoverStart = (event, info) => {
		const parent = event.target;
		const bg = parent.querySelector('.hover-bg');
		const size =
			windowDimensions.width > windowDimensions.height
				? windowDimensions.width / 2
				: windowDimensions.height / 2;

		const offset = size / 2;
		// const offset = 0;

		animate(
			bg,
			{
				scale: 1,
				// x: `${event.offsetX - offset}px`,
				// y: `${event.offsetY}px`,
			},
			{ duration: 1 }
		);
	};

	const buttonHoverEnd = (event, info) => {
		const parent = event.target;
		const bg = parent.querySelector('.hover-bg');

		const offset =
			windowDimensions.width > windowDimensions.height
				? windowDimensions.width / 2 / 2
				: windowDimensions.height / 2 / 2;

		animate(bg, {
			scale: 0.2,
			// x: `${event.screenX}px`,
			// y: `${event.screenY}px`,
		});
	};

	return (
		<motion.span
			ref={button}
			// whileHover='hover'
			whileTap='tap'
			onHoverStart={(event, info) => {
				buttonHoverStart(event, info);
			}}
			onHoverEnd={(event, info) => {
				buttonHoverEnd(event, info);
			}}
			variants={buttonVariants}
			className={`btn${className ? ` ${className}` : ''}`}>
			<Link href={link}>{children}</Link>
			<motion.span
				className='hover-bg'
				initial={{
					scale: 0.2,
				}}
				style={{
					left:
						mouseX - buttonwidth / 2 - button.current
							? button.current.offsetLeft
							: 0,
					top: mouseY,
					height: buttonwidth,
					width: buttonwidth,
				}}></motion.span>
		</motion.span>
	);
}
