import SingleParallax from '@/cms-components/SingleParallax/single-parallax';
import { useDimensions } from '@/hooks/use-dimension';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useEffect, useRef } from 'react';

export default function FloatingImages({
	children,
	images,
	direction = '',
	rounded = false,
}) {
	const floatingImages = useRef(null);
	const baseImage = useRef(null);

	const containerDimension = useDimensions(floatingImages);
	const imageDimension = useDimensions(baseImage);

	const { scrollYProgress } = useScroll({
		target: floatingImages,
		offset: ['start end', 'end start'],
	});

	let y = [
		useTransform(scrollYProgress, [0, 1], ['0%', '-100%']),
		useTransform(scrollYProgress, [0, 1], ['-100%', '0%']),
	];

	let t = [
		useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
		// useTransform(scrollYProgress, [0, 1], ['-25cqh', '75cqh']),
		useTransform(scrollYProgress, [0, 1], ['100%', '20%']),
		useTransform(scrollYProgress, [0, 1], ['120%', '-20%']),
	];

	return (
		<div
			className={`${direction} section-content floating-elements`}
			ref={floatingImages}>
			<div className='container-fluid-width medium'>
				{children}

				<div className={`${rounded && 'rounded'} img-container`}>
					{images.map((images, index) => {
						let yNew = index === 0 ? y[0] : y[1];
						return (
							<motion.div
								key={`floating-elements_img` + index}
								className='floating-img'
								style={{ x: '-50%', y: yNew, top: t[index] }}
								ref={baseImage}>
								<SingleParallax scrollYProgress_start={scrollYProgress}>
									<img src={images}></img>
								</SingleParallax>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
