'use client';

import { useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import Button from '@/components/button/button';

export default function OurBusinesses({ className, link, children }) {
	const [selected, setSelected] = useState(0);
	const data = [
		{
			img: './images/OurBusinesses/food.jpg',
			title: 'Food and Beverage',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/careers',
		},
		{
			img: './images/OurBusinesses/oil.jpg',
			title: 'Oil Refining and Marketing',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/',
		},
		{
			img: './images/OurBusinesses/packaging.jpg',
			title: 'Packaging',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/',
		},
		{
			img: './images/OurBusinesses/properties.jpg',
			title: 'Properties',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/',
		},
		{
			img: './images/OurBusinesses/power.jpg',
			title: 'Power and Energy',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/',
		},
		{
			img: './images/OurBusinesses/infrastructure.jpg',
			title: 'Infrastructure',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/',
		},
		{
			img: './images/OurBusinesses/other.jpg',
			title: 'Other businsesses',
			description:
				'San Miguel Brewery Inc. (SMB) is the largest producer of beer in the Philippines, with nine out of ten beer drinkers preferring its brands.',
			link: '/',
		},
	];

	const innerItem_click = (event, info) => {
		setSelected((prev) => event.target.closest('.inner-item').dataset.index);

		console.log(info);
	};
	return (
		<div className='section-content ourbusinesses-section' style={{}}>
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
			<div className='container-fluid-width'>
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
					<h3 className='heading-4'>{data[selected].title}</h3>
					<p>{data[selected].description}</p>
					<p>
						<Button className='btn-bordered pri' link={data[selected].link}>
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
											scale: index == selected ? 0.85 : 0.5,
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
	);
}
