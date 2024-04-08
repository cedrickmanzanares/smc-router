'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useRef } from 'react';

import { basePath } from '@/hooks/use-basepath';

import { easeInOut } from 'framer-motion';

export default function Pillar({ content, position, children, simple }) {
	const easing = easeInOut;
	const careers = useRef(null);
	const { scrollYProgress } = useScroll({
		target: careers,
		offset: ['start start', 'end start'],
	});

	const introOutStart = 0.1;
	const introOutEnd = introOutStart + 0.01;

	const mainInStart = introOutStart + 0.02;
	const mainInEnd = introOutStart + 0.15;

	const delay = 0.025;
	const blurOpacity = useTransform(
		scrollYProgress,
		[mainInStart, mainInEnd],
		[0, 1]
	);

	const sticky = [
		useTransform(
			scrollYProgress,
			[0, mainInStart],
			[
				'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%',
				'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%',
			],
			{
				ease: easing,
			}
		),
	];
	const y = [
		useTransform(
			scrollYProgress,
			[0, mainInEnd, 1],
			['-50px', '-50px', '50px'],
			{
				ease: easing,
			}
		),
		useTransform(scrollYProgress, [0, mainInEnd, 1], ['0px', '0px', '100px'], {
			ease: easing,
		}),
		useTransform(scrollYProgress, [0, mainInEnd, 1], ['0px', '150px', '0px'], {
			ease: easing,
		}),
	];

	const x = [
		useTransform(scrollYProgress, [0, 1], ['0px', '5px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '10px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '20px']),
	];

	const z = [
		useTransform(scrollYProgress, [0, mainInStart, 1], ['10px', '0px', '0px'], {
			ease: easing,
		}),
		useTransform(scrollYProgress, [0, mainInStart, 1], ['5px', '0px', '10px'], {
			ease: easing,
		}),
		useTransform(scrollYProgress, [0, mainInStart, 1], ['0px', '0px', '20px'], {
			ease: easing,
		}),
		useTransform(scrollYProgress, [0, mainInStart, 1], ['0px', '0px', '30px'], {
			ease: easing,
		}),
		useTransform(scrollYProgress, [0, mainInStart, 1], ['0px', '0px', '40px'], {
			ease: easing,
		}),
	];

	const text1 = [
		// opacity 0
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay, mainInEnd + delay, 1],
			[0, 0, 1, 1],
			{ ease: easing }
		),

		// y
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay, mainInEnd + delay, 1],
			['100px', '100px', '0px', '0px'],
			{ ease: easing }
		),
	];

	const text2 = [
		// opacity 0
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 2, mainInEnd + delay * 2, 1],
			[0, 0, 1, 1],
			{ ease: easing }
		),

		// y
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 2, mainInEnd + delay * 2, 1],
			['100px', '100px', '0px', '0px'],
			{ ease: easing }
		),
	];

	const text3 = [
		// opacity 0
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 3, mainInEnd + delay * 3, 1],
			[0, 0, 1, 1],
			{ ease: easing }
		),

		// y
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 3, mainInEnd + delay * 3, 1],
			['100px', '100px', '0px', '0px'],
			{ ease: easing }
		),
	];

	const path_con = [
		useTransform(
			scrollYProgress,
			[0, mainInStart - delay, mainInEnd - delay, 1],
			['0vh', '50vh', '50vh', '50vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart - delay, mainInEnd - delay, 1],
			['0vh', '50vh', '50vh', '50vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart - delay, mainInEnd - delay, 1],
			[1, 0, 0, 0],
			{ ease: easing }
		),
	];

	const line = [
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 4, mainInEnd + delay * 4, 1],
			['0vh', '0vh', '60vh', '2vh'],
			{ ease: easing }
		),

		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 4, mainInEnd + 0.3, 1],
			['0vh', '0vh', '0', '60vh'],
			{ ease: easing }
		),
	];

	const paths_x = [
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 6, mainInEnd + delay * 6, 1],
			['-105vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),

		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 4, mainInEnd + delay * 4, 1],
			['-85vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 8, mainInEnd + delay * 8, 1],
			['-65vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
	];

	const paths_x_left = [
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 6, mainInEnd + delay * 6, 1],
			['105vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),

		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 4, mainInEnd + delay * 4, 1],
			['85vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 8, mainInEnd + delay * 8, 1],
			['65vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
	];

	const paths_y = [
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 6, mainInEnd + delay * 6, 1],
			['105vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 4, mainInEnd + delay * 4, 1],
			['85vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 8, mainInEnd + delay * 8, 1],
			['65vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
	];

	const paths_y_left = [
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 6, mainInEnd + delay * 6, 1],
			['105vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 4, mainInEnd + delay * 4, 1],
			['85vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
		useTransform(
			scrollYProgress,
			[0, mainInStart + delay * 8, mainInEnd + delay * 8, 1],
			['65vh', '0vh', '0vh', '0vh'],
			{ ease: easing }
		),
	];

	return (
		<div className={`${position} pillar-section section-content`} ref={careers}>
			<motion.div className='pillar-sticky' style={{}}>
				<motion.div
					className='pillar-clip'
					style={{
						clipPath: !simple
							? sticky[0]
							: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					}}>
					<motion.div
						className='pillar-bg pillar-img'
						style={{
							x: x[0],
							y: y[0],
							z: z[0],
							backgroundImage: `url(${content.bg})`,
						}}>
						<motion.div
							style={{
								x: position === 'left' ? paths_x_left[0] : paths_x[0],
								y: position === 'left' ? paths_y_left[0] : paths_y[0],
							}}
							className='path-con'>
							<div className='path path-1'></div>
						</motion.div>
						<motion.div
							style={{
								x: position === 'left' ? paths_x_left[0] : paths_x[1],
								y: position === 'left' ? paths_y_left[0] : paths_y[1],
							}}
							className='path-con'>
							<div className='path path-2'></div>
						</motion.div>
						<motion.div
							style={{
								x: position === 'left' ? paths_x_left[0] : paths_x[2],
								y: position === 'left' ? paths_y_left[0] : paths_y[2],
							}}
							className='path-con'>
							<div className='path path-3'></div>
						</motion.div>

						<motion.div
							className='path-con over'
							style={{ opacity: path_con[2] }}>
							<div className='path path-1'></div>
						</motion.div>

						<motion.div
							className='path-con over'
							style={{ opacity: path_con[2] }}>
							<div className='path path-2'></div>
						</motion.div>
						{/* 
						<motion.div
							className='path-con over'
							style={{ opacity: path_con[2] }}>
							<div className='path path-3'></div>
						</motion.div> */}

						<motion.div
							className='pillar-bg pillar-blur pillar-img'
							style={{
								opacity: blurOpacity,
								x: x[0],
								y: y[0],
								z: z[0],
								backgroundImage: `url(${content.bg})`,
							}}></motion.div>
					</motion.div>
				</motion.div>

				<motion.div
					className='pillar-focus pillar-img'
					style={{
						x: x[1],
						y: y[1],
						z: z[1],
						backgroundImage: `url(${content.focus})`,
					}}></motion.div>
				<motion.div className='pillar-desc'>
					<motion.p
						style={{ opacity: text1[0], y: text1[1] }}
						className='uppercase'
						data-text={content.text1}>
						{content.text1}
					</motion.p>
					<motion.h2
						style={{ opacity: text2[0], y: text2[1] }}
						className='heading-2'
						data-text={content.text2}>
						{content.text2}
					</motion.h2>
					<motion.p
						className='pillar-text'
						style={{ opacity: text3[0], y: text3[1] }}
						data-text={content.text3}
						dangerouslySetInnerHTML={{ __html: content.text3 }}></motion.p>
					<div className='line-con' style={{}}>
						<motion.div
							className='line'
							style={{
								height: line[0],
								y: line[1],
							}}></motion.div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
