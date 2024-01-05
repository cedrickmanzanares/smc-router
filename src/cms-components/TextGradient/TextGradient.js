'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useRef } from 'react';

export default function TextGradient({ paragraph, classes }) {
	const textGradient = useRef(null);
	const { scrollYProgress } = useScroll({
		target: textGradient,
		offset: ['start 0.5', 'start -0.25'],
	});

	const words = paragraph.split(' ');

	return (
		<p className={`${classes ? classes : ''} text-gradient`} ref={textGradient}>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<Word key={i} progress={scrollYProgress} range={[start, end]}>
						{word}
					</Word>
				);
			})}
		</p>
	);
}

const Word = ({ children, progress, range }) => {
	const amount = range[1] - range[0];
	const step = amount / children.length;
	return (
		<span className='word'>
			{children.split('').map((char, i) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				return (
					<Char key={`c_${i}`} progress={progress} range={[start, end]}>
						{char}
					</Char>
				);
			})}
		</span>
	);
};

const Char = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span>
			<span className='shadow'>{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};
