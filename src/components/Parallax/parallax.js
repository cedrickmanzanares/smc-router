'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { basePath } from '@/hooks/use-basepath';

export default function Parallax() {
	const ref = useRef(null);

	const text = ['Ready for', 'Tomorrow'];

	const imageSrc = [
		`${basePath}/images/Homepage-1/1.png`,
		`${basePath}/images/Homepage-1/2.png`,
		`${basePath}/images/Homepage-1/3.png`,
		`${basePath}/images/Homepage-1/4.png`,
	];

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	let textValue = useTransform(scrollYProgress, [0, 0.5], ['0%', '-75%']);
	let yValues = [
		useTransform(scrollYProgress, [0, 1], ['0vh', `${(0 * 15) / 2}%`]),
		useTransform(scrollYProgress, [0, 1], ['0vh', `${(1 * 15) / 2}%`]),
		useTransform(scrollYProgress, [0, 1], ['0vh', `${(2 * 15) / 2}%`]),
		useTransform(scrollYProgress, [0, 1], ['0vh', `${(3 * 15) / 2}%`]),
		useTransform(scrollYProgress, [0, 1], ['0vh', `${(4 * 15) / 2}%`]),
		useTransform(scrollYProgress, [0, 1], ['0vh', `${(5 * 15) / 2}%`]),
	].reverse();

	let scaleValues = [
		useTransform(scrollYProgress, [0, 1], ['100%', `${100 + (0 / 2) * 35}%`]),
		useTransform(scrollYProgress, [0, 1], ['100%', `${100 + (1 / 2) * 35}%`]),
		useTransform(scrollYProgress, [0, 1], ['100%', `${100 + (2 / 2) * 35}%`]),
		useTransform(scrollYProgress, [0, 1], ['100%', `${100 + (3 / 2) * 35}%`]),
		useTransform(scrollYProgress, [0, 1], ['100%', `${100 + (4 / 2) * 35}%`]),
		useTransform(scrollYProgress, [0, 1], ['100%', `${100 + (5 / 2) * 35}%`]),
	];

	return (
		<motion.section
			className='parallax-container'
			ref={ref}
			initial='initial'
			animate='enter'
			exit='exit'
			variants={{
				enter: {
					transition: {
						staggerChildren: 1,
						// delayChildren: 0.5,
					},
				},
			}}>
			<motion.div className='parallax'>
				{imageSrc.map((val, index) => {
					return (
						<motion.div
							variants={{
								initial: {
									y: '15vh',
									opacity: 0,
								},
								enter: {
									y: '0vh',
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
								x: '-50%',
								y: yValues[index],
								scale: scaleValues[index],
								transformOrigin: 'center',
							}}>
							<Image img src={val} fill={true} />
						</motion.div>
					);
				})}

				<motion.h1
					className='heading-1'
					initial={{
						x: '-50%',
					}}
					style={{
						opacity: 0,
						zIndex: Math.floor(imageSrc.length / 2),
						y: textValue,
					}}
					variants={{
						initial: {
							y: '15vh',
							opacity: 0,
						},
						enter: {
							y: '0vh',
							opacity: 1,
							transition: {
								duration: 0.35,
								delay: 0.5,
								ease: [0.76, 0, 0.24, 1],
							},
						},
						exit: {
							y: '-15vh',
							opacity: 0,
							transition: {
								duration: 0.75,
								delay: 0,
								ease: [0.76, 0, 0.24, 1],
							},
						},
					}}>
					{text.map((val, index) => (
						<span key={`text_${index}`}>{val}</span>
					))}
				</motion.h1>
			</motion.div>
		</motion.section>
	);
}
