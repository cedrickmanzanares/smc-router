'use client';

import Link from 'next/link';

import {
	MotionConfig,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import { animate, stagger } from 'framer-motion/dom';
import { IoIosSearch } from 'react-icons/io';
import { useCycle } from 'framer-motion';
import { useEffect, useState } from 'react';
import Accordion from '@/components/Accordion/accordion';

import useMousePosition from '@/hooks/use-mousepoition';
import { getColors } from '@/hooks/use-color';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Nav() {
	const { scrollY } = useScroll();
	const [navOpen, navShow] = useState(true);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest < 500) {
			navShow(true);
		} else {
			navShow(false);
		}
	});

	const navContainer_variants = {
		open: {
			opacity: 1,
			y: '0%',
		},

		closed: {
			opacity: 0,
			y: '-100%',
		},
	};

	return (
		<>
			<motion.div
				className='nav-container'
				animate={navOpen ? 'open' : 'closed'}
				variants={navContainer_variants}>
				<div className='container-fluid-width'>
					<Link href='/' className='brand-logo'>
						<figure>
							<img src='/images/smc-logo.svg'></img>
						</figure>
					</Link>
					<MainNav />
					{/* <FloatingNav></FloatingNav> */}
					<IoIosSearch className='nav-search' />
				</div>
			</motion.div>
			<FloatingNav navOpen={navOpen} />
		</>
	);
}

function MainNav() {
	const hover_animation = {
		open: {
			opacity: 1,
			scale: 1,
			y: 0,
			pointerEvents: 'all',
		},
		closed: {
			opacity: 0,
			scale: 0.9,
			x: '-50%',
			y: 10,
			pointerEvents: 'none',
		},
	};
	return (
		<nav className='main-nav'>
			<NavItem label='Our Story' link={'/our-story'}>
				<motion.div
					className='nav-dropdown'
					initial={hover_animation.closed}
					variants={hover_animation}>
					<div className='dropdown-item'>
						<a className=''>Our Company</a>
						<div>
							<a>Our Values</a>
							<a>Our Strategy</a>
							<a>Our History</a>

							<div>
								<a>Corporate Social Responsibility</a>
								<div>
									<a>Environmental and Other Programs</a>
									<a>World We Want</a>
								</div>
							</div>
							<a>Our Vision and Core Purpose</a>
							<a>Board of Directors</a>
							<a>Company Officers</a>
							<a>Organizational Chart</a>
						</div>
					</div>
					<div className='dropdown-item'>
						<a className=''>Our Businesses</a>
						<div>
							<a>Food and Beverage</a>
							<a>Oil Refining & Marketing</a>
							<a>Cement</a>
							<a>Packaging</a>
							<a>Properties</a>
							<a>Power & Energy</a>
							<a>Infrastructure</a>
							<a>Other Businesses</a>
						</div>
					</div>
				</motion.div>
			</NavItem>
			<Link href={`/corporate`}>Sustainability</Link>
			<NavItem label='Corporate' link={'/corporate'}>
				<motion.div
					className='nav-dropdown'
					initial={hover_animation.closed}
					variants={hover_animation}>
					<div className='dropdown-item'>
						<a className=''>Corporate Governance</a>
						{/* <div>
							<Link href='/'>Manual of Corporate Governance</Link>
							<Link href='/'>Annual Corporate Governance Report</Link>
							<Link href='/'>
								Amended Articles of Incorporation and By-laws
							</Link>
							<Link href='/'>Board Committees</Link>
							<Link href='/'>Company's Policies</Link>
							<Link href='/'>Corporate Structure</Link>
							<Link href='/'>SMC Privacy Statement</Link>
							<Link href='/'>Enterprise Risk Management</Link>
						</div> */}
					</div>
					<div className='dropdown-item'>
						<a className=''>Investor Relations</a>
						<div>
							<Link href='/disclosures'>Company Disclosures</Link>
						</div>
					</div>
				</motion.div>
			</NavItem>
			<Link href={`/sustainability`}>Careers</Link>
		</nav>
	);
}

