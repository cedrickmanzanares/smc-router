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
			<button onClick={openHandler} className={trigger.className}>
				{trigger.label}
			</button>
			<motion.div
				onClick={openHandler}
				className='modal'
				animate={open ? 'open' : 'closed'}
				initial='closed'
				variants={modalConfig}>
				<motion.div
					onClick={(event) => {
						event.stopPropagation();
					}}
					className='modal-container'
					variants={modalContainerConfig}>
					<button onClick={openHandler} className='btn btn-clear modal-close'>
						<ImCross size='0.75rem' />
					</button>
					<div className='modal-header'>{header.label}</div>
					<div className='modal-content'>{children}</div>
					{/* <div className='action-buttons'>
						<button className='btn'>Action 1</button>
						<button className='btn'>Action 2</button>
						<button className='btn'>Action 3</button>
						<button className='btn'>Action 4</button>
					</div> */}
				</motion.div>
			</motion.div>
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
