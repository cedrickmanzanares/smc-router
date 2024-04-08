import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Button from '@/components/button/button';

import SingleParallax from '@/components/single-parallax/single-parallax';

import { AspectRatio, Box, Flex, Grid } from '@chakra-ui/react';

import { basePath } from '@/hooks/use-basepath';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import Link from 'next/link';
import { PiCaretCircleRight } from 'react-icons/pi';

export default function OurStory() {
	const [selected, setSelected] = useState(0);
	const router = useRouter();
	const params = useParams();

	// console.log(router);
	// console.log(params);
	const grid = useRef(null);

	const { scrollYProgress } = useScroll({
		target: grid,
		offset: ['start end', 'end start'],
	});

	const y = [
		useTransform(
			scrollYProgress,
			[0, 1],
			['calc(-1 * var(--section-padding))', 'calc(1 * var(--section-padding))']
		),
		useTransform(
			scrollYProgress,
			[0, 1],
			['calc(-2 * var(--section-padding))', 'calc(2 * var(--section-padding))']
		),
	];

	const y2 = [
		useTransform(
			scrollYProgress,
			[0, 1],
			['calc(-1 * var(--section-padding))', 'calc(1 * var(--section-padding))']
		),
		useTransform(
			scrollYProgress,
			[0, 1],
			['calc(-2 * var(--section-padding))', 'calc(2 * var(--section-padding))']
		),
	];

	const settings = {
		title: 'Our Story',
		subtitle:
			'Proin auctor euismod nisl, at fringilla arcu. Proin consectetur sem ac magna cursus, congue venenatis augue maximus.',
		image: `${basePath}/images/OurStory/Banner-OurStory.png`,
	};

	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner
					title={settings.title}
					size={'full'}
					image={settings.image}
				/>
				<Section columnCount={2}>
					<div className='column'>
						<h2 className='heading-2'>Neque dictumst eget.</h2>
						<p>Purus varius elit morbi diam varius integer.</p>
						<p>
							Velit morbi consequat laoreet hendrerit purus ornare ante tempor
							nibh. Purus pellentesque feugiat vestibulum enim tortor orci
							sodales hendrerit nascetur.
						</p>
						<p>
							Mauris sed morbi pretium ullamcorper morbi adipiscing fringilla.
							Dictumst et turpis urna accumsan ornare. Volutpat amet enim
							aliquam magnis. Felis viverra ornare elit feugiat dictumst. Velit
							nisl arcu.
						</p>
						<p>
							<Link href='/' className='btn pri-btn btn-stacked'>
								President’s Message
								<PiCaretCircleRight size={'1.75rem'} />
							</Link>
							<Link href='/' className='btn pri-btn btn-stacked'>
								Share Prices <PiCaretCircleRight size={'1.75rem'} />
							</Link>
						</p>
					</div>
					<div className='column'>
						<div className='image-content stacked'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurStory/OurStory-1.svg`} />
							</div>
							<div className='img-container'>
								<img src={`${basePath}/images/ph.svg`} />
							</div>
							<div className='img-container'>
								<img src={`${basePath}/images/OurStory/OurStory-2.png`} />
							</div>
						</div>
					</div>
				</Section>

				<Section>
					<div className='column'>
						<h2 className='heading-2'>Lobortis purus at adipiscing aliquam</h2>
						<p>
							Eu phasellus nunc neque porta laoreet maecenas tortor in. Magnis
							sit leo at a tortor. Quis massa tellus ut arcu sit sed sed. In
							ultrices curabitur leo eu.
						</p>
					</div>
					<div
						className='column'
						style={{
							display: 'flex',
							gap: '5rem',
						}}>
						<div
							className=''
							style={{
								flex: '1 1 47%',
							}}>
							<h3>
								Pellentesque cras tortor viverra dui tempor semper cum sed. Sit
								ut.
							</h3>

							<div className='tab-source tabsource-ourstory'>
								<motion.button
									className={`tab-links ${selected === 0 ? 'active' : ''}`}
									onTap={() => {
										setSelected(0);
									}}>
									<h3 className='heading-3'>Vision</h3>
									<motion.div
										className='ourstory-accordion'
										animate={{
											height: selected === 0 ? 'auto' : 0,
										}}>
										<div>
											<p>
												A resilient and globally-competitive Philippines where
												everyone can enrich and enjoy their lives.
											</p>
										</div>
									</motion.div>
								</motion.button>
								<motion.button
									className={`tab-links ${selected === 1 ? 'active' : ''}`}
									onTap={() => {
										setSelected(1);
									}}>
									<h3 className='heading-3'>Purpose</h3>
									<motion.div
										className='ourstory-accordion'
										animate={{
											height: selected === 1 ? 'auto' : 0,
										}}>
										<div>
											<p>
												To lead in nation-building by creating opportunities
												that will uplift generations of Filipinos,
											</p>
										</div>
									</motion.div>
								</motion.button>
								<motion.button
									className={`tab-links ${selected === 2 ? 'active' : ''}`}
									onTap={() => {
										setSelected(2);
									}}>
									<h3 className='heading-3'>Value</h3>
									<motion.div
										className='ourstory-accordion'
										animate={{
											height: selected === 2 ? 'auto' : 0,
										}}>
										<div>
											<p>
												<b>
													<i>Malasakit</i>
												</b>{' '}
												is at the core of who we are as a company.
											</p>
											<ul>
												<li>Excellence</li>
												<li>Accountability</li>
												<li>Sustainability</li>
											</ul>
										</div>
									</motion.div>
								</motion.button>
							</div>
						</div>
						<div
							style={{
								flex: '1 1 47%',
							}}>
							<div className='tab-target'></div>
						</div>
					</div>
				</Section>
			</Curve>
		</>
	);
}
