'use client';

import { motion } from 'framer-motion';

import { useEffect } from 'react';

import Link from 'next/link';

import { useMouse } from '@uidotdev/usehooks';
import { useDimensions } from '@/hooks/use-dimension';
import { BsArrowDownCircle, BsArrowUpRightCircle } from 'react-icons/bs';

export default function PDFWidget({ title, subtitle, link }) {
	return (
		<motion.div className='pdf-widget'>
			<h5 className='pdf-widget-title'>
				<Link href={link}>
					{title}
					<br />

					<span>{subtitle}</span>
				</Link>
			</h5>
			<Link href={link} className='pdf-widget-link'>
				<BsArrowUpRightCircle size={`2.5rem`} />
			</Link>

			<div className='pdf-widget-bg'></div>
		</motion.div>
	);
}
