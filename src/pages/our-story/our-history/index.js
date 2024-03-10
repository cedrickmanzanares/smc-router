import Head from 'next/head';
import Curve from '@/components/Layout/Curve';
import Parallax from '@/components/Parallax/parallax';
import SampleVideo from '@/components/SampleVideo/sample-video';
import OurBusinesses from '@/cms-components/OurBusinesses/OurBusinesses';

import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { getColors } from '@/hooks/use-color';
import Card from '@/components/card/card';
import Button from '@/components/button/button';
import PageCTA from '@/cms-components/PageCTA/PageCTA';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import div from '@/components/single-parallax/single-parallax';
import { useDimensions } from '@/hooks/use-dimension';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import TextGradient from '@/cms-components/TextGradient/TextGradient';
import SingleParallax from '@/components/single-parallax/single-parallax';
import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';

export default function OurHistory() {
	const parent1 = useRef(null);

	const { width: w1 } = useDimensions(parent1);

	const { scrollYProgress: scrollYProgress_start1 } = useScroll({
		target: parent1,
		offset: ['start end', 'end start'],
	});

	// const springValue1 = useSpring(scrollYProgress_start1, {
	// 	stiffness: 100,
	// 	damping: 30,
	// 	restDelta: 0.001,
	// });

	const xVal = useTransform(scrollYProgress_start1, [0, 1], ['0vw', `-100vw`]);

	const xVal2 = useTransform(scrollYProgress_start1, [0, 1], ['-100vw', `0vw`]);

	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageTitle title='Our' split='History' horizontal='center' />
				<motion.div
					className='section-content img-section full no-min-height'
					ref={parent1}>
					<div className='container-fluid-width'>
						<div className='marquee'>
							<motion.div
								className='marquee-overflow'
								initial={{
									x: 0,
								}}
								// style={{ x: xVal }}
								animate={{
									x: '-100vw',
								}}
								transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}>
								<div
									className='grid'
									style={{
										gridTemplateColumns:
											'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
									}}>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/11.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/12.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/13.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/14.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/15.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/11.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/12.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/13.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/14.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/15.jpg`} />
										</SingleParallax>
									</div>
								</div>
							</motion.div>
						</div>
						<div className='marquee'>
							<motion.div
								className='marquee-overflow'
								initial={{
									x: '-100vw',
								}}
								animate={{
									x: '0vw',
								}}
								transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}>
								<div
									className='grid'
									style={{
										gridTemplateColumns:
											'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
									}}>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/1.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/2.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/3.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/4.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/5.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/1.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/2.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/3.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/4.jpg`} />
										</SingleParallax>
									</div>
									<div>
										<SingleParallax
											scrollYProgress_start={scrollYProgress_start1}>
											<img src={`${basePath}/images/OurHistory/5.jpg`} />
										</SingleParallax>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>
				<div className='section-content'>
					<div className='container-fluid-width small'>
						<TextGradient
							classes='heading-4'
							paragraph='Established in 1890, La Fabrica de Cerveza de San Miguel, Southeast Asia’s first brewery produced and bottled what would eventually become one of the bestselling beers in the region. Within the span of a generation, San Miguel Beer would become an icon among beer drinkers.'>
							<h3 className='heading-5 split-color'>
								Proud <b>Beginnings</b>
							</h3>
						</TextGradient>
					</div>
				</div>

				<FullPageBanner>
					<video
						style={{
							height: '100%',
							width: '100%',
						}}
						preload='auto'
						poster={`${basePath}/videos/615559faf380d-poster.png`}
						playsInline
						controls
						src={`${basePath}/videos/615559faf380d.mp4`}></video>
				</FullPageBanner>
			</Curve>
		</>
	);
}
