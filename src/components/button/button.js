'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { animate } from 'framer-motion/dom';

import { useContext } from 'react';
import { useMeasure } from '@uidotdev/usehooks';

import { getColors } from '@/hooks/use-color';
import { ThemeContext } from '@/pages/_app';
import { useGetButtonColor, useGetToggleFill } from '@/data/data';

export default function Button({ className, link, children }) {
	const smcTheme = useContext(ThemeContext);

	const [button, { width, height }] = useMeasure();
	const { blue, red, baseBlack } = getColors;
	const { buttonColor } = useGetButtonColor();

	const buttonVariants = {
		buttonInitial: {
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
		buttonEnter: {
			scale: 1.05,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
		buttonTap: {
			scale: 0.98,
			transition: {
				type: 'spring',
				stiffness: 350,
			},
		},
	};

	const getColor = (className) => {
		if (className.includes('white')) return '#ffffff';
		if (smcTheme === 'smc-red') return red;
		if (smcTheme === 'smc-blue') return blue;
		return baseBlack;
		// if (className.includes('pri')) return blue;
		// if (className.includes('white')) return blue;
	};

	const getHoverColor = (className) => {
		if (className.includes('btn-bordered')) {
			if (className.includes('white')) {
				if (smcTheme === 'smc-red') return red;
				if (smcTheme === 'smc-blue') return blue;

				return baseBlack;
			}
		}
		if (className.includes('pri')) return '#ffffff';
		if (className.includes('white')) return '#ffffff';
	};

	const textVariants = {
		buttonInitial: {
			// color: buttonColor,
		},
		buttonEnter: {
			color: getHoverColor(className),
		},
	};

	return (
		<motion.span
			ref={button}
			whileTap='buttonTap'
			initial='buttonInitial'
			whileHover='buttonEnter'
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
					buttonInitial: {
						top: '100%',
						transition: {
							duration: 0.4,
						},
					},
					buttonEnter: {
						top: '-50%',
						transition: {
							duration: 0.4,
						},
					},
				}}></motion.span>
		</motion.span>
	);
}
