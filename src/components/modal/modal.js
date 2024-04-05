'use client';
import { motion, LayoutGroup, useCycle } from 'framer-motion';
import { useState } from 'react';

import { ImCross } from 'react-icons/im';

export default function Modal({ children, trigger, header }) {
	const [open, toggle] = useCycle(false, true);

	const openHandler = () => {
		toggle();
	};

	const modalConfig = {
		open: {
			pointerEvents: 'all',
			opacity: 1,
		},
		closed: {
			pointerEvents: 'none',
			opacity: 0,
		},
	};

	const modalContainerConfig = {
		open: {
			y: 0,
			scale: 1,
		},
		closed: {
			y: 25,
			scale: 0.9,
		},
	};

	return (
		<LayoutGroup>
			<div></div>
		</LayoutGroup>
	);
}

function ToggleContent({ header, content }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div layout onClick={() => setIsOpen(!isOpen)}>
			<motion.h2 layout>{header}</motion.h2>
			{isOpen ? content : null}
		</motion.div>
	);
}
