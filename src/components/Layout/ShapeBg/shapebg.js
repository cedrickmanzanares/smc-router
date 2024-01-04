'use client';

import {
	motion,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
	inView,
} from 'framer-motion';

import { animate, stagger } from 'framer-motion/dom';

import useMousePosition from '@/hooks/use-mousepoition';
import { useEffect, useState } from 'react';
import stiffness from '@/hooks/use-stiffness';

import { getColors } from '@/hooks/use-color';
import { useWindowSize } from '@uidotdev/usehooks';

export default function ShapeBg({ daya }) {
	const { scrollYProgress } = useScroll();
	const windowDimension = useWindowSize();
	const { x: mouseX, y: mouseY } = useMousePosition();
	const [position, setPosition] = useState('');
	const { red, yellow, blue } = getColors;

	const [animating, setAnimating] = useState(false);
	const controlVariants = [
		{
			ph: {
				d: 'M199 185 L288 96',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M172 71  L208 35',
				strokeWidth: 0,
				// rotate: '360deg',
			},
			puso: {
				//yellow
				d: 'M257 373 L351 281',
				strokeWidth: 90,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M270 278 L308 240',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M187.094 154.329 L187.234 154.001',
				strokeWidth: 105,
				// rotate: '360deg',
			},
			puso: {
				//blue
				d: 'M257 373 L159 273',
				strokeWidth: 90,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M391 312 L303 400',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M461.039 411.933 L49.1902 232.574',
				strokeWidth: 95,
				// rotate: '360deg',
			},
			puso: {
				//red
				d: 'M252 464 L47 255',
				strokeWidth: 0,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M347 507 L239 614',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M467.045 244.399 L47.1859 404.109',
				strokeWidth: 95,
				// rotate: '360deg',
			},
			puso: {
				//blue
				d: 'M257 373 L159 273',
				strokeWidth: 0,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M341 513 L448 406',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M163.013 529.75  L346.371 118.32',
				strokeWidth: 95,
				// rotate: '360deg',
			},
			puso: {
				//yellow
				d: 'M252 464 L47 255',
				strokeWidth: 90,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M172 71  L208 35',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M288.905 96.6035 L288.905 96.6035',
				strokeWidth: 0,
				// rotate: '360deg',
			},
			puso: {
				//red
				d: 'M253 466 L469 255',
				strokeWidth: 90,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M35 510 L152 394',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M152.26 394.768 L152.26 394.768',
				strokeWidth: 0,
				// rotate: '360deg',
			},
			puso: {
				//yellow
				d: 'M152.26 394.768 L152.26 394.768',
				strokeWidth: 0,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M394.75 598 L480.207 513.066',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M480.207 513.066 L480.207 513.066',
				strokeWidth: 0,
				// rotate: '360deg',
			},
			puso: {
				//red
				d: 'M257 277 L159 177',
				strokeWidth: 90,
				// rotate: '720deg',
			},
		},
		{
			ph: {
				d: 'M151.395 395.634  L202.582 344.934',
				strokeWidth: 75,
				// rotate: '0deg',
			},
			tao: {
				d: 'M202.582 344.934  L202.582 344.934',
				strokeWidth: 0,
				// rotate: '360deg',
			},
			puso: {
				//blue
				d: 'M257 277 L351 185',
				strokeWidth: 90,
				// rotate: '720deg',
			},
		},
	];

	const colors = [yellow, blue, red, blue, yellow, red, yellow, red, blue];
	const controledMVS = [
		[
			{
				d: 'M199 185 L288 96',
				s: 75,
			},

			{
				d: 'M270 278 L308 240',
				s: 75,
			},
			{
				d: 'M391 312 L303 400',
				s: 75,
			},
			{
				d: 'M347 507 L239 614',
				s: 75,
			},
			{
				d: 'M341 513 L448 406',
				s: 75,
			},
			{
				d: 'M172 71  L208 35',
				s: 75,
			},
			{
				d: 'M35 510 L152 394',
				s: 75,
			},
			{
				d: 'M394.75 598 L480.207 513.066',
				s: 75,
			},
			{
				d: 'M151.395 395.634  L202.582 344.934',
				s: 75,
			},

			// 'M148.355 398.668  L151.826 395.201',
			// 'M341.395 513.066  L344.865 509.6  ',
		],
		[
			{
				d: 'M172 71  L208 35',
				s: 0,
			},

			{
				d: 'M187.094 154.329 L187.234 154.001',
				s: 105,
			},
			{
				d: 'M461.039 411.933 L49.1902 232.574',
				s: 95,
			},
			{
				d: 'M467.045 244.399 L47.1859 404.109',
				s: 95,
			},
			{
				d: 'M163.013 529.75  L346.371 118.32',
				s: 95,
			},
			{
				d: 'M288.905 96.6035 L288.905 96.6035',
				s: 0,
			},
			{
				d: 'M152.26 394.768 L152.26 394.768',
				s: 0,
			},
			{
				d: 'M480.207 513.066 L480.207 513.066',
				s: 0,
			},
			{
				d: 'M202.582 344.934  L202.582 344.934',
				s: 0,
			},
		],
		[
			{
				//yellow
				d: 'M257 373 L351 281',
				s: 90,
			},

			{
				//blue
				d: 'M257 373 L159 273',
				s: 90,
			},
			{
				//red
				d: 'M252 464 L47 255',
				s: 0,
			},
			{
				//blue
				d: 'M257 373 L159 273',
				s: 0,
			},
			{
				//yellow
				d: 'M252 464 L47 255',
				s: 90,
			},
			{
				//red
				d: 'M253 466 L469 255',
				s: 90,
			},
			{
				//yellow
				d: 'M152.26 394.768 L152.26 394.768',
				s: 0,
			},
			{
				//red
				d: 'M257 277 L159 177',
				s: 90,
			},
			{
				//blue
				d: 'M257 277 L351 185',
				s: 90,
			},
		],
	];
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		let mvsShape = document.querySelector('.mvs-shapes');

		inView(
			'.ph-trigger',
			(info) => {
				if (position !== 'ph') setPosition('ph');

				// let controlled = document.querySelectorAll('.control-mvs');
				// setAnimating(true);
				// controledMVS[0].map((value, index) => {
				// 	animate(
				// 		controlled[index],
				// 		{
				// 			d: value.d,
				// 			strokeWidth: value.s,
				// 			rotate: '360deg',
				// 			transition: {
				// 				type: 'spring',
				// 				...stiffness,
				// 			},
				// 		},
				// 		{
				// 			duration: 0.5,
				// 			delay: 0.01 * index,
				// 		}
				// 	).then(() => {
				// 		setAnimating(false);
				// 	});
				// });
				// console.log('ph');
			},
			{
				amount: 0.85,
			}
		);

		inView(
			'.tao-trigger',
			(info) => {
				if (position !== 'tao') setPosition('tao');

				// let controlled = document.querySelectorAll('.control-mvs');
				// setAnimating(true);
				// controledMVS[1].map((value, index) => {
				// 	animate(
				// 		controlled[index],
				// 		{
				// 			d: value.d,
				// 			strokeWidth: value.s,
				// 			rotate: '720deg',
				// 			transition: {
				// 				type: 'spring',
				// 				...stiffness,
				// 			},
				// 		},
				// 		{
				// 			duration: 0.5,
				// 			delay: 0.01 * index,
				// 		}
				// 	).then(() => {
				// 		setAnimating(false);
				// 	});
				// });
				// console.log('tao');
			},
			{
				amount: 0.5,
			}
		);

		inView(
			'.heart-trigger',
			(info) => {
				if (position !== 'puso') setPosition('puso');

				// setAnimating(true);
				// let controlled = document.querySelectorAll('.control-mvs');
				// setAnimating(true);

				// controledMVS[2].map((value, index) => {
				// 	animate(
				// 		controlled[index],
				// 		{
				// 			d: value.d,
				// 			strokeWidth: value.s,
				// 			rotate: '360deg',
				// 			// transition: {
				// 			// 	type: 'spring',
				// 			// 	...stiffness,
				// 			// },
				// 		},
				// 		{
				// 			duration: 0.5,
				// 			delay: 0.01 * index,
				// 		}
				// 	).then(() => {
				// 		setAnimating(false);
				// 	});
				// });
				// console.log('puso');
			},
			{
				amount: 0.2,
			}
		);
	});
	const springScroll = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const yValues = useTransform(springScroll, [0, 1], ['-10%', `10%`]);

	const yValues2 = useTransform(springScroll, [0, 1], ['-10%', `10%`]);

	const yValues3 = useTransform(springScroll, [0, 1], ['-10%', `10%`]);

	const xValues = useTransform(springScroll, [0, 1], ['-10%', `10%`]);

	const xValues2 = useTransform(springScroll, [0, 1], ['-10%', `10%`]);
	const xValues3 = useTransform(springScroll, [0, 1], ['-10%', `10%`]);

	const startVal = 150;
	const multilper = 16;

	useEffect(() => {
		const mvs = document.querySelector('.mvs-shapes');
		animate(
			[
				mvs,
				{
					filter: 'blur(20px)',
				},
				{
					duration: 2,
				},
			],
			[
				'.nav',
				{
					filter: 'blur(0px)',
				},
				{
					duration: 1,
					at: '-0.5',
				},
			]
		);
	}, [animating]);
	return (
		<div className='shape-bg'>
			<motion.div
				className='bg-1'
				initial={{
					bottom: '400rem',
					left: '-300rem',
					rotate: '45deg',
				}}
				animate={{
					left: `${-600 - (windowDimension.width / 2 - mouseX) / 30}px`,
					bottom: `${600 + (windowDimension.width / 2 - mouseY) / 60}px`,
				}}
				transition={{
					type: 'tween',
					ease: 'backOut',
				}}
				style={{
					y: yValues,
					x: xValues,
				}}></motion.div>
			<motion.div
				className='fg-1'
				initial={{
					bottom: '100rem',
					left: '-300rem',
					rotate: '45deg',
				}}
				transition={{
					type: 'tween',
					ease: 'backOut',
				}}
				animate={{
					left: `${-600 - (windowDimension.width / 2 - mouseX) / 60}px`,
					bottom: `${300 + (windowDimension.width / 2 - mouseY) / 60}px`,
				}}
				style={{
					y: yValues2,
					x: xValues2,
				}}></motion.div>

			<motion.div
				className='mvs-shapes'
				style={{
					y: yValues3,
					x: xValues3,
				}}>
				<svg
					width='516'
					height='650'
					viewBox='0 0 516 650'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					{controlVariants.map((variants, index) => {
						return (
							<motion.path
								key={`mvspath_${index}`}
								className='control-mvs'
								d='M254 325 L254 325'
								initial={{
									rotate: '-360deg',
								}}
								stroke={colors[index]}
								animate={position}
								variants={variants}
								transition={{
									duration: 0.25,
									delay: 0.01 * index,
									// type: 'spring',
									// ...stiffness,
								}}
								strokeWidth='0'
								strokeLinecap='round'
								onAnimationStart={() => {
									if (index === controlVariants.length - 1) {
										console.log('start');
										setAnimating(true);
									}
								}}
								onAnimationComplete={(def) => {
									if (index === controlVariants.length - 1) {
										console.log(def + ' end');
										setAnimating(false);
									}
								}}
								style={{
									transformOrigin: '250px 250px',
									x: `${
										(windowDimension.width / 2 - mouseX) /
										(startVal - multilper * index)
									}px`,
									y: `-${
										(windowDimension.width / 2 - mouseY) /
										(startVal - multilper * index)
									}px`,
								}}
							/>
						);
					})}
					{/* <motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#FFD038'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 5)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 5)
							}px`,
						}}
					/>

					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#0B7BB5'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 1)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 1)
							}px`,
						}}
					/>
					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#F25A38'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 6)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 6)
							}px`,
						}}
					/>
					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#0B7BB5'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 2)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 2)
							}px`,
						}}
					/>
					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#FFD038'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 7)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 7)
							}px`,
						}}
					/>

					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#F25A38'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 0)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 0)
							}px`,
						}}
					/>

					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#FFD038'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 3)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 3)
							}px`,
						}}
					/>
					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#F25A38'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 4)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 4)
							}px`,
						}}
					/>
					<motion.path
						className='control-mvs'
						d='M254 325 L254 325'
						stroke='#0B7BB5'
						strokeWidth='0'
						strokeLinecap='round'
						style={{
							transformOrigin: '250px 250px',
							x: `${
								(windowDimension.width / 2 - mouseX) /
								(startVal - multilper * 8)
							}px`,
							y: `-${
								(windowDimension.width / 2 - mouseY) /
								(startVal - multilper * 8)
							}px`,
						}}
					/> */}

					{/* <motion.path
						className='control-mvs'
												d='M148.355 398.668  L148.355 398.668'
						stroke='#CE4E2A'
						strokeWidth='70'
						strokeLinecap='round'
					/> */}

					{/* <motion.path
						className='control-mvs'
												d=''
						stroke='#CE4E2A'
						strokeWidth='70'
						strokeLinecap='round'
					/> */}
				</svg>
			</motion.div>
		</div>
	);
}
