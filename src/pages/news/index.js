import Head from 'next/head';
import Curve from '@/components/Layout/Curve';
import Parallax from '@/components/Parallax/parallax';
import SampleVideo from '@/components/SampleVideo/sample-video';
import OurBusinesses from '@/cms-components/OurBusinesses/OurBusinesses copy';

import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getColors } from '@/hooks/use-color';
import Card from '@/components/card/card';
import Button from '@/components/button/button';
import PageCTA from '@/cms-components/PageCTA/PageCTA';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import div from '@/components/single-parallax/single-parallax';
import { useDimensions } from '@/hooks/use-dimension';
import useAnim from '@/hooks/use-anim';

import TextGradient from '@/cms-components/TextGradient/TextGradient';
import SingleParallax from '@/components/single-parallax/single-parallax';
import Link from 'next/link';
import Image from 'next/image';

import gsap from 'gsap';
import { pageTranslate } from '@/hooks/pageAnim';

import { basePath } from '@/hooks/use-basepath';

export default function News() {
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
		{
			title:
				'SMC, Pangasinan ink historic JVA for PLEX; to boost economy and connectivity in Central, Northern Luzon',
			date: 'November 28, 2023',
			img: basePath + '/images/News/n5.png',
			link: '/news/inner',
		},
	];

	useEffect(() => {
		console.log(modal.index);
	}, [modal.index]);

	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageTitle title='News' />

				<motion.div
					className='section-content news-section'
					{...useAnim(pageTranslate(1))}>
					<div className='container-fluid-width medium'>
						<div className='news-featured' ref={parent1}>
							<div className='desc-container'>
								<div className='news-date small'>{newsItems[0].date}</div>
								<h2 className='heading-4 news-title'>{newsItems[0].title}</h2>
								<p>{newsItems[0].desc}</p>
								<p>
									<Button link='/news/inner' className={'btn-bordered pri'}>
										Read More
									</Button>
								</p>
							</div>
							<div className='img-container'>
								<SingleParallax scrollYProgress_start={scrollYProgress_start1}>
									<img src={newsItems[0].img} />
								</SingleParallax>
							</div>
						</div>
						<div className='news-list'>
							{newsItems.map((news, index) => {
								return (
									<NewsItem
										link={news.link}
										index={index}
										title={news.title}
										date={news.date}
										img={news.img}
										setModal={setModal}
										key={`NewsItem_` + index}
									/>
								);
							})}
						</div>
						<NewsModal modal={modal} newsItems={newsItems} />
					</div>
				</motion.div>
			</Curve>
		</>
	);
}

function NewsItem({ index, title, date, img, link, setModal }) {
	return (
		<div
			className='news-item'
			onMouseEnter={() => {
				setModal({ active: true, index, link });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index, link: '' });
			}}>
			<div className='img-container'>
				<Link href={link}>
					<img src={img} />
				</Link>
			</div>
			<h3 className='news-title heading-6'>
				<Link href={link}>{title}</Link>
			</h3>

			<div className='news-date size-limit'>{date}</div>
		</div>
	);
}

function NewsModal({ modal, newsItems }) {
	const { active, index } = modal;
	const modalContainer = useRef(null);
	const cursor = useRef(null);
	const cursorLabel = useRef(null);

	const { red, yellow, blue } = getColors;
	const colors = [red, yellow, blue];

	const scaleAnimation = {
		initial: { scale: 0, x: '-50%', y: '-50%' },
		enter: {
			scale: 1,
			x: '-50%',
			y: '-50%',
			transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
		},
		closed: {
			scale: 0,
			x: '-50%',
			y: '-50%',
			transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
		},
	};

	useEffect(() => {
		//Move Container

		let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
			duration: 0.8,
			ease: 'power3',
		});

		let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
			duration: 0.8,
			ease: 'power3',
		});

		//Move cursor

		let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
			duration: 0.5,
			ease: 'power3',
		});

		let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
			duration: 0.5,
			ease: 'power3',
		});

		//Move cursor label

		let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
			duration: 0.45,
			ease: 'power3',
		});

		let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
			duration: 0.45,
			ease: 'power3',
		});

		let top_adjustment =
			document.querySelector('.news-section').getBoundingClientRect().top - 55;
		window.addEventListener('mousemove', (e) => {
			const { pageX, pageY } = e;
			console.log(pageY);
			xMoveContainer(pageX);

			yMoveContainer(pageY - top_adjustment);

			xMoveCursor(pageX);

			yMoveCursor(pageY - top_adjustment);

			xMoveCursorLabel(pageX);

			yMoveCursorLabel(pageY - top_adjustment);
		});
	}, []);

	return (
		<>
			<motion.div
				ref={modalContainer}
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}
				className='modalContainer'>
				<div style={{ top: index * -100 + '%' }} className='modalSlider'>
					{newsItems.map((news, index) => {
						const { src, color } = news;
						console.log(news.img);
						return (
							<div
								className='modal-news'
								style={{ backgroundColor: colors[index % colors.length] }}
								key={`modal_${index}`}>
								<img src={news.img} />
							</div>
						);
					})}
				</div>
			</motion.div>
			<motion.div
				ref={cursor}
				className='cursor'
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}></motion.div>
			<motion.div
				ref={cursorLabel}
				className='cursorLabel'
				variants={scaleAnimation}
				initial='initial'
				animate={active ? 'enter' : 'closed'}>
				<Link href={modal.link}>View</Link>
			</motion.div>
		</>
	);
}
