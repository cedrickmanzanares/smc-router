'use client';

import { IoIosAddCircleOutline } from 'react-icons/io';

import { motion, useCycle } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDimensions } from '@/hooks/use-dimension';
import { getColors } from '@/hooks/use-color';

export default function xAccordion({ title, children }) {
	const [isOpen, toggle] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const { red, blue, baseBlack } = getColors;

	const expand = () => {
		console.log(height);
		toggle();
	};

	const overflow = {
		open: {
			height: height,
		},
		closed: {
			height: 0,
		},
	};

	const header = {
		open: {
			backgroundPosition: '100% bottom',
		},
		closed: {
			backgroundPosition: '0% bottom',
		},
	};

	return (
		<motion.div
			className='accordion'
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}>
			<motion.div
				className='accordion-header'
				onClick={expand}
				style={{
					backgroundImage: `linear-gradient(90deg, ${baseBlack}, ${red})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '600% 2px',
				}}
				variants={header}>
				<span>{title}</span>
				<CloseIcon />
			</motion.div>
			<motion.div className='accordion-overflow' variants={overflow}>
				<div className='accordion-content' ref={containerRef}>
					{children}
				</div>
			</motion.div>
		</motion.div>
	);
}

function CloseIcon() {
	const { red, blue, baseBlack } = getColors;
	const border = {
		open: {
			rotate: '0deg',
			pathLength: 0,
		},
		closed: {
			rotate: '180deg',
			pathLength: 1,
		},
	};

	const icon = {
		open: {
			rotate: '45deg',
			scale: 1.5,
		},
		closed: {
			rotate: '180deg',
			scale: 1,
		},
	};
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			strokeWidth='0'
			viewBox='0 0 512 512'
			height='1.5rem'
			width='1.5rem'
			xmlns='http://www.w3.org/2000/svg'>
			<motion.path
				variants={icon}
				d='M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z'></motion.path>
			{/* <motion.path
				variants={border}
				d='M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'></motion.path> */}

			<motion.circle
				variants={border}
				stroke={baseBlack}
				strokeWidth='30px'
				cx='256'
				cy='256'
				r='220'
				fill='transparent'
			/>
		</svg>
	);
}
