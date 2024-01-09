'use client';

import { motion } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';

export default function PageTitle({ title, split, horizontal }) {
	const { blue } = getColors;

	const translate = {
		initial: {
			top: '-300px',
		},
		enter: {
			top: '0px',
			transition: { duration: 0.75, delay: 2, ease: [0.76, 0, 0.24, 1] },
			transitionEnd: {
				top: '0px',
			},
		},
		exit: {
			top: '-300px',
			transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
		},
	};

	const pageTitleClasses = `${
		horizontal ? horizontal : ''
	} section-content page-title`;

	return (
		<motion.div className={pageTitleClasses}>
			<motion.div className='container-fluid-width medium'>
				<motion.h1
					className='heading-3 split-color'
					{...useAnim(pageTranslate(0))}>
					<motion.span>
						{title} <b>{split}</b>
					</motion.span>
					<motion.div className='title-bg'></motion.div>
				</motion.h1>
			</motion.div>
		</motion.div>
	);
}
