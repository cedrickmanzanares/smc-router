import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StackedImages({ elem, images }) {
	const stackedImages = useRef();
	const { scrollYProgress } = useScroll({
		target: stackedImages,
		offset: ['start end', 'end start'],
	});

	const y = [
		useTransform(scrollYProgress, [0, 1], ['-8rem', `8%`]),
		useTransform(scrollYProgress, [0, 1], ['-4%', `4%`]),
		useTransform(scrollYProgress, [0, 1], ['-2%', `2%`]),
		useTransform(scrollYProgress, [0, 1], ['-58%', `-42%`]),
	];

	return (
		<motion.div className='image-content stacked' ref={stackedImages}>
			<motion.div className='img-container'>
				<motion.img
					src={images[0]}
					style={{
						display: images[0] === '' ? 'none' : 'block',
						y: y[0],
					}}
				/>
			</motion.div>
			<motion.div className='img-container'>
				<motion.img
					src={images[1]}
					style={{
						display: images[1] === '' ? 'none' : 'block',
						y: y[1],
					}}
				/>
			</motion.div>
			<motion.div
				className='img-container'
				style={{
					x: '-50%',
					y: y[3],
				}}>
				<div className='clip'>
					<motion.img
						src={images[2]}
						style={{
							display: images[2] === '' ? 'none' : 'block',
							y: y[2],
						}}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
