'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { animate } from 'framer-motion/dom';

import useMousePosition from '@/hooks/use-mousepoition';
import { useDimensions } from '@/hooks/use-dimension';
import { useEffect, useRef } from 'react';
import { useMeasure, useWindowSize } from '@uidotdev/usehooks';
import useAnim from '@/hooks/use-anim';
import { curve } from '../Layout/Curve/anim';
import { getColors } from '@/hooks/use-color';

export default function Button({ className, link, children }) {
	const [button, { width, height }] = useMeasure();
	const { blue, red } = getColors;
	const buttonVariants = {
		initial: {
			scale: 1,
		},
		enter: {
			scale: 1.05,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
		tap: {
			scale: 0.98,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
	};

	const getColor = (className) => {
		if (className.includes('pri')) return blue;
		if (className.includes('white')) return '#ffffff';
	};

	const getHoverColor = (className) => {
		if (className.includes('pri')) return '#ffffff';
		if (className.includes('white')) return blue;
	};

	const textVariants = {
		initial: {
			color: getColor(className),
		},
		enter: {
			color: getHoverColor(className),
		},
	};

	return (
		<motion.span
			ref={button}
			whileTap='tap'
			initial='initial'
			whileHover='enter'
			onHoverEnd={(event, info) => {
				animate(event.target.querySelector('.btn-bg'), {
					top: '-200%',
					transition: {
						duration: 0.4,
					},
					transitionEnd: {
						top: '100%',
					},
				});
				console.log(event, info);
			}}
			variants={buttonVariants}
			className={`btn size-limit${className ? ` ${className}` : ''}`}>
			{link && <Link className='link-cover' href={link}></Link>}
			<motion.span variants={textVariants} className='btn-label'>
				{children}
			</motion.span>
			<motion.span
				className='btn-bg'
				variants={{
					initial: {
						top: '100%',
						transition: {
							duration: 0.4,
						},
					},
					enter: {
						top: '-50%',
						transition: {
							duration: 0.4,
						},
					},
				}}></motion.span>
		</motion.span>
	);
}
