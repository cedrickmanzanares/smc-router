import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ParallaxGrid({ images, anim, children }) {
	let split_images = [];
	split_images.push([images[0], images[1], images[2]]);
	split_images.push([images[3], images[4], images[5]]);
	split_images.push([images[6], images[7], images[8]]);
	split_images.push([images[9], images[10], images[11]]);

	const parallaxColumn = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: parallaxColumn,
		offset: ['start end', 'end start'],
	});

	const { height } = dimension;

	const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		var base_url = window.location.origin;

		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', resize);

		resize();

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<motion.div
			className='section-content full parallax-column-container'
			{...anim}>
			<div className='container-fluid-width medium'>
				{children && (
					<div className='cover'>
						<div className='cover-content'>{children}</div>
					</div>
				)}
				<div className='parallax-column' ref={parallaxColumn}>
					<div className='column-wrapper'>
						<Column y={y1} images={[images[0], images[1], images[2]]}></Column>

						<Column y={y2} images={[images[3], images[4], images[5]]}></Column>
						<Column y={y3} images={[images[6], images[7], images[8]]}></Column>
						<Column
							y={y4}
							images={[images[9], images[10], images[11]]}></Column>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function Column({ images, y }) {
	return (
		<div className='column'>
			{images.map((src, i) => {
				return (
					<motion.div key={i} className='img-container' style={{ y }}>
						<img src={src} alt='image' fill />
					</motion.div>
				);
			})}
		</div>
	);
}
