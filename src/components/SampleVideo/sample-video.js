'use client';

import Button from '@/components/button/button';

import {
	motion,
	useCycle,
	useInView,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
	circOut,
	backOut,
	linear,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import ReactPlayer from 'react-player';

import { stiffness } from '@/hooks/use-stiffness';

import { useWindowSize } from '@uidotdev/usehooks';

export default function SampleVideo() {
	const ref = useRef(null);
	const video = useRef(null);
	const pin = useRef(null);

	const [position, changePos] = useState('start');
	const [activate, setActivate] = useState(false);
	const [activateEnd, setActivateEnd] = useState(false);

	const src = './videos/sample-video.mp4';

	const { width: wWidth, height: wHeight } = useWindowSize();

	let pinAmount = wHeight;
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const springScroll = useSpring(scrollYProgress, {
		...stiffness,
	});

	const start = wHeight / (wHeight * 2.5);
	const endStart = 0.6;

	useEffect(() => {}, [scrollYProgress]);

	useMotionValueEvent(scrollYProgress, 'change', (latest, prev) => {
		if (latest >= start) {
			setActivate(true);
		} else {
			setActivate(false);
		}

		if (latest >= 0.6) {
			setActivateEnd(true);
		} else {
			setActivateEnd(false);
		}
		// if (latest <= 0.25) changePos('start');
		// else if (latest >= 0.75) changePos('end');
		// else changePos('mid');

		// if (latest === 1) {
		// 	ref.current.style.opacity = '1 !important';
		// 	// video.current.style.position = 'absolute';
		// }
	});

	const yValue = useTransform(scrollYProgress, [0, 0.5], ['50%', '0%']);

	const containerOpacityValue = useTransform(
		springScroll,
		[0, 0.01, 1],
		[0, 1, 1],
		{
			duration: 0.15,
		}
	);

	const positionValue = useTransform(
		scrollYProgress,
		[0, 0.6, 1],
		['fixed', 'absolute', '#absolute']
	);
	const bgValue = useTransform(
		springScroll,
		[0, start, 1],
		['#00000000', '#000000FF', '#000000FF']
	);

	const blurValue = useTransform(springScroll, [0, start, 1], [50, 0, 0]);
	const pinValue = useTransform(
		scrollYProgress,
		[0, start, 1],
		['0px', `${pinAmount * start}px`, `${pinAmount}px`],
		{ ease: linear, duration: 0 }
	);
	const isInView = useInView(ref, {
		margin: `0px 0% -100% 0%`,
	});

	return (
		<motion.div
			className='section-content fullscreen sample-video'
			ref={ref}
			transition={{
				type: 'spring',
				...stiffness,
			}}
			animate={{
				opacity: activate ? 1 : 0,
			}}
			style={{
				top: `-${wHeight}px`,
				height: wHeight * 2.5,
				alignItems: `flex-start`,
				marginBottom: `-${wHeight}px`,
			}}>
			<motion.div
				ref={pin}
				style={{
					width: '100%',
					height: wHeight,
					position: 'sticky',
					left: 0,
					top: 0,
				}}>
				<motion.div
					className='container-fluid-width text-center'
					style={{
						y: yValue,
					}}>
					<motion.h2>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					</motion.h2>
					<motion.p>
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt.
					</motion.p>
				</motion.div>
				<motion.div
					className='video-container'
					style={{
						backgroundColor: 'black',
					}}
					initial={{
						// position: 'fixed',
						x: '-50%',
						y: '-50%',
					}}
					transition={{
						type: 'spring',

						stiffness: 200,
						damping: 30,
						restDelta: 0.001,
					}}
					animate={{
						scale: activateEnd ? 0.85 : 1,
					}}
					ref={video}>
					<video
						style={{
							height: '100%',
							width: '100%',
						}}
						muted={true}
						preload='auto'
						autoPlay={true}
						loop={true}
						playsInline
						src='./videos/sample-video.mp4'></video>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
