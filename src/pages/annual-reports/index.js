import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getColors } from '@/hooks/use-color';

import Button from '@/components/button/button';

import PageTitle from '@/cms-components/PageTitle/PageTitle';

import useAnim from '@/hooks/use-anim';

import Link from 'next/link';

import gsap from 'gsap';
import { pageTranslate } from '@/hooks/pageAnim';
import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';
import FloatingImages from '@/cms-components/FloatingImages/floatingimages';

import { basePath } from '@/hooks/use-basepath';
import SingleParallax from '@/components/single-parallax/single-parallax';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import { NewsItem } from '@/pages/news';
import { Flex } from '@chakra-ui/layout';
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import ImageSlider from '@/cms-components/ImageSlider/ImageSlider';

export default function AnnualReports() {
	const parent1 = useRef(null);
	const { scrollYProgress: scrollYProgress_start1 } = useScroll({
		target: parent1,
		offset: ['start end', 'end start'],
	});

	const news_section = useRef(null);

	const [modal, setModal] = useState({
		active: false,
		index: 0,
		link: '',
	});

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
			title: "SMC's nine-month profit more than doubles to ₱31.2 billion",
			date: 'November 28, 2023',
			img: '',
			link: '/news/inner',
		},
		{
			title:
				'SMB delivers solid nine-month results amidst higher volumes, improved market conditions',
			date: 'November 28, 2023',
			img: basePath + '/images/News/n4.png',
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
				<PageBanner title={'Annual Reports'} direction='center' />
				<Section>
					<Flex gap={5} mb={10}>
						<FormLabel>Select a year for quick search</FormLabel>
						<FormControl w={'auto'}>
							<Select placeholder='Select Year'>
								<option>United Arab Emirates</option>
								<option>Nigeria</option>
							</Select>
						</FormControl>
					</Flex>
					<ImageSlider />
				</Section>
			</Curve>
		</>
	);
}
