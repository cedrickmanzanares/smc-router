import { motion, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';

export default function Image3D({ children, scrollYProgress_start, images }) {
	const imgBg = useRef(null);

	const springValue = useSpring(scrollYProgress_start, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const multiplier = 20;

	let yBg_scale = useTransform(springValue, [0, 0.45], [1.25, 1], 'anticipate');

	let yCon = useTransform(springValue, [0, 1], [`-5%`, `15%`], 'anticipate');

	// let yBg = useTransform(springValue, [0, 1], ['0cqh', '30cqh'], 'anticipate');
	let y = [
		useTransform(springValue, [0, 1], ['0cqh', '3cqh'], 'anticipate'),
		useTransform(springValue, [0, 1], ['0cqh', '6cqh'], 'anticipate'),
		useTransform(springValue, [0, 1], ['0cqh', '12cqh'], 'anticipate'),
	];

	return (
		<div className='image3d'>
			<motion.div
				className='image3d-bg'
				initial={{}}
				ref={imgBg}
				style={
					{
						// height: `${width * 1.45}px`,
						// y: yBg,
						// scale: yBg_scale,
					}
				}>
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

			{images.length > 1 && (
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
										y: y[index],
									}}
									key={`img3d_${index}`}></motion.img>
							);
					})}
				</div>
			)}

			{children && <div className='image3d-label '>{children}</div>}
		</div>
	);
}
