import { useRef } from 'react';
import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import SingleParallax from '@/components/single-parallax/single-parallax';

export default function FullPageBanner({ image, caption, children }) {
	const banner = useRef();
	const { scrollYProgress } = useScroll({
		target: banner,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
	// const z = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

	return (
		<motion.div className='image-content fullbanner' ref={banner}>
			{/* <SingleParallax scrollYProgress_start={scrollYProgress}> */}
			<div className='img-container'>
				<motion.div
					className='fullbanner-img'
					style={{ backgroundImage: `url(${image})`, y: y }}></motion.div>

				{/* </SingleParallax> */}
			</div>
			<div className='image-caption'>
				<h3 className='heading-2'>{caption}</h3>
			</div>
		</motion.div>
	);
}
