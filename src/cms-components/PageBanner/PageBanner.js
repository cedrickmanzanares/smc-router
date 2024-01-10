'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useRef } from 'react';

import { basePath } from '@/hooks/use-basepath';

export default function PageBanner({ images, children }) {
	const careers = useRef(null);
	const { scrollYProgress } = useScroll({
		target: careers,
		offset: ['start start', 'end start'],
	});

	const y = [
		useTransform(scrollYProgress, [0, 1], ['0vh', '5vh']),
		useTransform(scrollYProgress, [0, 1], ['0vh', '15vh']),
		useTransform(scrollYProgress, [0, 1], ['0vh', '20vh']),
		useTransform(scrollYProgress, [0, 1], ['0vh', '40vh']),
	];

	return (
		<div className='section-content page-banner no-padding' ref={careers}>
			<div className='container-fluid-width medium'>
				{children}

				<div className='img-container'>
					<motion.div class='img-item'>
						<img src={basePath + '/images/Careers/0.png'}></img>
					</motion.div>
					<motion.div
						class='img-item'
						style={{
							y: y[0],
						}}>
						<img src={basePath + '/images/Careers/1.png'}></img>
					</motion.div>
					{images.map((image, index) => {
						return (
							<motion.div
								key={`pagebanner_` + index}
								class='img-item'
								style={{
									y: y[index + 1],
								}}>
								<img src={image}></img>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
