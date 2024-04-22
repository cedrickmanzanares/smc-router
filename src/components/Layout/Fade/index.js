import useAnim from '@/hooks/use-anim';
import { motion } from 'framer-motion';
import { fadeVariants } from '../anim';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ThemeContext } from '@/pages/_app';

export default function Fade({ children, customStyle }) {
	const router = useRouter();
	const { smcTheme } = useContext(ThemeContext);
	useEffect(() => {
		const lenis = new Lenis();

		const raf = (time) => {
			lenis.raf(time);

			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);
	}, []);

	return (
		<motion.div
			className={`fade ${smcTheme}`}
			style={{
				...{
					transformOrigin: 'center top',
				},
				...customStyle,
			}}
			{...useAnim(fadeVariants)}>
			{children}
		</motion.div>
	);
}
