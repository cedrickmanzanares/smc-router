import Head from 'next/head';
import Curve from '@/components/Layout/Curve';
import Parallax from '@/components/Parallax/parallax';
import SampleVideo from '@/components/SampleVideo/sample-video';
import OurBusinesses from '@/cms-components/OurBusinesses/OurBusinesses';

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
import { AspectRatio, Badge, Flex } from '@chakra-ui/layout';

import { basePath } from '/next.config';

export default function Kaunlaran() {
	const kol = useRef(null);
	const { scrollYprogress } = useScroll({
		target: kol,
		offset: ['start end', 'end start'],
	});

	const kaunlaran_items = [
		{
			link: '/',
			img: basePath + '/images/CSR/www-1.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-2.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-3.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-4.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-5.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-6.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-7.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-8.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-9.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-10.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-11.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
		{
			link: '/',
			img: basePath + '/images/CSR/www-12.jpg',
			title: 'Sit porttitor pellentesque fermentum leo ipsum lacus.',
			date: 'Jan-Mar 2023',
			vol: 'Vol. 55 Issue 1',
		},
	];
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<motion.div
					className='section-content news-section kaunlaran-section'
					ref={kol}>
					<div className='container-fluid-width large'>
						<div
							style={{
								alignSelf: 'start',
								position: 'sticky',
								top: 'var(--nav-height)',
								paddingTop: '10vh',
							}}>
							<h1 className='heading-3 split-color'>
								<b>Kaunlaran</b> Online
							</h1>

							<p>
								Ut gravida vestibulum nulla suspendisse sit neque nunc malesuada
								felis.
							</p>
							<p>
								Tincidunt lectus sollicitudin et sed egestas. Viverra cursus nam
								dictumst egestas id. Euismod quis scelerisque mi porta.
							</p>
							<p>
								Convallis adipiscing consectetur lobortis luctus vulputate nisi
								nunc. Fames aliquet congue scelerisque lorem egestas dolor.
								Accumsan nulla in volutpat eu pretium pharetra tristique sapien
								duis.
							</p>

							<p>
								<Button
									link='/our-business/inner'
									className={'btn-bordered pri'}>
									Read More
								</Button>
							</p>
						</div>
						<div>
							<div className='kaunlaran-featured'>
								<div className='desc-container'>
									<Badge px={6} py={3} fontFamily={'var(--font-mw_sans)'}>
										Featured issue
									</Badge>
									<h2 className='heading-5 issue-title'>
										Luctus fermentum interdum faucibus diam ut sit. Varius eget
									</h2>
								</div>
								<div className='img-container'>
									<img src={basePath + '/images/KOL/1.png'} />
								</div>
							</div>
							<div className='kaunlaran-list'>
								{kaunlaran_items.map((kaunlaran, index) => {
									return (
										<KaunlaranItems
											link={kaunlaran.link}
											index={index}
											title={kaunlaran.title}
											date={kaunlaran.date}
											vol={kaunlaran.vol}
											img={kaunlaran.img}
											key={`kaunlaranItem_` + index}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</motion.div>
			</Curve>
		</>
	);
}

function KaunlaranItems({ index, title, date, vol, img, link, setModal }) {
	return (
		<div className='issue-item'>
			<div className='img-container'>
				<Link href={link}>
					<AspectRatio ratio={1}>
						<img src={img} />
					</AspectRatio>
				</Link>
			</div>
			<div className='desc-container'>
				<h3 className='issue-title heading-6'>
					<Link href={link}>{title}</Link>
				</h3>
				<Flex justify={'space-between'} align={'center'}>
					<div className='issue-date small'>{date}</div>
					<div className='issue-vol small'>{vol}</div>
				</Flex>
			</div>
		</div>
	);
}
