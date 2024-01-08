import { useRef } from 'react';
import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import SingleParallax from '@/components/single-parallax/single-parallax';

export default function FullPageBanner() {
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
			className='section-content fullbanner-section no-padding'
			initial={{
				clipPath: 'inset(15%)',
			}}
			style={{
				clipPath: clip,
			}}
			ref={banner}>
			<SingleParallax scrollYProgress_start={scrollYProgress}>
				<video
					style={{
						height: '100%',
						width: '100%',
					}}
					preload='auto'
					playsInline
					src='/videos/sample-video.mp4'></video>
			</SingleParallax>
		</motion.div>
	);
}
