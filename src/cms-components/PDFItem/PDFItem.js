'use client';

import { motion } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import Link from 'next/link';

import { PiCaretRightBold } from 'react-icons/pi';
import { PiArrowRightBold } from 'react-icons/pi';

import { IoIosArrowDropright } from 'react-icons/io';

import { BsArrowDownCircle } from 'react-icons/bs';
import Button from '@/components/button/button';

export default function PDFItem({ title, date, download, link }) {
	const { blue } = getColors;
	const nameVariants = {
		rest: {
			opacity: 1,
			x: '0rem',
		},
		hover: {
			opacity: 0.5,

			x: '2rem',
		},
	};

	const detailsVariants = {
		rest: {
			opacity: 1,
			x: '0rem',
		},
		hover: {
			opacity: 1,
			x: '-2rem',
		},
	};

	const buttonVariants = {
		rest: {
			opacity: 1,
			color: blue,
			backgroundColor: '#ffffff00',
		},
		hover: {
			opacity: 1,
			color: '#ffffff',
			backgroundColor: blue,
		},
	};

	const bgVariants = {
		rest: {
			opacity: 0,
			x: 100,
		},
		hover: {
			opacity: 1,
			x: 0,
		},
	};
	return (
		<motion.div
			className='pdf-item size-limit'
			inital='rest'
			whileHover='hover'>
			<a
				target='_blank'
				href={link}
				rel='noopener noreferrer'
				className='pdf-link link-cover'></a>
			<motion.div className='pdf-name' variants={nameVariants}>
				{title}
			</motion.div>
			<motion.div className='pdf-details' variants={detailsVariants}>
				{date && <span className='small'>{date}</span>}
				{download ? (
					<motion.div className='pdf-button' variants={buttonVariants}>
						<PiArrowRightBold size={`1.25rem`} fill='currentColor' />
					</motion.div>
				) : (
					<motion.div className='pdf-button' variants={buttonVariants}>
						<PiArrowRightBold size={`1.25rem`} />
					</motion.div>
				)}
			</motion.div>
			<motion.div
				className='pdf-bg'
				initial={bgVariants.rest}
				variants={bgVariants}></motion.div>
		</motion.div>
	);
}
