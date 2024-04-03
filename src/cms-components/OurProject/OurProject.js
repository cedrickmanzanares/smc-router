'use client';

import { useRef, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';

export default function OurProject({ className, link, children }) {
	const business = useRef(null);
	const { scrollYProgress } = useScroll({
		target: business,
		offset: ['start end', 'end start'],
	});

	const [selected, setSelected] = useState(0);

	const slides = [
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'Lorem Ipsum Dolor',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
	];

	const innerItem_click = (event, info) => {
		setSelected((prev) => event.target.closest('.inner-item').dataset.index);
	};

	const getDistance = (index, current) => {
		return Math.abs(current - index);
	};

	const zindex = slides.map((slide, index) => {
		return slides.length - index;
	});

	const z = slides.map((slide, index) => {
		return `-${index * 100}px`;
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

	let slider_transition = {
		type: 'spring',
		duration: 0.35,
		bounce: '0.15',
	};
	let desc_variants = {
		selected: {
			opacity: 1,
			y: '0px',
			transition: slider_transition,
		},
		initial: {
			opacity: 0,
			y: '100px',
			transition: slider_transition,
		},
	};

	return (
		<motion.div
			className='ourproject-section section-content text-center'
			style={{}}
			initial='initial'
			whileInView='visible'
			ref={business}>
			<div className='projects-bgs'>
				{slides.map((slide, index) => {
					return (
						<motion.div
							key={`projects-bgs_${index}`}
							className='projects-bg'
							animate={{
								opacity: selected === index ? 0.3 : 0,
							}}
							transition={slider_transition}
							style={{
								backgroundImage: `url(${slide.img})`,
							}}></motion.div>
					);
				})}
			</div>
			<div className='container-fluid-width medium'>
				<div className='column'>
					<h2 className='heading-2'>Our Projects</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>

					<div className='projects-slider-container'>
						<div className='projects-slider'>
							<div className='projects-slider-track'>
								{slides.map((slide, index) => {
									let x_test = `${25 * ((selected - index) * 2)}%`;
									let rotate = `${-(selected - index) * 10}deg`;
									return (
										<motion.div
											className='projects-slide'
											key={`project-slide_${index}`}
											onTap={() => {
												setSelected(index);
											}}
											animate={{
												zIndex: zindex[getDistance(index, selected)],
												z: z[getDistance(index, selected)],
												// rotate: rotate,

												x: `${-selected * 100}%`,
												// y: `${selected * index * 5}%`,
											}}
											transition={slider_transition}>
											<motion.div
												className='projects-img'
												animate={{
													opacity: o[getDistance(index, selected)],
												}}>
												<img src={slide.img} />
											</motion.div>
											<motion.div
												className='projects-description'
												initial='inital'
												animate={selected === index ? 'selected' : 'initial'}
												variants={{
													selected: {
														transition: {
															staggerChildren: 0.05,
														},
													},
												}}>
												<motion.h3
													className='heading-5 project-title'
													variants={desc_variants}>
													{slide.title}
												</motion.h3>
												<motion.p
													className='project-desc'
													variants={desc_variants}>
													{slide.desc}
												</motion.p>
											</motion.div>
										</motion.div>
									);
								})}
							</div>
							<div className='controls'>
								<motion.button
									className='button left'
									onTap={() => {
										if (selected - 1 < 0) return;
										setSelected((prev) => prev - 1);
									}}>
									<PiCaretLeftBold />
								</motion.button>
								<motion.button
									className='button right'
									onTap={() => {
										if (selected + 1 > slides.length - 1) return;
										setSelected((prev) => prev + 1);
									}}>
									<PiCaretRightBold />
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
