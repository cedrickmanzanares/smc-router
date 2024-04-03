'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { basePath } from '@/hooks/use-basepath';

export default function MainBanner() {
	const ref = useRef(null);

	const text = ['Your World', 'Made Better'];

	const imageSrc = [
		`${basePath}/images/Homepage-1/NewBanner/1.png`,
		`${basePath}/images/Homepage-1/NewBanner/2.png`,
		`${basePath}/images/Homepage-1/NewBanner/3.png`,
		`${basePath}/images/Homepage-1/NewBanner/4.png`,
		`${basePath}/images/Homepage-1/NewBanner/5.png`,
	];

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	let textValue = useTransform(scrollYProgress, [0, 0.5], ['0%', '-75%']);
	let yValues = [
		useTransform(scrollYProgress, [0, 1], ['0px', '-10px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '0px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '10px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '20px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '30px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '40px']),
	];

	let xValues = [
		useTransform(scrollYProgress, [0, 1], ['0px', '0']),
		useTransform(scrollYProgress, [0, 1], ['0px', '0px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '10px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '20px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '30px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '40px']),
	];

	let zValues = [
		useTransform(scrollYProgress, [0, 1], ['0px', '-5px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '0px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '5px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '12px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '18px']),
		useTransform(scrollYProgress, [0, 1], ['0px', '25px']),
	];

	return (
		// <motion.section
		// 	className='main-banner'
		// 	ref={ref}
		// 	initial='initial'
		// 	animate='enter'
		// 	exit='exit'
		// 	variants={{
		// 		enter: {
		// 			transition: {
		// 				staggerChildren: 0.2,
		// 			},
		// 		},
		// 	}}>
		<motion.section className='main-banner' ref={ref}>
			<motion.div className='banner-parallax'>
				{imageSrc.map((val, index) => {
					return (
						<motion.div
							variants={{
								initial: {
									y: '15vh',
									scale: 1.2,
									opacity: 0,
								},
								enter: {
									y: '0vh',
									scale: 1,
									opacity: 1,
									transition: {
										duration: 0.75,
										delay: 0.5 + index * 0.05,
										ease: [0.76, 0, 0.24, 1],
									},
								},
								exit: {
									y: '-15vh',
									opacity: 0,
									transition: {
										duration: 0.5,
										delay: index * 0.05,
										ease: [0.76, 0, 0.24, 1],
									},
								},
							}}
							key={`parallax_img${index}`}
							style={{
								zIndex: index,
								x: xValues[index],
								y: yValues[index],
								z: zValues[index],
								backgroundImage: `url(${val})`,
							}}></motion.div>
					);
				})}
				<motion.h1
					className='heading-1'
					style={{
						x: '-50%',
						opacity: 1,
						y: textValue,
					}}
					// variants={{
					// 	initial: {
					// 		y: '15vh',
					// 		opacity: 0,
					// 	},
					// 	enter: {
					// 		y: '0vh',
					// 		opacity: 1,
					// 		transition: {
					// 			duration: 0.35,
					// 			delay: 0.5,
					// 			ease: [0.76, 0, 0.24, 1],
					// 		},
					// 	},
					// 	exit: {
					// 		y: '-15vh',
					// 		opacity: 0,
					// 		transition: {
					// 			duration: 0.75,
					// 			delay: 0,
					// 			ease: [0.76, 0, 0.24, 1],
					// 		},
					// 	},
					// }}
				>
					{text.map((val, index) => {
						return <motion.span key={`text_${index}`}>{val}</motion.span>;
					})}

					{/* {text.map((val, index_p) => (
						<motion.span
							className='word'
							key={`text_${index_p}`}
							variants={{
								enter: {
									transition: {
										staggerChildren: 0.1,
									},
								},
							}}>
							{val.split('').map((char, index) => {
								return (
									<motion.span
										className='char-con'
										style={{ display: /\s/.test(char) && 'inline' }}
										variants={{
											initial: {
												y: 200,
												width: 0,
												opacity: 0,
											},
											enter: {
												y: 0,
												opacity: 1,
												width: 'auto',
												transition: {
													delay: !(index == 0)
														? 1 + index_p * 0.05
														: 1 + index_p * 0.05,
													type: 'spring',
													duration: 0.75,
													bounce: '0.1',
												},
											},
											exit: {
												width: 0,
											},
										}}>
										<span className='char'>{char}</span>
									</motion.span>
								);
							})}
						</motion.span>
					))} */}
				</motion.h1>
			</motion.div>
		</motion.section>
	);
}
