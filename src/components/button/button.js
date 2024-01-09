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
	const { blue } = getColors;
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

	const textVariants = {
		initial: {
			color: className.includes('pri') ? blue : '#ffffff',
		},
		enter: {
			color: className.includes('pri') ? '#ffffff' : blue,
		},
	};

	return (
		<motion.span
			ref={button}
			initial='initial'
			whileHover='enter'
			// whileTap='enter'
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
			<Link className='link-cover' href={link}></Link>
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
