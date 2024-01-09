import { useRef } from 'react';
import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import SingleParallax from '@/components/single-parallax/single-parallax';

export default function FullPageBanner({ children }) {
	const banner = useRef();

	const { scrollYProgress } = useScroll({
		target: banner,
		offset: ['start end', 'start start'],
	});

	const clip = useTransform(
		scrollYProgress,
		[0, 1],
		['inset(15%)', 'inset(0%)']
	);

	return (
		<motion.div
			className='section-content fullbanner-section'
			initial={{
				clipPath: 'inset(15%)',
			}}
			style={{
				clipPath: clip,
			}}
			ref={banner}>
			{/* <SingleParallax scrollYProgress_start={scrollYProgress}> */}
			{children}
			{/* </SingleParallax> */}
		</motion.div>
	);
}
