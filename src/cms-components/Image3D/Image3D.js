import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';
import { useDimensions } from '@/hooks/use-dimension';
import useMousepoition from '@/hooks/use-mousepoition';

export default function Image3D({ scrollYProgress_start, images }) {
	const imgBg = useRef(null);

	const { x: mouseX, y: mouseY } = useMousepoition();

	const { width, height } = useDimensions(imgBg);

	const springValue = useSpring(scrollYProgress_start, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const multiplier = 20;

	let yBg_scale = useTransform(springValue, [0, 0.45], [1.25, 1], 'anticipate');

	let yCon = useTransform(springValue, [0, 1], [`-5%`, `15%`], 'anticipate');

	let yValues = images
		.map((src, index) => {
			return useTransform(
				springValue,
				[0, 1],
				[
					`${0 - ((index + 1) * multiplier) / 4}%`,
					`${0 + ((index + 1) * multiplier) / 2}%`,
				],
				'anticipate'
			);
		})
		.filter((n) => n)
		.reverse();

	return (
		<div className='image3d'>
			<motion.div
				className='image3d-bg'
				initial={{}}
				ref={imgBg}
				style={{
					// height: `${width * 1.45}px`,
					y: yCon,
					scale: yBg_scale,
				}}>
				<motion.img
					src={images[0]}
					initial={{
						x: '-50%',
						y: '0%',
					}}
					style={{
						x: '-50%',

						// y: yBg,
					}}></motion.img>
			</motion.div>
			<div className='image3d-elements'>
				{images.map((src, index) => {
					if (index == 0) return;
					else
						return (
							<motion.img
								src={src}
								initial={{
									x: '-50%',
								}}
								style={{
									y: yValues[index - 1],
								}}
								key={`img3d_${index}`}></motion.img>
						);
				})}
			</div>
		</div>
	);
}
