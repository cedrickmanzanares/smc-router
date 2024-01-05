'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import { useRef } from 'react';
import Button from '@/components/button/button';

export default function PageCTA() {
	const cta = useRef();
	const { scrollYProgress } = useScroll({
		target: cta,
		offset: ['start end', 'end start'],
	});

	const images = [
		'./images/CTA/cta-1.png',
		'./images/CTA/cta-2.png',
		'./images/CTA/cta-3.png',
	];

	let yValues = images
		.map((val, index) => {
			return useTransform(
				scrollYProgress,
				[0, 1],
				['0%', `${(index * 25) / 2}%`],
				'anticipate'
			);
		})
		.reverse();

	let yTextValues = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		['-50%', `0%`, `200%`],
		'anticipate'
	);

	return (
		<div className='pageCTA' ref={cta}>
			<div className='container-fluid-width'>
				<div className='cta-images'>
					{images.map((val, index) => {
						return (
							<motion.img
								key={`cta_image_${index}`}
								style={{ zIndex: index, y: yValues[index - 1] }}
								src={val}
							/>
						);
					})}
					<motion.h2
						className='heading-2'
						style={{
							x: '-50%',
							y: yTextValues,
							zIndex: images.length / 2 - 1,
						}}>
						At vero eos et accusamus
					</motion.h2>
					<Button href='/' className='btn-bordered white' link='/'>
						Visit our sustainability report
					</Button>
				</div>
			</div>
		</div>
	);
}