import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getColors } from '@/hooks/use-color';

import Link from 'next/link';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';

export default function OurBusinesses() {
	const { red, yellow } = getColors;
	const images = [
		basePath + '/images/OurBusinesses/1.png',
		basePath + '/images/OurBusinesses/2.png',
		basePath + '/images/OurBusinesses/3.png',

		basePath + '/images/OurBusinesses/4.png',
		basePath + '/images/OurBusinesses/5.png',
		basePath + '/images/OurBusinesses/6.png',

		basePath + '/images/OurBusinesses/7.png',
		basePath + '/images/OurBusinesses/8.png',
		basePath + '/images/OurBusinesses/9.png',

		basePath + '/images/OurBusinesses/10.png',
		basePath + '/images/OurBusinesses/11.png',
		basePath + '/images/OurBusinesses/12.png',
	];

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
				<PageBanner title={'Our Businesses'} direction='center' />
				<Section columnCount={2}>
					<div className='column'>
						<div className='text-content'>
							<p>
								San Miguel Corporation is one of the largest and most
								diversified conglomerates in the Philippines by revenues and
								total assets, with sales equivalent to approximately 4% of the
								Philippine GDP in 2020.
							</p>
							<p>
								SMC’s five key business groups, most of which are market leaders
								in their respective industries, include the following: food and
								beverage, packaging, fuel and oil, energy, and infrastructure.
								In addition, SMC has investments in other businesses such as
								property development and leasing, cement, car distributorship,
								and banking services.
							</p>
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
					<div className='column'>
						<div className='image-content'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/Our-Company.png`} />
							</div>
						</div>
					</div>
				</Section>

				<Section columnCount={2}>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
					<div className='column'>
						<BusinessItem />
					</div>
				</Section>
			</Curve>
		</>
	);
}

function BusinessItem() {
	return (
		<div className='business-item'>
			<div className='img-container'>
				<Link href='/our-business/inner'>
					<img src={`${basePath}/images/OurBusinesses/logo.png`}></img>
				</Link>
			</div>
			<div className='desc-container'>
				<div className='business-type small'>Food and Beverages</div>
				<h3 className='business-name heading-6'>
					<Link href='/our-business/inner'>San Miguel Foods</Link>
				</h3>
				<p>
					Our food company offers a wide range of quality food products. Home to
					many of the Philippines’ largest food brands, some of which are the
					most formidable brands in the domestic food industry.
				</p>
			</div>
		</div>
	);
}
