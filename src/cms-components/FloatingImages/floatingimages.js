import SingleParallax from '@/components/single-parallax/single-parallax';
import { useDimensions } from '@/hooks/use-dimension';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useEffect, useRef } from 'react';

export default function FloatingImages({ children, direction = '' }) {
	const floatingImages = useRef(null);
	const baseImage = useRef(null);

	const containerDimension = useDimensions(floatingImages);
	const imageDimension = useDimensions(baseImage);

	const { scrollYProgress } = useScroll({
		target: floatingImages,
		offset: ['start end', 'end start'],
	});

	let y = [useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])];

	let t = [
		useTransform(scrollYProgress, [0, 1], ['-10%', '90%']),
		// useTransform(scrollYProgress, [0, 1], ['-25cqh', '75cqh']),
		useTransform(scrollYProgress, [0, 1], ['0%', '90%']),
		useTransform(scrollYProgress, [0, 1], ['20%', '100%']),
	];

	useEffect(() => {
		console.log(containerDimension.height);
		console.log(imageDimension.height);

		console.log(
			`${-imageDimension.height / 4}px`,
			`${containerDimension.height - imageDimension.height}px`
		);

		console.log(y[0]);
	}, [containerDimension, imageDimension, y[0]]);

	return (
		<div
			className={`${direction} section-content floating-elements`}
			ref={floatingImages}>
			<div className='container-fluid-width medium'>
				{children}

				<div className='img-container'>
					<motion.div
						className='floating-img'
						style={{ x: '-50%', y: y[0], top: t[0] }}
						ref={baseImage}>
						<SingleParallax scrollYProgress_start={scrollYProgress}>
							<img src='/images/Homepage-1/1.png'></img>
						</SingleParallax>
					</motion.div>
					<motion.div
						className='floating-img'
						style={{ x: '-50%', y: y[0], top: t[1] }}>
						<SingleParallax scrollYProgress_start={scrollYProgress}>
							<img src='/images/Homepage-1/1.png'></img>
						</SingleParallax>
					</motion.div>
					<motion.div
						className='floating-img'
						style={{ x: '-50%', y: y[0], top: t[2] }}>
						<SingleParallax scrollYProgress_start={scrollYProgress}>
							<img src='/images/Homepage-1/1.png'></img>
						</SingleParallax>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