function NavItem({ children, label, link }) {
	const [isOpen, toggleOpen] = useCycle(false, true);

	const hover_animation1 = {
		open: {
			scale: 2,
		},
		closed: {
			scale: 1,
		},
	};
	const hover = (elem) => {
		toggleOpen();
	};

	return (
		<motion.div
			className='nav-item'
			onMouseEnter={hover}
			onMouseLeave={hover}
			animate={isOpen ? 'open' : 'closed'}>
			<Link href={link}>{label}</Link>
			{children}
		</motion.div>
	);
}

function FloatingNav({ navOpen }) {
	const [isOpen, toggle] = useCycle(false, true);
	const { baseBlack } = getColors;
	// const [isOpen, toggle] = useCycle(true, true);

	const windowDimensions = useWindowSize();

	const spring_settings = {
		type: 'spring',
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	};
	const toggleAnimation = [
		[
			'.nav-toggle-trigger path',
			{
				stroke: '#fff',
			},
			{
				duration: 0,
			},
		],
		[
			'.toggle_path1',
			{
				y: '7px',
				rotate: '135deg',
			},
			{
				duration: 0.25,
				at: '-0.1',
			},
		],
		[
			'.toggle_path2',
			{
				scaleX: '0',
			},
			{
				duration: 0.25,
				at: '-0.25',
			},
		],
		[
			'.toggle_path3',
			{
				y: '-8px',
				rotate: '225deg',
			},
			{
				duration: 0.25,
				at: '-0.25',
			},
		],
		[
			'.circle-bg',
			{
				r:
					windowDimensions.height > windowDimensions.width
						? windowDimensions.height * 1.5
						: windowDimensions.width * 1.5,
			},
			{
				duration: 0.5,
				at: '-0.25',
			},
		],
		[
			'.big_1',
			{
				x: `${windowDimensions.height}px`,
				y: `-${windowDimensions.height}px`,
			},
			{
				duration: 0.35,
				at: '-0.35',
			},
		],
		[
			'.path_bg',
			{
				x: `0px`,
				y: `0px`,
			},
			{
				duration: 0.35,
				at: '-0.35',
				delay: stagger(0.03),
			},
		],
		[
			'.toggle-nav-item',
			{
				opacity: 1,
				y: '0%',
			},
			{
				duration: 0.35,
				at: '-0.3',
				delay: stagger(0.03),
			},
		],
	];

	const toggleReverseAnimation = [
		[
			'.toggle-nav-item',
			{
				opacity: 0,
				y: '100%',
			},
			{
				transition: spring_settings,
				duration: 0.25,
				delay: stagger(0.03),
			},
		],
		[
			'.path_bg',
			{
				x: `-${windowDimensions.height * 1.25}px`,
				y: `${windowDimensions.height * 1.25}px`,
			},
			{
				duration: 0.35,
				at: '-0.3',
				delay: stagger(0.03),
			},
		],
		[
			'.big_1',
			{
				x: `-${windowDimensions.height * 1.25}px`,
				y: `${windowDimensions.height * 1.25}px`,
			},
			{
				duration: 0.35,
				at: '-0.35',
			},
		],
		[
			'.circle-bg',
			{
				r: 0,
			},
			{
				duration: 0.35,
				at: '-0.35',
			},
		],
		[
			'.toggle_path3',
			{
				y: '0',
				rotate: '0deg',
			},
			{
				duration: 0.25,
				at: '-0.55',
			},
		],
		[
			'.toggle_path2',
			{
				scaleX: '1',
			},
			{
				duration: 0.25,
				at: '-0.35',
			},
		],
		[
			'.toggle_path1',
			{
				y: '0',
				rotate: '0',
			},
			{
				duration: 0.25,
				at: '-0.35',
			},
		],
		[
			'.nav-toggle-trigger path',
			{
				stroke: '#fff',
			},
			{
				duration: 0.25,
			},
		],
		//
	];
	useEffect(() => {
		if (isOpen) {
			animate(toggleAnimation);
		} else {
			animate(toggleReverseAnimation);
		}
	}, [isOpen]);
	return (
		<figure className='nav-toggle'>
			<FloatingNavContent isOpen={isOpen}></FloatingNavContent>
			<Toggle navOpen={navOpen} toggle={toggle} isOpen={isOpen}></Toggle>
		</figure>
	);
}

