import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { basePath } from '@/hooks/use-basepath';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

import { Flex } from '@chakra-ui/layout';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import ImageSlider from '@/cms-components/ImageSlider/ImageSlider';
import Section from '@/cms-components/Section/Section';
import Button from '@/components/button/button';
import { PiCaretCircleLeft, PiCaretCircleRight } from 'react-icons/pi';

export default function AnnualReports() {
	const parent1 = useRef(null);
	const { scrollYProgress: scrollYProgress_start1 } = useScroll({
		target: parent1,
		offset: ['start end', 'end start'],
	});

	const news_section = useRef(null);
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const [modal, setModal] = useState({
		active: false,
		index: 0,
		link: '',
	});

	const text_variants = {
		initial: {
			x: '150px',
			opacity: 0,
			transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
		},
		enter: {
			x: '0',
			opacity: 1,
			transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			x: '-150px',
			opacity: 0,
			transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
		},
	};

	const slides = [
		{
			title: '2022 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2021 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2020 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2019 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2018 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2017 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2016 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
		{
			title: '2015 SMC Annual Reports',
			desc: 'With the COVID-19 pandemic in retreat, the Philippine economy is back on track. At San Miguel, our highest-ever revenues in 2022 reflect continuously growing demand for our products and services. Yet significant headwinds persist. Food insecurity, the power crisis, high prices of goods, and lack of opportunity remain major challenges for many Filipinos. ',
			date: 'November 28, 2023',
			img: basePath + '/images/AnnualReports.png',
			link: '/news/inner',
		},
	];

	const getDistance = (index, current) => {
		return Math.abs(current - index);
	};

	const zindex = slides.map((slide, index) => {
		return slides.length - index;
	});

	const z = slides.map((slide, index) => {
		return `-${index * 50}px`;
	});

	const rotate = slides.map((slide, index) => {
		return `${index * 20}deg`;
	});

	const o = slides.map((slide, index) => {
		if (index == -0) return 1;
		if (index > 2) return 0;
		return 1 - index / 3;
	});

	const x = slides.map((slide, index) => {
		if (index == -0) return 1;
		if (index > 2) return 0;
		return 1 - index / 3;
	});

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
				<PageBanner title={'Annual Reports'} direction='center' />
				<Section
					columnCount={2}
					containerStyle={{ overflow: 'hidden' }}
					containerClass='annual-container'>
					<div className='column full'>
						<Flex gap={5} className='full'>
							<FormLabel>Select a year for quick search</FormLabel>
							<FormControl w={'auto'}>
								<Select placeholder='Select Year'>
									<option>Select Year</option>
									<option>2024</option>
									<option>2023</option>
									<option>2022</option>
									<option>2021</option>
									<option>2020</option>
									<option>2019</option>
								</Select>
							</FormControl>
						</Flex>
					</div>

					<div className='column annual-desc'>
						<AnimatePresence>
							<motion.div
								key={index}
								initial='initial'
								exit='exit'
								animate='enter'
								transition={{
									staggerChildren: 0.015,
								}}
								className='desc-container'>
								<motion.h3 variants={text_variants} className='heading-3'>
									{slides[index].title}
								</motion.h3>
								<motion.p variants={text_variants}>
									{slides[index].desc}
								</motion.p>
								<motion.p variants={text_variants}>
									<Button
										link='/our-story/our-company'
										className={'btn-bordered pri'}>
										Learn more
									</Button>
								</motion.p>
							</motion.div>
						</AnimatePresence>
						{/* {newsItems.map((news) => {
							return (
								<div className='desc-container'>
									<h3 className='heading-3'>{news.title}</h3>
									<p>{news.desc}</p>
									<p>
										<Button
											link='/our-story/our-company'
											className={'btn-bordered pri'}>
											Learn more
										</Button>
									</p>
								</div>
							);
						})} */}
					</div>

					<div className='column annual-image'>
						<div className='slider'>
							{slides.map((news, i) => {
								return (
									<motion.div
										key={`slide_annual-image${i}`}
										className='slide'
										transition={{
											duration: 0.5,
											ease: [0.76, 0, 0.24, 1],
											zIndex: {
												delay: 0 > direction ? 0.25 : 0.35,
											},
										}}
										animate={{
											opacity: i < index ? 0 : o[getDistance(i, index)],
											zIndex: zindex[getDistance(i, index)],
											z: i < index ? '0' : z[getDistance(i, index)],
											x: `${(index - i) * 40 - index * 100}%`,
										}}>
										<img src={news.img} />
									</motion.div>
								);
							})}
						</div>
						<div className='controls'>
							<motion.button
								className='button left'
								style={{
									pointerEvents: index === 0 ? 'none' : 'all',
								}}
								animate={{
									opacity: index === 0 ? 0 : 1,
								}}
								onTap={() => {
									setIndex((prev) => prev - 1);
									setDirection(-1);
								}}>
								<PiCaretCircleLeft size={'40px'} />
							</motion.button>
							<motion.button
								className='button right'
								style={{
									pointerEvents: index === slides.length - 1 ? 'none' : 'all',
								}}
								animate={{
									opacity: index === slides.length - 1 ? 0 : 1,
								}}
								onTap={() => {
									setIndex((prev) => prev + 1);
									setDirection(1);
								}}>
								<PiCaretCircleRight size={'40px'} />
							</motion.button>
						</div>
					</div>
					{/* <ImageSlider captionPosition='annual-report' gradient='partial' /> */}
				</Section>
			</Curve>
		</>
	);
}
