import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion } from 'framer-motion';

import Button from '@/components/button/button';

import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import TextGradient from '@/cms-components/TextGradient/TextGradient';

import ParallaxGrid from '@/cms-components/ParallaxGrid/ParallaxGrid';
import ColumnSection from '@/cms-components/ColumnSection/ColumnSection';
import { AspectRatio } from '@chakra-ui/react';
import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import { NewsItem } from '@/pages/news';

export default function CSR() {
	const images = [
		`${basePath}/images/CSR/www-1.jpg`,
		`${basePath}/images/CSR/www-2.jpg`,
		`${basePath}/images/CSR/www-3.jpg`,

		`${basePath}/images/CSR/www-4.jpg`,
		`${basePath}/images/CSR/www-5.jpg`,
		`${basePath}/images/CSR/www-6.jpg`,

		`${basePath}/images/CSR/www-7.jpg`,
		`${basePath}/images/CSR/www-8.jpg`,
		`${basePath}/images/CSR/www-9.jpg`,

		`${basePath}/images/CSR/www-10.jpg`,
		`${basePath}/images/CSR/www-11.jpg`,
		`${basePath}/images/CSR/www-12.jpg`,
	];

	const newsItems = [
		{
			title:
				'SMC bests other PH firms; jumps to 43rd in Forbes’ World’s Best Employers list—after ranking high in Time’s World’s Best Companies',
			desc: 'Since 2013, in the aftermath of typhoons Sendong and Yolanda, San Miguel Corporation (SMC) has been at the forefront of building resilient housing communities nationwide.',
			date: 'November 28, 2023',
			img: basePath + '/images/News/n1.png',
			link: '/news/inner',
		},
		{
			title:
				'SMC, Ayala ink agreement to integrate Arca South to Skyway Stage 4 project',
			date: 'November 28, 2023',
			img: basePath + '/images/News/n2.png',
			link: '/news/inner',
		},
		{
			title:
				'SMB delivers solid nine-month results amidst higher volumes, improved market conditions',
			date: 'November 28, 2023',
			img: basePath + '/images/News/n4.png',
			link: '/news/inner',
		},
		{
			title:
				'SMC, Pangasinan ink historic JVA for PLEX; to boost economy and connectivity in Central, Northern Luzon',
			date: 'November 28, 2023',
			img: basePath + '/images/News/n5.png',
			link: '/news/inner',
		},
	];

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
					title={'Corporate Social Responsibility'}
					direction='center'
				/>

				<Section columnCount={2}>
					<div className='column'>
						<div className='image-content'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/Our-Company.png`} />
							</div>
						</div>
					</div>
					<div className='column'>
						<div className='text-content'>
							<h2 className='heading-4'>
								More than a slogan, it’s a calling to our better selves. It’s a
								credo rooted in hope and action.
							</h2>
							<p>
								As a company, San Miguel Corporation invests in social projects
								not only because it makes good business sense, but because we
								believe the private sector needs to do its part. If the cities
								and communities we serve are thriving, San Miguel will thrive
								too.
							</p>
							<p>
								<Button
									link='/our-business/inner'
									className='pri-btn btn-bordered'>
									Learn More
								</Button>
							</p>
						</div>
					</div>
				</Section>

				<Section containerSize={'full'} columnCount={1}>
					<div className='column'>
						<FullPageBanner
							image={`${basePath}/images/CSR/60dc13a6f26d5.png`}
							caption={'The world we want'}></FullPageBanner>
					</div>
				</Section>

				<Section columnCount={2}>
					<div className='column'>
						<div className='text-content'>
							<h2 className='heading-4'>Environmental and Other Programs</h2>
							<p>
								The environmental program of San Miguel Foundation Inc. covers
								the protection of land, water, and air. On a smaller scale, the
								Foundation conducts tree-planting projects on areas identified
								by different San Miguel Corporation (SMC) plants. Tree-planting
								projects are usually scheduled to coincide with plant
								celebrations.
							</p>
							<p>
								The Foundation advocates the protection of coastal waters
								through its Coastal Resource Management, which engages in
								mangrove reforestation, artificial reef installation and
								regeneration of marine resources. Training on waste management
								and donation of trash bins through plant facilities are also
								conducted.
							</p>
							<p>
								<Button
									link='/our-business/inner'
									className='pri-btn btn-bordered'>
									Learn More
								</Button>
							</p>
						</div>
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

				<Section columnCount={2}>
					<div className='column' style={{ flex: '1 0 100%' }}>
						<h3 className='heading-5'>
							Pellentesque cras tortor viverra dui tempor semper cum sed.
						</h3>
					</div>
					{newsItems.map((news, index) => {
						return (
							<div className='column' key={`NewsItem_` + index}>
								<NewsItem
									link={news.link}
									index={index}
									title={news.title}
									date={news.date}
									img={news.img}
								/>
							</div>
						);
					})}
				</Section>
			</Curve>
		</>
	);
}

function Column({ images, y }) {
	return (
		<div className='column'>
			{images.map((src, i) => {
				return (
					<motion.div key={i} className='img-container' style={{ y }}>
						<img src={src} alt='image' fill />
					</motion.div>
				);
			})}
		</div>
	);
}
