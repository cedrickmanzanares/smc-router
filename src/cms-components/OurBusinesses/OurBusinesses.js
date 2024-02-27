'use client';

import { useRef, useState } from 'react';

import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion';

import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';

export default function OurBusinesses({ className, link, children }) {
	const business = useRef(null);
	const { scrollYProgress } = useScroll({
		target: business,
		offset: ['start end', 'end start'],
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

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		// console.log(latest);
		let mod = 0.7 / (data.length - 1);

		let index = ~~(latest / mod) > 0 ? ~~(latest / mod) : 0;

		// console.log(latest / mod);
		index = index >= data.length ? data.length - 1 : index;
		console.log(index);
		setSelected(index);
	});
	const innerItem_click = (event, info) => {
		setSelected((prev) => event.target.closest('.inner-item').dataset.index);

		console.log(info);
	};
	return (
		<motion.div
			className='ourbusinesses-section'
			style={{}}
			initial='initial'
			whileInView='visible'
			ref={business}>
			<div className='pin'>
				<div className='ourbusinesses-bg'>
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
							<div className='ring-selected'>
								<div className='ring'></div>
							</div>
						</div>

						<div className='ring-description'>
							<div></div>
							<h3 className='heading-5'>{data[selected].title}</h3>
							<p>{data[selected].description}</p>
							<p>
								<Button link='/our-business/inner' className={'pri white'}>
									Read More
								</Button>
							</p>
						</div>
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
											innerItem_click(event, info);
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
		</motion.div>
	);
}
