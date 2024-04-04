'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useContext, useEffect, useRef, useState } from 'react';

import { basePath } from '@/hooks/use-basepath';
import { ThemeContext } from '@/pages/_app';

export default function PageBanner({
	title,
	subtitle,
	subtitleClasses,
	image,
	containerSize = 'medium',

	noBg = false,

	direction = 'left',
	size = 'half',
	headingSize = 'heading-1',
}) {
	const smcTheme = useContext(ThemeContext);

	const headingColor = noBg ? '' : 'white';
	const bannerClasses = `page-banner ${size} ${direction} ${
		!image ? 'no-image' : ''
	} ${headingColor} ${noBg ? 'no-bg' : ''}`;
	const bannerContainerClasses = `container-fluid-width ${containerSize}`;
	const bannerHeadingClasses = `banner-title ${headingSize} `;

	const bannerSubtitleClasses = `banner-subtitle heading-5 ${subtitleClasses}`;
	const [rotate, setRotate] = useState(-30);
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

	useEffect(() => {
		if (smcTheme === 'smc-blue' && size === 'full') {
			setRotate(45);
		}
	}, [smcTheme]);

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
						y: '-70%',
						x: '-40%',
						rotate: rotate,
						z: z[0],
					}}></motion.div>
				<motion.div
					className='path path-2'
					style={{
						y: '-70%',
						x: '-15%',
						rotate: rotate,
						z: z[1],
					}}></motion.div>
				<motion.div
					className='path path-3'
					style={{ y: '2%', x: '-48%', rotate: rotate, z: z[2] }}></motion.div>

				<motion.div
					className='path path-4'
					style={{ x: '35%', rotate: rotate, z: z[3] }}></motion.div>
				<motion.div
					className='path path-5'
					style={{ x: '55%', rotate: rotate, z: z[4] }}></motion.div>
				<div className='banner-shade'></div>
			</div>
			<div className={bannerContainerClasses}>
				<div className='banner-info'>
					<h1 className={bannerHeadingClasses}>{title}</h1>
					{subtitle && <p className={bannerSubtitleClasses}>{subtitle}</p>}
				</div>
			</div>
		</div>
	);
}
