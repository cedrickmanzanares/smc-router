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
import { useRouter } from 'next/router';

export default function ShapeBg({ daya }) {
	const routes = useRouter();

	const { scrollYProgress } = useScroll();
	const windowDimension = useWindowSize();
	const { x: mouseX, y: mouseY } = useMousePosition();
	const [position, setPosition] = useState('');
	const { red, yellow, blue } = getColors;

	const [animating, setAnimating] = useState(false);

	useEffect(() => {
		console.log(
			JSON.stringify([
				{
					ph: {
						d: `M${199 + 25} ${185 + 25}  L${288 + 25}   ${96 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${172 + 25} ${71 + 25}  L${208 + 25}    ${35 + 25}`,
						strokeWidth: 0,
						// rotate: '360deg',
					},
					puso: {
						d: `M${257 + 25} ${373 + 25}  L${351 + 25}    ${281 + 25}`,
						strokeWidth: 90,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${270 + 25} ${278 + 25}  L${308 + 25}    ${240 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${187 + 25} ${154 + 25}  L${187 + 25}    ${154 + 25}`,
						strokeWidth: 105,
						// rotate: '360deg',
					},
					puso: {
						d: `M${257 + 25} ${373 + 25}  L${159 + 25}    ${273 + 25}`,
						strokeWidth: 90,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${391 + 25} ${312 + 25}  L${303 + 25}    ${400 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${461 + 25} ${411 + 25}  L${49 + 25}  ${232 + 25}`,
						strokeWidth: 95,
						// rotate: '360deg',
					},
					puso: {
						d: `M${252 + 25} ${464 + 25}  L${47 + 25}    ${255 + 25}`,
						strokeWidth: 0,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${347 + 25} ${507 + 25}  L${239 + 25}    ${614 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${467 + 25} ${244 + 25}  L${47 + 25}     ${404 + 25}`,
						strokeWidth: 95,
						// rotate: '360deg',
					},
					puso: {
						d: `M${257 + 25} ${373 + 25}  L${159 + 25}    ${273 + 25}`,
						strokeWidth: 0,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${341 + 25} ${513 + 25}  L${448 + 25}    ${406 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${163 + 25} ${529 + 25}  L${346 + 25}    ${118 + 25}`,
						strokeWidth: 95,
						// rotate: '360deg',
					},
					puso: {
						d: `M${252 + 25} ${464 + 25}  L${47 + 25}    ${255 + 25}`,
						strokeWidth: 90,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${172 + 25} ${71 + 25}  L${208 + 25}    ${35 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${288 + 25} ${96 + 25}  L${288 + 25}    ${96 + 25}`,
						strokeWidth: 0,
						// rotate: '360deg',
					},
					puso: {
						//red
						d: `M${253 + 25} ${466 + 25}  L${469 + 25}    ${255 + 25}`,
						strokeWidth: 90,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${35 + 25} ${510 + 25}   L${152 + 25}    ${394 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${152 + 25} ${394 + 25}  L${152 + 25}    ${394 + 25}`,
						strokeWidth: 0,
						// rotate: '360deg',
					},
					puso: {
						d: `M${152 + 25} ${394 + 25}  L${152 + 25}    ${394 + 25}`,
						strokeWidth: 0,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${394 + 25} ${598 + 25}  L${480 + 25}    ${513 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${480 + 25} ${513 + 25}  L${480 + 25}    ${513 + 25}`,
						strokeWidth: 0,
						// rotate: '360deg',
					},
					puso: {
						//red
						d: `M${257 + 25} ${277 + 25}  L${159 + 25}    ${177 + 25}`,
						strokeWidth: 90,
						// rotate: '720deg',
					},
				},
				{
					ph: {
						d: `M${151 + 25} ${395 + 25}  L${202 + 25}    ${344 + 25}`,
						strokeWidth: 75,
						// rotate: '0deg',
					},
					tao: {
						d: `M${202 + 25} ${344 + 25}  L${202 + 25}    ${344 + 25}`,
						strokeWidth: 0,
						// rotate: '360deg',
					},
					puso: {
						d: `M${257 + 25} ${277 + 25}  L${351 + 25}    ${185 + 25}`,
						strokeWidth: 90,
						// rotate: '720deg',
					},
				},
			])
		);
	}, []);

	const controlVariants = [
		{
			ph: { d: 'M224 210  L313   121', strokeWidth: 75 },
			tao: { d: 'M197 96  L233    60', strokeWidth: 0 },
			puso: { d: 'M282 398  L376    306', strokeWidth: 90 },
		},
		{
			ph: { d: 'M295 303  L333    265', strokeWidth: 75 },
			tao: { d: 'M212 179  L212    179', strokeWidth: 105 },
			puso: { d: 'M282 398  L184    298', strokeWidth: 90 },
		},
		{
			ph: { d: 'M416 337  L328    425', strokeWidth: 75 },
			tao: { d: 'M486 436  L74  257', strokeWidth: 95 },
			puso: { d: 'M277 489  L72    280', strokeWidth: 0 },
		},
		{
			ph: { d: 'M372 532  L264    639', strokeWidth: 75 },
			tao: { d: 'M492 269  L72     429', strokeWidth: 95 },
			puso: { d: 'M282 398  L184    298', strokeWidth: 0 },
		},
		{
			ph: { d: 'M366 538  L473    431', strokeWidth: 75 },
			tao: { d: 'M188 554  L371    143', strokeWidth: 95 },
			puso: { d: 'M277 489  L72    280', strokeWidth: 90 },
		},
		{
			ph: { d: 'M197 96  L233    60', strokeWidth: 75 },
			tao: { d: 'M313 121  L313    121', strokeWidth: 0 },
			puso: { d: 'M278 491  L494    280', strokeWidth: 90 },
		},
		{
			ph: { d: 'M60 535   L177    419', strokeWidth: 75 },
			tao: { d: 'M177 419  L177    419', strokeWidth: 0 },
			puso: { d: 'M177 419  L177    419', strokeWidth: 0 },
		},
		{
			ph: { d: 'M419 623  L505    538', strokeWidth: 75 },
			tao: { d: 'M505 538  L505    538', strokeWidth: 0 },
			puso: { d: 'M282 302  L184    202', strokeWidth: 90 },
		},
		{
			ph: { d: 'M176 420  L227    369', strokeWidth: 75 },
			tao: { d: 'M227 369  L227    369', strokeWidth: 0 },
			puso: { d: 'M282 302  L376    210', strokeWidth: 90 },
		},
	];

	const colors = [yellow, blue, red, blue, yellow, red, yellow, red, blue];

	// 	console.log(`
	// {
	// 	d: 'M${172 + 25} ${71 + 25} L${208 + 25} ${35 + 25}'
	// 	s: 0,
	// },

	// {
	// 	d: 'M${187 + 25} ${154 + 25} L${187 + 25} ${154 + 25}'
	// 	s: 105,
	// },
	// {
	// 	d: 'M${461 + 25} ${411 + 25} L${49 + 25} ${232 + 25}'
	// 	s: 95,
	// },
	// {
	// 	d: 'M${467 + 25} ${244 + 25} L${47 + 25} ${404 + 25}'
	// 	s: 95,
	// },
	// {
	// 	d: 'M${163 + 25} ${529 + 25} L${346 + 25} ${118 + 25}'
	// 	s: 95,
	// },
	// {
	// 	d: 'M${288 + 25} ${96 + 25} L${288 + 25} ${96 + 25}'
	// 	s: 0,
	// },
	// {
	// 	d: 'M${152 + 25} ${394 + 25} L${152 + 25} ${394 + 25}'
	// 	s: 0,
	// },
	// {
	// 	d: 'M${480 + 25} ${513 + 25} L${480 + 25} ${513 + 25}'
	// 	s: 0,
	// },
	// {
	// 	d: 'M${202 + 25} ${344 + 25} L${202 + 25} ${344 + 25}'
	// 	s: 0,
	// },

	// `);

	const controledMVS = [
		[
			{
				d: 'M224 210 L313 121',
				s: 75,
			},

			{
				d: 'M295 303 L333 265',
				s: 75,
			},
			{
				d: 'M416 337 L328 425',
				s: 75,
			},
			{
				d: 'M372 532 L264 639',
				s: 75,
			},
			{
				d: 'M366 538 L473 431',
				s: 75,
			},
			{
				d: 'M197 96 L233 60',
				s: 75,
			},
			{
				d: 'M60 535 L177 419',
				s: 75,
			},
			{
				d: 'M419 623 L505 538',
				s: 75,
			},
			{
				d: 'M176 420 L227 369',
				s: 75,
			},

			// 'M148.355 398.668  L151.826 395.201',
			// 'M341.395 513.066  L344.865 509.6  ',
		],
		[
			{
				d: 'M197 96 L233 60',
				s: 0,
			},

			{
				d: 'M212 179 L212 179',
				s: 105,
			},
			{
				d: 'M486 436 L74 257',
				s: 95,
			},
			{
				d: 'M492 269 L72 429',
				s: 95,
			},
			{
				d: 'M188 554 L371 143',
				s: 95,
			},
			{
				d: 'M313 121 L313 121',
				s: 0,
			},
			{
				d: 'M177 419 L177 419',
				s: 0,
			},
			{
				d: 'M505 538 L505 538',
				s: 0,
			},
			{
				d: 'M227 369 L227 369',
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

	useEffect(() => {
		if (routes.pathname !== '/') setPosition('');
	}, [routes]);
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
	const multilper = 10;

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
					width='616'
					height='750'
					viewBox='0 0 616 750'
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
