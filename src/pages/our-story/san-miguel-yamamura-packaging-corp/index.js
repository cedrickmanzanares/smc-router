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
				<PageBanner title={'Packaging'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<h2 className='heading-2'>
								San Miguel Yamamura Packaging Corporation
							</h2>
							<img src={`${basePath}/images/OurBusinesses/packaging.png`} />
							<p className='heading-5'>
								San Miguel Yamamura Packaging Corporation (SMYPC) is a joint
								venture company that combines the competencies of two recognized
								Asian brands – one of Southeast Asia&apos;s biggest
								conglomerates, San Miguel Corporation, and Japan&apos;s Nihon
								Yamamura Glass Company, Ltd.
							</p>
							<p>
								SMYPC has developed its business to provide not only glass
								packaging products but other formats like metal, paper,
								composites, plastics, and PET requirements to a wide variety of
								industries, including the beverage, food, pharmaceutical,
								industrial, personal & household care industries. SMYPC supplies
								products such as Enviro-Tuff (radiant barrier), woven products,
								wine closures, rigid plastic containers, and retail and online
								packaging, and wine. Woomera, specifically created for the
								Filipino palate, is blended, filled, and packaged in world-class
								wine bottling facilities in Australia. The wine brand is
								imported and distributed to the Philippines and other Asian
								markets. SMYPC has also evolved to provide packaging services
								like beverage filling, logistics services, trading,
								distributorship, and creative solutions.
							</p>

							<p>
								As SMYPC&apos;s product portfolio and clientele increased, it
								has also expanded its market reach spreading to as far as
								Southeast Asia, Australia, Middle East, Africa, United States
								and Europe. The company&apos;s plants and facilities provide a
								dynamic, strategically accessible, and world-class supply base,
								creating a sustainable competitive advantage.
							</p>
							<p>
								<Button
									href='http://smypc.com/'
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
									<b className='heading-6'>Main Office</b>
									<br />
									10/F San Miguel Properties Centre
									<br />
									#7 St. Francis St., Mandaluyong City,
									<br />
									1550 Metro Manila, Philippines
								</p>
								<p className='small-text'>
									Trunk Line:
									<a href='tel: (+632) 5308-8888' target='_blank'>
										(+632) 5308-8888
									</a>
									<br />
									Fax No.
									<a href='tel: (+632) 8637-6297' target='_blank'>
										(+632) 8637-6297
									</a>
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
