'use client';

import { useEffect, useRef, useState } from 'react';

import {
	animate,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';

import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import { useWindowSize } from '@uidotdev/usehooks';

export default function OurBusinesses({ className, link, children }) {
	const { height } = useWindowSize();

	const business = useRef(null);
	const { scrollYProgress } = useScroll({
		target: business,
		offset: ['start start', 'end end'],
	});

	const [selected, setSelected] = useState(0);
	const data = [
		{
			img: basePath + '/images/OurBusinesses/food.jpg',
			title: 'Food and Beverage',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
		{
			img: basePath + '/images/OurBusinesses/oil.jpg',
			title: 'Oil Refining and Marketing',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
		{
			img: basePath + '/images/OurBusinesses/packaging.jpg',
			title: 'Packaging',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
		{
			img: basePath + '/images/OurBusinesses/properties.jpg',
			title: 'Properties',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
		{
			img: basePath + '/images/OurBusinesses/power.jpg',
			title: 'Power and Energy',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
		{
			img: basePath + '/images/OurBusinesses/infrastructure.jpg',
			title: 'Infrastructure',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
		{
			img: basePath + '/images/OurBusinesses/other.jpg',
			title: 'Other businsesses',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '//our-business/inner',
		},
	];

	useEffect(() => {
		console.log(selected);
	}, [selected]);
	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		// console.log(latest);
		let mod = 1 / data.length;

		// console.log(~~(latest / mod));
		let index =
			~~(latest / mod) == data.length ? data.length - 1 : ~~(latest / mod);

		// setSelected(index);
	});
	const innerItem_click = (event, info) => {
		setSelected((prev) => event.target.closest('.inner-item').dataset.index);
	};

	let descriptionTransition = {
		initial: {
			opacity: 0,
		},
		enter: {
			opacity: 1,
		},
	};

	const getDescriptionProps = (index) => {
		return {
			initial: 'initial',
			animate: selected === index ? 'animate' : 'initial',
			exit: 'exit',
		};
	};
	return (
		<motion.div
			className='ourbusinesses-section'
			style={{
				height: `${data.length * 50}vh`,
			}}
			initial='initial'
			whileInView='visible'
			ref={business}>
			<div className='pin'>
				<div className='ourbusinesses-bg' style={{ display: 'none' }}>
					{data.map((val, index) => {
						return (
							<motion.img
								animate={{
									opacity: index == selected ? 1 : 0,
								}}
								data-index={index}
								key={`ourbusinesses-bg_${index}`}
								src={val.img}
							/>
						);
					})}
				</div>
				<div className='container-fluid-width large'>
					<div className='ourbusinesses-container'>
						<h2 className='heading-3'>Our Businesses</h2>
						<div className='outer-ring-container'>
							<div className='outer-ring'>
								<div className='ring'></div>
								{data.map((val, index) => {
									return (
										<motion.img
											animate={{
												opacity: index == selected ? 1 : 0,
											}}
											data-index={index}
											key={`outer-ring-img_${index}`}
											src={val.img}
										/>
									);
								})}
							</div>
							<div className='ring-selected'>
								<div className='ring'></div>
							</div>
						</div>

						<motion.div
							className='ring-description'
							initial='initial'
							animate='enter'
							variants={{
								animate: {
									transition: {
										staggerChildren: 1,
									},
								},
							}}
							exit='exit'>
							{data.map((val, index) => {
								return (
									<motion.div
										className='descriptions'
										style={{
											pointerEvents: index == selected ? 'all' : 'none',
										}}
										key={`description_${index}`}>
										<motion.h3
											// {...getDescriptionProps(index)}
											animate={selected === index ? 'enter' : 'initial'}
											variants={{
												initial: {
													opacity: 0,
												},
												enter: {
													opacity: 1,
													transition: {
														delay: 0,
													},
												},
											}}
											className='heading-5'>
											{val.title}
										</motion.h3>
										<motion.p
											// {...getDescriptionProps(index)}
											animate={selected === index ? 'enter' : 'initial'}
											variants={{
												initial: {
													opacity: 0,
												},
												enter: {
													opacity: 1,
													transition: {
														delay: 0.1,
													},
												},
											}}>
											{val.description}
										</motion.p>
										<motion.p
											// {...getDescriptionProps(index)}
											animate={selected === index ? 'enter' : 'initial'}
											variants={{
												initial: {
													opacity: 0,
												},
												enter: {
													opacity: 1,
													transition: {
														delay: 0.2,
													},
												},
											}}>
											<Button
												link='/our-business/inner'
												className={'pri white'}>
												Read More
											</Button>
										</motion.p>
									</motion.div>
								);
							})}
						</motion.div>
						<motion.div className='inner-ring'>
							{data.map((val, index) => {
								return (
									<motion.div
										data-index={index}
										key={`inner-item_${index}`}
										className='inner-item'
										initial={{
											y: `-50%`,
										}}
										animate={{
											y: `${-50 - selected * 100}%`,
										}}
										transition={{
											ease: 'easeInOut',
											duration: 0.5,
										}}
										onTap={(event, info) => {
											let test = document.querySelectorAll('.test2');
											console.log(height);
											window.scrollTo({
												top:
													business.current.offsetTop +
													test[index].offsetTop -
													height / 2,
												behavior: 'smooth',
											});
											// innerItem_click(event, info);
										}}>
										<div className='inner-img'>
											<motion.img
												transition={{
													ease: 'easeInOut',
													duration: 0.5,
												}}
												animate={{
													scale: index == selected ? 0.9 : 0.6,
												}}
												src={val.img}
											/>
										</div>
										<motion.p
											className=''
											animate={{
												opacity: index == selected ? 0 : 1,
											}}>
											<b>{val.title}</b>
										</motion.p>
									</motion.div>
								);
							})}
						</motion.div>
					</div>
				</div>
			</div>
			<div
				className='test'
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					paddingTop: '50vh',
					paddingBottom: '50vh',
					height: '100%',
					zIndex: 0,
				}}>
				{data.map((val, index) => {
					return (
						<motion.div
							key={`control_${index}`}
							className='test2'
							whileInView={() => {
								setSelected(index);
							}}
							viewport={{
								amount: 'all',
							}}
							style={{
								height: `${100 / data.length}%`,
							}}>
							{val.title}
						</motion.div>
					);
				})}
				<div></div>
			</div>
		</motion.div>
	);
}
