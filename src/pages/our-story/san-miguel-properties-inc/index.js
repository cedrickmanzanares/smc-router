import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import Button from '@/components/button/button';
import { NextBusinesses, PrevBusinesses } from '../our-businesses/inner';

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
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={'Properties'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<h2 className='heading-2'>San Miguel Properties Inc.</h2>
							<img src={`${basePath}/images/OurBusinesses/properties.png`} />
							<p className='heading-5'>
								San Miguel Properties Inc. (SMPI) is the corporate real estate
								arm of San Miguel Corporation (SMC). It is the primary property
								subsidiary of SMC Group, currently 100% owned by SMC.
							</p>
							<p>
								SMPI is presently engaged in commercial property development,
								sale and leasing of real properties, management of strategic
								real estate ventures and corporate real estate services.
							</p>
							<p>
								Among its completed projects are Asian Leaf, Bel Aldea, and
								Maravilla in Cavite, Wedgewoods in Sta. Rosa, Laguna, and Makati
								Diamond Residences, Dover Hill, One Dover View, Two Dover View
								and Emerald 88 in Metro Manila.
							</p>

							<p>
								As SMYPC&apos;s product portfolio and clientele increased, it
								has also expanded its market reach spreading to as far as
								Southeast Asia, Australia, Middle East, Africa, United States
								and Europe. The company’s plants and facilities provide a
								dynamic, strategically accessible, and world-class supply base,
								creating a sustainable competitive advantage.
							</p>
							<p>
								<Button
									href='https://www.sanmiguelproperties.com.ph/'
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
								<p className='small-text'>
									<b>CORPORATE OFFICE:</b>
									<br />
									3/F San Miguel Head Office Complex <br />
									40 San Miguel Ave., Ortigas Center <br />
									Mandaluyong City, 1550 Philippines
								</p>
								<p className='small-text'>
									Tel No. +632 8632-3000 loc. 3250
									<br />
									Fax No. +632 8632-3266
									<br />
									<a
										href='mailto: admin@sanmiguelproperties.com.ph'
										target='_blank'>
										admin@sanmiguelproperties.com.ph
									</a>
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p className='small-text'>
									<b>SALES OFFICE:</b>
									<br />
									Asian Leaf Subdivision Brgy. San Francisco,
									<br />
									General Trias, Cavite
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p className='small-text'>
									<b>CUSTOMER CARE HOTLINE:</b> <br />
									<a href='tel: (+632) 8-632-2000'>(+632) 8-632-2000</a>
								</p>
							</div>
						</div>
					</div>
				</Section>

				<Section sectionStyle={{ paddingTop: 0 }}>
					<motion.div className='page-controls'>
						<PrevBusinesses />
						<NextBusinesses />
					</motion.div>
				</Section>
			</Curve>
		</>
	);
}
