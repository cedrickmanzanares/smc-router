'use client';

import { useRef, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

import { basePath } from '@/hooks/use-basepath';
import { getColors } from '@/hooks/use-color';

export default function ImageSlider({
	type,
	gradient = true,
	dots,
	captionPosition = '',
	arrows = true,
}) {
	const { blue } = getColors;
	const sliderClasses = `image-slider ${type} caption-${captionPosition}`;
	const business = useRef(null);
	const { scrollYProgress } = useScroll({
		target: business,
		offset: ['start end', 'end start'],
	});

	const [selected, setSelected] = useState(0);

	const slides = [
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'Lorem Ipsum Dolor',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
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
		if (gradient) {
			if (index == -0) return 1;
			if (index > 2) return 0;
			return 1 - index / 3;
		} else {
			if (index == -0) return 1;
			return 0;
		}
	});

	console.log(o);

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
		<div className={'image-slider-container'}>
			<div className={sliderClasses}>
				<div className='image-slider-track'>
					{slides.map((slide, index) => {
						let x_test = gradient
							? `${20 * ((selected - index) * 2)}%`
							: `${5 * ((selected - index) * 2)}%`;
						let rotate = `${-(selected - index) * 10}deg`;
						return (
							<motion.div
								className='image-slide'
								key={`image-slide_${index}`}
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
									className='image-img'
									animate={{
										opacity: o[getDistance(index, selected)],
									}}>
									<img src={slide.img} />
								</motion.div>
								<motion.div
									className='image-description'
									initial='inital'
									animate={selected === index ? 'selected' : 'initial'}
									variants={{
										initial: {
											opacity: 0,
										},
										selected: {
											opacity: 1,
											transition: {
												staggerChildren: 0.05,
											},
										},
									}}>
									{slide.title && (
										<motion.h3
											className='heading-5 image-title'
											variants={desc_variants}>
											{slide.title}
										</motion.h3>
									)}
									<motion.p className='image-desc' variants={desc_variants}>
										{slide.desc}
									</motion.p>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
				{arrows && (
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
				)}
				{dots && (
					<div className='image-slider-dots'>
						{slides.map((slide, index) => {
							return (
								<motion.button
									key={`slider_dots${index}`}
									onTap={() => {
										setSelected(index);
									}}
									animate={selected === index ? 'selected' : 'initial'}
									variants={{
										initial: {
											backgroundColor: '#d9d9d9',
										},
										selected: {
											backgroundColor: blue,
											transition: {
												staggerChildren: 0.05,
											},
										},
									}}></motion.button>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
