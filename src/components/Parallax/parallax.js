'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Parallax() {
	const text = ['Ready for', 'Tomorrow'];

	const imageSrc = [
		'/images/Homepage-1/1.png',
		'/images/Homepage-1/2.png',
		'/images/Homepage-1/3.png',
		'/images/Homepage-1/4.png',
		// '/images/Homepage-1/5.png',
	];
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const springScroll = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	let textValue = useTransform(
		springScroll,
		[0, 0.5],
		['0%', '-75%'],
		'anticipate'
	);
	let yValues = [
		useTransform(
			springScroll,
			[0, 1],
			['0%', `${(0 * 25) / 2}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['0%', `${(1 * 25) / 2}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['0%', `${(2 * 25) / 2}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['0%', `${(3 * 25) / 2}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['0%', `${(4 * 25) / 2}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['0%', `${(5 * 25) / 2}%`],
			'anticipate'
		),
	].reverse();
	// let yValues = imageSrc
	// 	.map((val, index) => {
	// 		return useTransform(
	// 			springScroll,
	// 			[0, 1],
	// 			['0%', `${(index * 25) / 2}%`],
	// 			'anticipate'
	// 		);
	// 	})
	// 	.reverse();

	let scaleValues = [
		useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (0 / 2) * 50}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (1 / 2) * 50}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (2 / 2) * 50}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (3 / 2) * 50}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (4 / 2) * 50}%`],
			'anticipate'
		),
		useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (5 / 2) * 50}%`],
			'anticipate'
		),
	];
	// let scaleValues = imageSrc.map((val, index) => {
	// 	return useTransform(
	// 		springScroll,
	// 		[0, 1],
	// 		['100%', `${100 + (index / 2) * 50}%`],
	// 		'anticipate'
	// 	);
	// });

	return (
		<section className='parallax-container'>
			<motion.div className='parallax' ref={ref}>
				{imageSrc.map((val, index) => {
					return (
						<motion.img
							key={`parallax_img${index}`}
							transition={{
								ease: 'ease-out',
							}}
							style={{
								zIndex: index,
								x: '-50%',
								y: yValues[index],
								scale: scaleValues[index],
								transformOrigin: 'center',
							}}
							src={val}></motion.img>
					);
				})}

				<motion.h1
					className='heading-1'
					initial={{
						x: '-50%',
					}}
					style={{
						zIndex: Math.floor(imageSrc.length / 2),
						y: textValue,
					}}>
					{text.map((val, index) => (
						<span key={`text_${index}`}>{val}</span>
					))}
				</motion.h1>
			</motion.div>
		</section>
	);
}