function Toggle({ navOpen, toggle, isOpen }) {
	const [toggleIsHover, setToggleIsHover] = useState(false);
	const { red, baseBlack } = getColors;
	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	const toggleTrigger_variants = {
		open: {
			scale: 1,
			opacity: 1,
			transition: { type: 'spring', stiffness: 350 },
		},
		closed: {
			scale: 0.8,
			opacity: 0,
		},
	};

	const toggleDefaults = {
		stroke: '#fffffff',
		strokeWidth: '4px',
		strokeLinecap: 'round',
	};

	const toggleSettings = {
		size: 70,
		gap: 8,
		edge: 10,
		padding: 10,
		hover: 15,
	};

	const path1_variants = {
		hovered: {
			d: `M${
				toggleSettings.size -
				toggleSettings.edge -
				toggleSettings.padding -
				toggleSettings.hover
			}  ${toggleSettings.size / 2 - toggleSettings.gap} L${
				toggleSettings.size - toggleSettings.edge - toggleSettings.padding
			} ${toggleSettings.size / 2 - toggleSettings.gap}`,
		},
		notHovered: {
			d: `M${toggleSettings.edge + toggleSettings.padding} ${
				toggleSettings.size / 2 - toggleSettings.gap
			} L${
				toggleSettings.size - toggleSettings.edge - toggleSettings.padding
			} ${toggleSettings.size / 2 - toggleSettings.gap}`,
		},
	};

	const path2_variants = {
		hovered: {
			d: `M${toggleSettings.edge + toggleSettings.padding} ${
				toggleSettings.size / 2
			} L${
				toggleSettings.size -
				toggleSettings.edge -
				toggleSettings.padding -
				toggleSettings.hover
			} ${toggleSettings.size / 2}`,
		},
		notHovered: {
			d: `M${toggleSettings.edge + toggleSettings.padding} ${
				toggleSettings.size / 2
			} L${
				toggleSettings.size - toggleSettings.edge - toggleSettings.padding
			} ${toggleSettings.size / 2}`,
		},
	};

	const path3_variants = {
		hovered: {
			d: `M${toggleSettings.edge + toggleSettings.padding} ${
				toggleSettings.size / 2 + toggleSettings.gap
			} L${
				toggleSettings.edge + toggleSettings.padding + toggleSettings.hover
			} ${toggleSettings.size / 2 + toggleSettings.gap}`,
		},
		notHovered: {
			d: `M${toggleSettings.edge + toggleSettings.padding}  ${
				toggleSettings.size / 2 + toggleSettings.gap
			} L${
				toggleSettings.size - toggleSettings.edge - toggleSettings.padding
			} ${toggleSettings.size / 2 + toggleSettings.gap}`,
		},
	};
	return (
		<motion.div
			className='nav-toggle-trigger'
			// initial={toggleTrigger_variants.closed}
			// animate={navOpen ? 'closed' : 'open'}
			// variants={toggleTrigger_variants}
			onTap={toggle}>
			<svg
				onMouseEnter={() => setToggleIsHover(true)}
				onMouseLeave={() => setToggleIsHover(false)}
				animate={toggleIsHover && !isOpen ? 'hovered' : 'notHovered'}
				width={toggleSettings.size}
				height={toggleSettings.size}
				viewBox={`0 0 ${toggleSettings.size} ${toggleSettings.size}`}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<motion.circle
					initial={{
						cx: toggleSettings.size / 2,
						cy: toggleSettings.size / 2,
						r: 30,
						fill: red,
					}}
					animate={{
						r: toggleIsHover ? 30 : 30,
					}}
				/>
				<motion.path
					className='toggle_path1'
					initial={{
						...path1_variants.notHovered,
						...toggleDefaults,
					}}
					animate={
						toggleIsHover && !isOpen
							? path1_variants.hovered
							: path1_variants.notHovered
					}
				/>

				<motion.path
					className='toggle_path2'
					initial={{
						...path2_variants.notHovered,
						...toggleDefaults,
					}}
				/>
				<motion.path
					className='toggle_path3'
					initial={{
						...path3_variants.notHovered,
						...toggleDefaults,
					}}
					animate={
						toggleIsHover && !isOpen
							? path3_variants.hovered
							: path3_variants.notHovered
					}
				/>

				{/* <path
	d='M3 3L34.5 34.5'
	stroke='black'
	stroke-width='6'
	stroke-linecap='round'
/>
<path
	d='M3 34.5L34.5 3.00004'
	stroke='black'
	stroke-width='6'
	stroke-linecap='round'
/> */}
			</svg>
		</motion.div>
	);
}

