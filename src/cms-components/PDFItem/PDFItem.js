'use client';

import { motion } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import Link from 'next/link';
import { IoIosArrowDropright } from 'react-icons/io';

import { BsArrowDownCircle } from 'react-icons/bs';

export default function PDFItem({ title, date, download, link }) {
	const { blue } = getColors;
	const nameVariants = {
		rest: {
			x: '0rem',
		},
		hover: {
			x: '2rem',
		},
	};

	const detailsVariants = {
		rest: {
			x: '0rem',
		},
		hover: {
			x: '-2rem',
		},
	};

	const buttonVariants = {
		rest: {
			color: '#ffffff',
		},
		hover: {
			color: blue,
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
			<motion.div className='pdf-name' variants={nameVariants}>
				<a
					target='_blank'
					href={link}
					rel='noopener noreferrer'
					className='pdf-link'>
					{title}
				</a>
			</motion.div>
			<motion.div className='pdf-details' variants={detailsVariants}>
				{date && <span className='small'>{date}</span>}
				{download ? (
					<motion.div
						variants={buttonVariants}
						style={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<a
							target='_blank'
							href={link}
							rel='noopener noreferrer'
							className='pdf-link'>
							<BsArrowDownCircle size={`2rem`} fill='currentColor' />
							<span className='small'>Download</span>
						</a>
					</motion.div>
				) : (
					<motion.div variants={buttonVariants}>
						<a
							target='_blank'
							href={link}
							rel='noopener noreferrer'
							className='pdf-link'>
							<IoIosArrowDropright size={`2rem`} />
						</a>
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
