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

	let yValues = imageSrc
		.map((val, index) => {
			return useTransform(
				springScroll,
				[0, 1],
				['0%', `${(index * 25) / 2}%`],
				'anticipate'
			);
		})
		.reverse();

	let scaleValues = imageSrc.map((val, index) => {
		return useTransform(
			springScroll,
			[0, 1],
			['100%', `${100 + (index / 2) * 50}%`],
			'anticipate'
		);
	});

	let blurValues = imageSrc
		.map((val, index) => {
			return useTransform(
				springScroll,
				[0, 1],
				['0', `${(index / 2) * 100}`],
				'anticipate'
			);
		})
		.reverse();

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
								filter: `blur(${blurValues[index]})`,
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