function FloatingNavContent({ isOpen }) {
	const { red } = getColors;
	const windowDimensions = useWindowSize();
	const { x: mouseX, y: mouseY } = useMousePosition();

	useEffect(() => {
		if (isOpen) document.querySelector('body').style.overflow = 'hidden';
		else document.querySelector('body').style.overflow = 'auto';
	}, [isOpen]);
	const floatingNavContent_variants = {
		open: {
			display: 'flex',
		},
		closed: {
			display: 'block',
		},
	};

	const settings = {
		duration: 0.35,
		delay: 0.1,
	};

	const big_1 = {
		open: {
			x: `${windowDimensions.height}px`,
			y: `-${windowDimensions.height}px`,
		},
		closed: {
			x: `-${windowDimensions.height}px`,
			y: `${windowDimensions.height}px`,
		},
	};

	const path_variants = {
		open: {
			x: `0px`,
			y: `0px`,
			transition: {
				stagger: 2,
			},
		},
		closed: {
			x: `-${windowDimensions.height}px`,
			y: `${windowDimensions.height}px`,
		},
	};

	const getHeight = (percent) => {
		return windowDimensions;
	};
	return (
		<motion.div
			className='nav-toggle-content'
			animate={isOpen ? 'open' : 'closed'}
			style={{
				overflow: isOpen ? 'auto' : 'hidden',
				pointerEvents: isOpen ? 'all' : 'none',
			}}
			variants={floatingNavContent_variants}>
			<MotionConfig
				transition={{
					duration: 0.35,
					staggerChildren: 100,
				}}>
				<svg
					className='nav-toggle-bg-elements'
					width={windowDimensions.width}
					height={windowDimensions.height}
					viewBox={`0 0 ${windowDimensions.width} ${windowDimensions.height}`}>
					<motion.circle
						className='circle-bg'
						initial={{
							r: 0,
							fill: red,
						}}
						animate={{
							cx: mouseX,
							cy: mouseY,

							// r:
							// 	windowDimensions.height > windowDimensions.width
							// 		? windowDimensions.height
							// 		: windowDimensions.width,
						}}></motion.circle>
					<motion.path
						className='big_1'
						d={`M${
							windowDimensions.width / 2 - windowDimensions.height / 2 + 300
						} ${windowDimensions.height - 100} 
					L${windowDimensions.width / 2 + windowDimensions.height / 2 + 100} ${100}`}
						stroke='#F8D258'
						strokeWidth='330'
						strokeLinecap='round'
						// variants={big_1}
						initial={big_1.closed}
						style={{
							x: `-${windowDimensions.height}px`,
							y: `${windowDimensions.height}px`,
						}}
					/>

					<motion.path
						className='path_bg'
						d='M-262 637L43 332'
						stroke='white'
						strokeWidth='160'
						strokeLinecap='round'
						initial={path_variants.closed}
						variants={path_variants}
					/>

					<motion.path
						className='path_bg'
						d='M-318 875L171 386'
						stroke='#F8D258'
						strokeWidth='180'
						strokeLinecap='round'
						initial={path_variants.closed}
						variants={path_variants}
					/>
					<motion.path
						className='path_bg'
						d={`M${windowDimensions.width - 350} ${50} 
					L${windowDimensions.width - 200} ${-100}`}
						stroke='#F8D258'
						strokeWidth='125'
						strokeLinecap='round'
						initial={path_variants.closed}
						variants={path_variants}
					/>

					<motion.path
						className='path_bg'
						d={`M${windowDimensions.width - 100} ${
							windowDimensions.height / 2 - 150
						} 
					L${windowDimensions.width + 150} ${windowDimensions.height / 2 - 400}`}
						stroke='white'
						strokeWidth='160'
						strokeLinecap='round'
						initial={path_variants.closed}
						variants={path_variants}
					/>

					<motion.path
						className='path_bg'
						d={`M${windowDimensions.width - 150} ${
							windowDimensions.height - 250
						} 
					L${windowDimensions.width + 100} ${windowDimensions.height - 500}`}
						stroke='#3779B0'
						strokeWidth='160'
						strokeLinecap='round'
						initial={path_variants.closed}
						variants={path_variants}
					/>
					<motion.path
						className='path_bg'
						d={`M${windowDimensions.width - 600} ${
							windowDimensions.height + 200
						} 
					L${windowDimensions.width - 300} ${windowDimensions.height - 100}`}
						stroke='white'
						strokeWidth='160'
						strokeLinecap='round'
						initial={path_variants.closed}
						variants={path_variants}
					/>
				</svg>
			</MotionConfig>
			<div className='nav-toggle-nav'>
				<motion.div
					className='toggle-nav-item'
					initial={{
						opacity: 0,
						y: '100%',
					}}>
					<a>Our Story</a>
					{/* <div className='dropdown-item'>
						<a className=''>Our Businesses</a>
						<div>
							<a>Our Values</a>
							<a>Our Strategy</a>
							<a>Our History</a>

							<a>Corporate Social Responsibility</a>
							<div>
								<a>Environmental and Other Programs</a>
								<a>World We Want</a>
							</div>

							<a>Our Vision and Core Purpose</a>
							<a>Board of Directors</a>
							<a>Company Officers</a>
							<a>Organizational Chart</a>
						</div>
					</div>
					<div className='dropdown-item'>
						<a className=''>Our Businesses</a>
						<div>
							<a>Food and Beverage</a>
							<a>Oil Refining & Marketing</a>
							<a>Cement</a>
							<a>Packaging</a>
							<a>Properties</a>
							<a>Power & Energy</a>
							<a>Infrastructure</a>
							<a>Other Businesses</a>
						</div>
					</div> */}
				</motion.div>
				<motion.div
					className='toggle-nav-item'
					initial={{
						opacity: 0,
						y: '100%',
					}}>
					<a>Sustainability</a>
				</motion.div>
				<motion.div
					className='toggle-nav-item'
					initial={{
						opacity: 0,
						y: '100%',
					}}>
					<a>Corporate</a>
					{/* <div className='dropdown-item'>
						<a className=''>Corporate Governance</a>
						<div>
							<a>Our Values</a>
							<a>Our Strategy</a>
							<a>Our History</a>

							<div>
								<a>Corporate Social Responsibility</a>
								<div>
									<a>Environmental and Other Programs</a>
									<a>World We Want</a>
								</div>
							</div>
							<a>Our Vision and Core Purpose</a>
							<a>Board of Directors</a>
							<a>Company Officers</a>
							<a>Organizational Chart</a>
						</div>
					</div>
					<div className='dropdown-item'>
						<a className=''>Investor Relations</a>
						<div>
							<a>Food and Beverage</a>
							<a>Oil Refining & Marketing</a>
							<a>Cement</a>
							<a>Packaging</a>
							<a>Properties</a>
							<a>Power & Energy</a>
							<a>Infrastructure</a>
							<a>Other Businesses</a>
						</div>
					</div>
					<div className='dropdown-item'>
						<a className=''>Public Offering of Securities</a>
					</div>
					<div className='dropdown-item'>
						<a className=''>News</a>
					</div>
					<div className='dropdown-item'>
						<a className=''>
							Public Offering of Securities News Walang Iwanan SMC's COVID-19
						</a>
					</div>
					<div className='dropdown-item'>
						<a className=''>Efforts Find us on social media</a>
					</div> */}
				</motion.div>
				<motion.div
					className='toggle-nav-item'
					initial={{
						opacity: 0,
						y: '100%',
					}}>
					<a>Careers at San Miguel</a>
				</motion.div>
			</div>
		</motion.div>
	);
}
