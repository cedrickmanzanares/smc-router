'use client';
import SingleParallax from '@/components/single-parallax/single-parallax';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRef } from 'react';
import Image3D from '../Image3D/Image3D';
import Image from 'next/image';

export default function ColumnSection({
	children,
	direction,
	images,
	conClass = '',
	imageSetting,
}) {
	const column = useRef(null);

	const { scrollYProgress: column_scroll } = useScroll({
		target: column,
		offset: ['start end', 'end start'],
	});

	const { scrollYProgress: column_scroll_images } = useScroll({
		target: column,
		offset: ['start end', 'end start'],
	});

	const imageY = useTransform(column_scroll_images, [0, 1], ['0', `-100%`]);

	const top = imageSetting ? imageSetting.t : ['0%', `100%`];

	const imageT = useTransform(column_scroll_images, [0, 1], top);

	return (
		<motion.div
			className={`${
				conClass && conClass
			} section-content img-section no-min-height two-col-section`}
			initial='initial'
			whileInView='visible'
			viewport={{
				// once: true,
				amount: 0.5,
			}}
			ref={column}>
			<div className='container-fluid-width medium'>
				<div className={`grid by-2 ${direction ? direction : ''}`}>
					<motion.div
						className='desc-container'
						variants={{
							initial: {
								opacity: 0,
								y: '3rem',
							},
							visible: {
								opacity: 1,
								y: '0rem',
								transition: {
									duration: 0.5,
								},
							},
						}}>
						{children[0]}
					</motion.div>
					{images && (
						<Image3D images={images} scrollYProgress_start={column_scroll} />
					)}
					{!images && (
						<motion.div
							style={{
								y: imageY,
								top: imageT,
							}}
							className='img-container'>
							{children[1]}
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
}
