import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';

export default function OurBusinessesInner() {
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
				<PageBanner title={'Ginebra San Miguel'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<p className='heading-4'>
								<b>
									Ginebra San Miguel, Inc. is the world’s largest gin producer
									by volume
								</b>{' '}
								as well as the market leader in the domestic hard liquor market,
							</p>
							<img src={`${basePath}/images/OurBusinesses/packaging.jpg`} />
							<p>
								SMC has a portfolio of companies that is interwoven into the
								economic fabric of the Philippines, benefiting from, as well as
								contributing to, the development and economic progress of the
								nation.
							</p>

							<p>
								SMC, through its subsidiaries and affiliates, has become a
								market leader in its businesses in the Philippines with an
								extensive portfolio of products that include beer, spirits,
								non-alcoholic beverages, poultry, animal feeds, flour, fresh and
								processed meats, dairy products, coffee, various packaging
								products, and a full range of refined petroleum products, most
								of which are leaders in their respective markets. In addition,
								SMC contributes to the growth of downstream industries and
								sustains a network of hundreds of third-party suppliers.
							</p>
						</div>
					</div>
					<div className='column bussinesses-opportunities-column sticky'>
						<div className='text-content'>
							<h3 className='heading-5'>Business Opportunities</h3>
							<div className='opportunities-item small-text'>
								<p>
									<b>Ginebra San Miguel, Inc.</b>
								</p>

								<p className='small-text'>
									Corporate Head Office 3rd, 5th & 6th
									<br />
									Floor, San Miguel Properties Centre,
									<br /> St. Francis Street, Mandaluyong City 1550
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
									<b>Customer Care</b>
								</p>
								<p className='small-text'>
									For inquiries, orders and suggestions on our products and
									services,
									<br />
									Tel no.: (632) 8632-2564
									<br />
									Fax no.: (632) 8632-3299
									<br />
									Mailbox No.: 2623
									<br />
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
									<b>Email and Social Media</b>
								</p>
								<p className='small-text'>customercare.gsmi@smg.sanmiguel</p>
							</div>
						</div>
					</div>
				</Section>
				<Section sectionStyle={{ paddingTop: 0 }}>
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
