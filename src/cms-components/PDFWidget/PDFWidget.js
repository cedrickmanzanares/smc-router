'use client';

import { animate, motion } from 'framer-motion';

import { useEffect } from 'react';

import Link from 'next/link';

import { useMouse } from '@uidotdev/usehooks';
import { useDimensions } from '@/hooks/use-dimension';
import { BsArrowDownCircle, BsArrowUpRightCircle } from 'react-icons/bs';
import Button from '@/components/button/button';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { getColors } from '@/hooks/use-color';

export default function PDFWidget({ title, subtitle, link }) {
	const { red, baseBlack, blue } = getColors;

	const widgetVariants = {
		rest: {
			scale: 1,
			color: baseBlack,
			// background: '#ffffff00',
		},
		hover: {
			scale: 1.1,
			color: '#ffffff',
			// background: red,
		},
		tap: {
			scale: 0.9,
			color: '#ffffff',
		},
	};

	const buttonVariant = {
		rest: {
			color: blue,
			borderColor: blue,
		},
		hover: {
			color: '#ffffff',
			borderColor: '#ffffff',
		},
	};

	const widgetBg_variants = {
		rest: {
			top: '100%',
			borderRadius: '90%',
			transition: {
				duration: 0.35,
			},
		},
		hover: {
			top: '-75%',
			borderRadius: '90%',
			transition: {
				duration: 0.35,
			},
		},
	};

	return (
		<motion.div
			className='pdf-widget'
			initial='rest'
			whileHover='hover'
			whileTap='tap'
			variants={widgetVariants}
			onHoverEnd={(event, info) => {
				animate(event.target.querySelector('.pdf-widget-bg'), {
					top: '-200%',
					transition: {
						duration: 0.4,
					},
					transitionEnd: {
						top: '100%',
						borderRadius: '0%',
					},
				});
				console.log(event, info);
			}}>
			<Link href={link} className='link-cover'></Link>
			<h3 className='heading-4 pdf-widget-title'>
				{title}
				<br />
				<span>{subtitle}</span>
			</h3>
			<motion.div className='pdf-widget-link' variants={buttonVariant}>
				<PiArrowUpRightBold size={`1.5rem`} />
			</motion.div>

			<motion.div
				className='pdf-widget-bg'
				style={{
					x: '-50%',
				}}
				variants={widgetBg_variants}></motion.div>
		</motion.div>
	);
}
