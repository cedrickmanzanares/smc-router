'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useRef } from 'react';

import { basePath } from '@/hooks/use-basepath';

export default function PageBanner({
	title,
	subtitle,
	image,
	containerSize = 'medium',

	noBg = false,

	direction = 'left',
	size = 'half',
	headingSize = 'heading-3',
}) {
	const headingColor = noBg ? '' : 'white';
	const bannerClasses = `page-banner ${size} ${direction} ${
		!image ? 'no-image' : ''
	} ${headingColor} ${noBg ? 'no-bg' : ''}`;
	const bannerContainerClasses = `container-fluid-width ${containerSize}`;
	const bannerHeadingClasses = `banner-title ${headingSize} `;

	const careers = useRef(null);
	const { scrollYProgress } = useScroll({
		target: careers,
		offset: ['start start', 'end start'],
	});

	const y = [
		useTransform(scrollYProgress, [0, 1], ['-5%', '5%']),
		useTransform(scrollYProgress, [0, 1], ['0vh', '15vh']),
		useTransform(scrollYProgress, [0, 1], ['0vh', '20vh']),
		useTransform(scrollYProgress, [0, 1], ['0vh', '40vh']),
	];

	const z = [
		useTransform(scrollYProgress, [0, 1], ['0px', '15px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '10px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '5px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '10px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '15px']),
	];

	const path_settings = {};
	return (
		<div className={bannerClasses} ref={careers}>
			<div className='banner-bg'>
				<motion.div
					className='banner-img'
					style={{ backgroundImage: `url(${image})`, y: y[0] }}></motion.div>
				<motion.div
					className='path path-1'
					style={{
						y: '-150%',
						x: '-47%',
						rotate: -30,
						z: z[0],
					}}></motion.div>
				<motion.div
					className='path path-2'
					style={{ y: '-10%', x: '-61%', rotate: -30, z: z[1] }}></motion.div>
				<motion.div
					className='path path-3'
					style={{ y: '35%', x: '-72%', rotate: -30, z: z[2] }}></motion.div>

				<motion.div
					className='path path-4'
					style={{ x: '35%', rotate: -30, z: z[3] }}></motion.div>
				<motion.div
					className='path path-5'
					style={{ x: '55%', rotate: -30, z: z[4] }}></motion.div>
				<div className='banner-shade'></div>
			</div>
			<div className={bannerContainerClasses}>
				<h1 className={bannerHeadingClasses}>{title}</h1>
				{subtitle && <p className='banner-subtitle'>{subtitle}</p>}
			</div>
		</div>
	);
}
