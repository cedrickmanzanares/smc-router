import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import Button from '@/components/button/button';

export default function FoodAndBeverages() {
	const parallaxColumn = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: parallaxColumn,
		offset: ['start end', 'end start'],
	});

	const section2 = useRef(null);
	const { scrollYProgress: section_2_scroll } = useScroll({
		target: section2,
		offset: ['start end', 'end start'],
	});

	const { height } = dimension;

	const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		var base_url = window.location.origin;
		console.log(base_url);

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
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={'Oil Refining & Marketing'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<h2 className='heading-2'>Petron Corporation</h2>
							<img src={`${basePath}/images/OurBusinesses/oil.png`} />
							<p className='heading-5'>
								Petron Corporation is the largest oil refining and marketing
								company in the Philippines and is a leading player in the
								Malaysian market. We have a combined refining capacity of
								268,000 barrels-per-day, producing a full-range of world-class
								fuels and petrochemicals to fuel the lives of millions of
								Filipinos and Malaysians.
							</p>
							<p>
								Here in the Philippines, we supply nearly 30% of the country’s
								total fuel requirements through the operation of our 180,000
								barrel-per-day oil refinery in Bataan. Considered one of the
								most advanced facilities in the region, our refinery processes
								crude oil into a full range of petroleum products including
								gasoline, diesel, LPG, jet fuel, kerosene and petrochemicals.
							</p>
							<p>
								From Bataan, we move our products mainly by sea to nearly 30
								terminals located across the archipelago. Through our robust
								distribution network, we fuel strategic industries such as power
								generation, manufacturing, mining, agribusiness, among others.
								Petron also supplies jet fuel at key airports to international
								and domestic carriers.
							</p>
							<p>
								Through our service station network – the most extensive in the
								country – we retail gasoline, diesel, and autoLPG to motorists
								and the public transport sector. Our wide range of world-class
								fuels includes Blaze 100 Euro 6, XCS, Xtra Advance, Turbo Diesel
								and Diesel Max. We also sell our LPG brands Gasul and Fiesta Gas
								to households and commercial consumers through an extensive
								retail network.
							</p>
							<p>
								We source our fuel additives from our blending facility at the
								Subic Bay Freeport. This gives us the unique capability to
								formulate additives suited for Philippine driving conditions.
							</p>

							<p>
								Our product leadership also extends to our premium line of
								engine oils that meet or even exceed global standards. These are
								formulated, tested, and produced locally at our brand-new Lube
								Oil Blending Plant in Tondo, Manila, having twice the capacity
								of our former plant in Pandacan.
							</p>

							<p>
								We have partnered with popular food and service locator chains
								to give our customers a one-stop, full-service experience. We
								have San Mig Food Ave. and Treats convenience stores in select
								stations, offering a wide variety of food, beverages, and
								personal items for motorists-on-the-go.
							</p>

							<p>
								In line with our efforts to increase our presence in the region,
								we continue to expand our business in Malaysia, which comprises
								integrated refining, distribution, and marketing. We operate an
								88,000 barrel-per-day refinery in Port Dickson, Lumut PME Plant,
								10 terminals including four affiliates, and a retail network of
								around 700 service stations.
							</p>

							<p>
								As part of the San Miguel Group – one of the largest and most
								diversified conglomerates in the Philippines – we are committed
								to expand and grow our business to ensure that we have a
								positive impact in markets where we are present.
							</p>

							<p>
								We are guided by our vision “to be the leading provider of total
								customer solutions in the energy sector and its derivative
								businesses.
							</p>
							<p>
								<Button
									href='https://www.petron.com/'
									without='true'
									rel='noreferrer'
									target='_blank'
									link='/our-business/inner'
									className={'pri-btn btn-bordered'}>
									Read More
								</Button>
							</p>
						</div>
					</div>
					<div className='column bussinesses-opportunities-column sticky'>
						<div className='text-content'>
							<h3 className='heading-5'>Business Opportunities</h3>
							<div className='opportunities-item small-text'>
								<p>
									<b className='heading-6'>PETRON CORPORATION</b>
									<br />
									San Miguel Corp. Head Office
									<br />
									Complex 40 San Miguel Avenue 1550
									<br />
									Mandaluyong City
									<br />
									Tel no.: <a href='tel: (632) 8-884-9200'>(632) 8-884-9200</a>
									<br />
									Mandaluyong City, Philippines
									<br />
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
									<b className='heading-6'>TALK2US</b>
									<br />
									How was your Petron experience?
									<br />
									We would appreciate receiving feedback.
									<br />
									<b>Type:</b> TALK2US (space) (message) and SEND to{' '}
									<a href='tel: 0977-8-738766'>0977-8-738766</a>
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
									<b className='heading-6'>Feedback Hotline:</b> #PETRON
									(#738766)
									<br />
									<b>Email:</b>{' '}
									<a href='mailto: talk2us@petron.com'>talk2us@petron.com</a>
								</p>
							</div>
						</div>
					</div>
				</Section>

				<Section>
					<motion.div className='page-controls'>
						<motion.div className='control prev'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurBusinesses/thumb.png`} />
							</div>

							<div className='control-details'>
								<div className='arrow'>
									<BsArrowLeftCircle size={'1.75rem'} />
								</div>
								<div>
									<p>
										<b>Previous Business</b>
									</p>
									<p className='label heading-5'>San Miguel Foods</p>
								</div>
							</div>
						</motion.div>

						<motion.div className='control next'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurBusinesses/thumb.png`} />
							</div>
							<div className='control-details'>
								<div className='arrow'>
									<BsArrowRightCircle size={'1.75rem'} />
								</div>
								<div>
									<p>
										<b>Next Business</b>
									</p>
									<p className='label heading-5'>San Miguel Foods</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</Section>
			</Curve>
		</>
	);
}
