'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useContext, useEffect, useRef, useState } from 'react';

import { basePath } from '@/hooks/use-basepath';
import { ThemeContext } from '@/pages/_app';
import { enterDuration } from '@/components/Layout/Curve/anim';

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
	const { red, redShade1, yellow, yellowShade1, blue, blueShade1, blueShade2 } =
		getColors;
	const headingColor = noBg ? '' : 'white';
	const bannerClasses = `page-banner ${size} ${direction} ${
		!image ? 'no-image' : ''
	} ${headingColor} ${noBg ? 'no-bg' : ''} ${smcTheme}`;
	const bannerContainerClasses = `container-fluid-width ${containerSize}`;
	const bannerHeadingClasses = `banner-title ${headingSize} `;

	const bannerSubtitleClasses = `banner-subtitle heading-5 ${
		subtitleClasses ? subtitleClasses : ''
	}`;
	const [rotate, setRotate] = useState(-30);
	const banner = useRef(null);
	const { scrollYProgress } = useScroll({
		target: banner,
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

	const banner_anim = {
		initial: {
			y: 100,
			opacity: 0,
		},
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 0.85,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			transition: {
				duration: 0.5,
				delay: 0.1,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	};

	const path_anim = {
		initial: {},
		enter: {},
		exit: {},
	};

	const bg_anim = {
		initial: {
			scale: 1.2,
		},
		enter: {
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 0.8,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			scale: 1,
		},
	};

	const text_anim = {
		initial: {
			x: 100,
			opacity: 0,
		},
		enter: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 1,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		exit: {
			x: -100,
			opacity: 0,
			transition: {
				duration: 0.5,
				delay: 0.1,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	};

	const path_transitions = {
		delay: enterDuration - 0.5,
	};

	const path_settings = [
		{
			'smc-default': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red} 25%)`,
				transition: path_transitions,
			},
			'smc-red': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red} 25%)`,
				transition: path_transitions,
			},
			'smc-blue': {
				backgroundImage: `linear-gradient(90deg, ${blueShade2}, ${blueShade2})`,
				transition: path_transitions,
			},
			'smc-yellow': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${blue})`,
				transition: path_transitions,
			},
		},
		{
			'smc-default': {
				backgroundImage: `linear-gradient(90deg, ${yellow} 25%, ${red})`,
				transition: path_transitions,
			},
			'smc-red': {
				backgroundImage: `linear-gradient(90deg, ${yellow} 25%, ${red})`,
				transition: path_transitions,
			},
			'smc-blue': {
				backgroundImage: `linear-gradient(90deg, ${yellow}00, ${yellow})`,
				transition: path_transitions,
			},
			'smc-yellow': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${blue})`,
				transition: path_transitions,
			},
		},
		{
			'smc-default': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red})`,
				transition: path_transitions,
			},
			'smc-red': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red})`,
				transition: path_transitions,
			},
			'smc-blue': {
				backgroundImage: `linear-gradient(90deg, ${yellow}00, ${yellow})`,
				transition: path_transitions,
			},
			'smc-yellow': {
				backgroundImage: `linear-gradient(90deg, ${blue}, ${yellow})`,
				transition: path_transitions,
			},
		},
		{
			'smc-default': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red} 25%)`,
				transition: path_transitions,
			},
			'smc-red': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red} 25%)`,
				transition: path_transitions,
			},
			'smc-blue': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${blueShade1})`,
				transition: path_transitions,
			},
			'smc-yellow': {
				backgroundImage: `linear-gradient(90deg, ${blue}, ${yellow})`,
				transition: path_transitions,
			},
		},
		{
			'smc-default': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red})`,
				transition: path_transitions,
			},
			'smc-red': {
				backgroundImage: `linear-gradient(90deg, ${yellow}, ${red})`,
				transition: path_transitions,
			},
			'smc-blue': {
				backgroundImage: `linear-gradient(90deg, ${blueShade1}, ${blueShade1})`,
				transition: path_transitions,
			},
			'smc-yellow': {
				backgroundImage: `linear-gradient(90deg, ${blue}, ${yellow})`,
				transition: path_transitions,
			},
		},
	];

	return (
		<motion.div
			className={bannerClasses}
			{...useAnim(banner_anim)}
			ref={banner}>
			<div className='banner-bg'>
				<motion.div
					className='banner-img'
					style={{ backgroundImage: `url(${image})`, y: y[0] }}
					variants={bg_anim}></motion.div>

				<motion.div
					animate={smcTheme}
					variants={path_settings[0]}
					className='path path-1'
					style={{
						y: '-70%',
						x: '-40%',
						rotate: rotate,
						z: z[0],
					}}></motion.div>

				<motion.div
					animate={smcTheme}
					variants={path_settings[1]}
					className='path path-2'
					style={{
						y: '-70%',
						x: '-15%',
						rotate: rotate,
						z: z[1],
					}}></motion.div>

				<motion.div
					animate={smcTheme}
					variants={path_settings[2]}
					className='path path-3'
					style={{ y: '2%', x: '-48%', rotate: rotate, z: z[2] }}></motion.div>

				<motion.div
					animate={smcTheme}
					variants={path_settings[3]}
					className='path path-4'
					style={{ x: '35%', rotate: rotate, z: z[3] }}></motion.div>

				<motion.div
					className='path path-5'
					style={{ x: '55%', rotate: rotate, z: z[4] }}></motion.div>
				<div className='banner-shade'></div>
			</div>
			<motion.div className={bannerContainerClasses}>
				<motion.div
					className='banner-info'
					variants={{
						initial: {
							opacity: 1,
						},
						enter: {
							opacity: 1,
							transition: {
								staggerChildren: 0.05,
							},
						},
						exit: {
							opacity: 1,
						},
					}}>
					<motion.h1 className={bannerHeadingClasses} variants={text_anim}>
						{title}
					</motion.h1>
					{subtitle && (
						<motion.p className={bannerSubtitleClasses} variants={text_anim}>
							{subtitle}
						</motion.p>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
