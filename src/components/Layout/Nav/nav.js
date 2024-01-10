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

import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';

import useMousePosition from '@/hooks/use-mousepoition';
import { getColors } from '@/hooks/use-color';
import { useWindowSize } from '@uidotdev/usehooks';
import {
	big_1_variants,
	circleBg_variants,
	circle_variants,
	floatingNavContent_variants,
	hover_animation,
	navContainer_variants,
	navItem_variants,
	path1_variants,
	path2_variants,
	path3_variants,
	path_variants,
	toggleSettings,
	transitionSettings,
} from './anim';
import Image from 'next/image';

import { basePath } from '@/hooks/use-basepath';

export default function Nav() {
	const { scrollY } = useScroll();
	const [navOpen, navShow] = useState(true);
	const [isOpen, toggle] = useCycle(false, true);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest < 100) {
			navShow(true);
		} else {
			navShow(false);
		}
	});

	return (
		<>
			<motion.div
				className='nav-container size-limit'
				animate={navOpen ? 'open' : 'closed'}
				variants={navContainer_variants}>
				<div className='container-fluid-width large'>
					<Link href='/' className='brand-logo'>
						<figure>
							<img src={`${basePath}/images/smc-logo.svg`} alt='SMC Logo' />
						</figure>
					</Link>
					<MainNav />

					<IoIosSearch className='nav-search' size={'1.75rem'} />
				</div>
			</motion.div>
			<FloatingNav navOpen={navOpen} isOpen={isOpen} toggle={toggle} />
		</>
	);
}

function MainNav({
	c,
	color = '',
	defaultOpen = 'true',
	animation = false,
	toggle,
}) {
	return (
		<motion.nav
			variants={{
				initial: {},
				open: {
					transition: {
						staggerChildren: 0.015,
						// delayChildren: 0.5,
					},
				},
			}}
			className={`main-nav ${c && c}`}>
			<NavItem
				label='Our Story'
				link={'/our-story'}
				animation={animation}
				toggle={toggle}
				navItem_variants={navItem_variants}>
				<motion.div
					className='nav-dropdown'
					initial={hover_animation.closed}
					variants={hover_animation}>
					<Accordion defaultIndex={defaultOpen && [0]} allowMultiple={false}>
						<AccordionItem>
							<AccordionButton>
								<Box as='span' flex='1' textAlign='left'>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-company'>
											<b>Our Company</b>
										</Link>
									</motion.div>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<div className='inner-dropdown'>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-values'>Our Values</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-strategy'>Our Strategy</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-history'>Our History</Link>
									</motion.div>

									<Accordion>
										<AccordionItem>
											<AccordionButton>
												<Box as='span' flex='1' textAlign='left'>
													<motion.div onTap={toggle}>
														<Link href='/our-story/corporate-social-responsibility'>
															Corporate Social Responsibility
														</Link>
													</motion.div>
												</Box>

												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel>
												<div className='inner-dropdown'>
													<motion.div onTap={toggle}>
														<Link href='/our-story/environmental-and-other-programs'>
															Environmental and Other Programs
														</Link>
													</motion.div>
													<a href='https://worldwewant.ph/' target='_blank'>
														World We Want
													</a>
												</div>
											</AccordionPanel>
										</AccordionItem>
									</Accordion>
									<a>Our Vision and Core Purpose</a>
									<a>Board of Directors</a>
									<a>Company Officers</a>
									<a>Organizational Chart</a>
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<AccordionButton>
								<Box as='span' flex='1' textAlign='left'>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business'>
											<b>Our Businesses</b>
										</Link>
									</motion.div>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<div className='inner-dropdown'>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>
											Food and Beverage
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>
											Oil Refining & Marketing
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>Cement</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>Packaging</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>Properties</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>
											Power & Energy
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>
											Infrastructure
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/our-story/our-business/inner'>
											Other Businesses
										</Link>
									</motion.div>
								</div>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</motion.div>
			</NavItem>
			<Link className='nav-item' href='/sustainability'>
				<motion.span
					onTap={toggle}
					variants={animation ? navItem_variants : undefined}>
					Sustainability
				</motion.span>
			</Link>
			<NavItem
				toggle={toggle}
				label='Corporate'
				link={'/corporate'}
				animation={animation}
				navItem_variants={navItem_variants}>
				<motion.div
					className='nav-dropdown'
					initial={hover_animation.closed}
					variants={hover_animation}>
					<Accordion
						defaultIndex={defaultOpen && [0]}
						allowMultiple={false}
						color={color}>
						<AccordionItem>
							<AccordionButton>
								<Box as='span' flex='1' textAlign='left'>
									<motion.div onTap={toggle}>
										<Link href='/corporate/corporate-governance'>
											<b>Corporate Governance</b>
										</Link>
									</motion.div>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<div className='inner-dropdown'>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>
											Manual of Corporate Governance
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>
											Annual Corporate Governance Report
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>
											Amended Articles of Incorporation and By-laws
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>Board Committees</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>
											Company&apos;s Policies
										</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>Corporate Structure</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>SMC Privacy Statement</Link>
									</motion.div>
									<motion.div onTap={toggle}>
										<Link href='/disclosures/inner'>
											Enterprise Risk Management
										</Link>
									</motion.div>
								</div>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<AccordionButton>
								<Box as='span' flex='1' textAlign='left'>
									<motion.div onTap={toggle}>
										<Link href='/corporate'>
											<b>Investor Relations</b>
										</Link>
									</motion.div>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel>
								<div className='inner-dropdown'>
									<Accordion allowToggle={true}>
										<AccordionItem>
											<AccordionButton>
												<Box as='span' flex='1' textAlign='left'>
													<motion.div onTap={toggle}>
														<Link href='/our-story/corporate-social-responsibility'>
															Shareholder Information
														</Link>
													</motion.div>
												</Box>

												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel>
												<div className='inner-dropdown'>
													<a>President&apos;s Message</a>
													<a>Share Prices</a>
													<a>Dividend History</a>
													<a>Analyst Coverage</a>
													<a>Total Outstanding Shares</a>
													<a>Top 20 Stockholders</a>
													<a>Exchange Where Listed</a>
													<a>Company Ownership Report</a>
												</div>
											</AccordionPanel>
										</AccordionItem>
										<Link href='/disclosures'>Company Disclosures</Link>
										<AccordionItem>
											<AccordionButton>
												<Box as='span' flex='1' textAlign='left'>
													<motion.div onTap={toggle}>
														<Link href='/our-story/corporate-social-responsibility'>
															Financial Performance
														</Link>
													</motion.div>
												</Box>

												<AccordionIcon />
											</AccordionButton>
											<AccordionPanel>
												<div className='inner-dropdown'>
													<a>Annual Reports</a>
													<a>Financial Statements</a>
													<a>IR Presentations</a>
													<a>Financial Highlights</a>
													<a>
														Shelf Registration and Public Offering of Series 2
														Preferred Shares&apos;
													</a>
													<a>Corporate Notes</a>
												</div>
											</AccordionPanel>
										</AccordionItem>
										<a>Investor Contact</a>
									</Accordion>
								</div>
							</AccordionPanel>
						</AccordionItem>

						<motion.div onTap={toggle}>
							<Link href='/news'>
								<b>Public Offering of Securities</b>
							</Link>
						</motion.div>
						<motion.div onTap={toggle}>
							<Link href='/news'>
								<b>News</b>
							</Link>
						</motion.div>
						<motion.div onTap={toggle}>
							<Link href='/corporate/kaunlaran'>
								<b>Kaunlaran</b>
							</Link>
						</motion.div>
						<motion.div onTap={toggle}>
							<Link href='/corporate/walang-iwanan'>
								<b>Walang Iwanan SMC&apos;s COVID-19 Efforts</b>
							</Link>
						</motion.div>
						<motion.div onTap={toggle}>
							<Link href='/news'>
								<b>Find us on social media</b>
							</Link>
						</motion.div>
					</Accordion>
				</motion.div>
			</NavItem>

			<Link className='nav-item' href={`/careers`}>
				<motion.span
					onTap={toggle}
					variants={animation ? navItem_variants : undefined}>
					Careers
				</motion.span>
			</Link>
		</motion.nav>
	);
}

function NavItem({
	children,
	label,
	link,
	navItem_variants,
	animation,
	toggle,
}) {
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
			variants={navItem_variants}
			onMouseEnter={hover}
			onMouseLeave={hover}
			animate={animation ? navItem_variants : isOpen ? 'open' : 'closed'}>
			<motion.div onTap={toggle} style={{}}>
				<Link href={link}>{label}</Link>
			</motion.div>
			{children}
		</motion.div>
	);
}

function FloatingNav({ navOpen, isOpen, toggle }) {
	const { baseBlack, red } = getColors;
	// const [isOpen, toggle] = useCycle(true, true);

	const toggleDefaults = {
		stroke: '#ffffff',
		strokeWidth: '3px',
		strokeLinecap: 'round',
	};

	return (
		<motion.div
			className='nav-toggle'
			initial='initial'
			variants={{
				open: {
					transition: {
						staggerChildren: 0.5,
					},
				},
			}}>
			<FloatingNavContent isOpen={isOpen} toggle={toggle}></FloatingNavContent>
			<motion.div
				className='nav-toggle-trigger'
				// initial={toggleTrigger_variants.closed}
				// animate={navOpen ? 'closed' : 'open'}
				// variants={toggleTrigger_variants}
				initial='initial'
				whileHover={isOpen ? 'open' : 'hovered'}
				animate={isOpen ? 'open' : !navOpen ? 'navopen' : 'initial'}
				onTap={toggle}
				variants={{
					initial: {
						scale: 0,
					},
					navopen: {
						scale: 1,
					},
					open: {
						scale: 1,
					},
				}}>
				<svg
					width={toggleSettings.size}
					height={toggleSettings.size}
					viewBox={`0 0 ${toggleSettings.size} ${toggleSettings.size}`}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<motion.circle variants={circle_variants} />
					<motion.path
						className='toggle_path1'
						{...toggleDefaults}
						variants={path1_variants}
					/>

					<motion.path
						className='toggle_path2'
						{...toggleDefaults}
						variants={path2_variants}
					/>
					<motion.path
						className='toggle_path3'
						{...toggleDefaults}
						variants={path3_variants}
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
		</motion.div>
	);
}

function FloatingNavContent({ isOpen, toggle }) {
	const { red } = getColors;
	const windowDimensions = useWindowSize();
	const { x: mouseX, y: mouseY } = useMousePosition();

	useEffect(() => {
		if (isOpen) document.querySelector('body').style.overflow = 'hidden';
		else document.querySelector('body').style.overflow = 'auto';
	}, [isOpen]);

	const big_1_variants = {
		open: {
			opacity: 1,
			x: `${windowDimensions.height}px`,
			y: `-${windowDimensions.height}px`,
			transition: transitionSettings,
		},
		initial: {
			opacity: 0,
			x: `-${windowDimensions.height}px`,
			y: `${windowDimensions.height}px`,
			transition: transitionSettings,
		},
	};

	const path_variants = {
		open: {
			opacity: 1,
			x: `0px`,
			y: `0px`,
			transition: transitionSettings,
		},
		initial: {
			opacity: 0,
			x: `-${windowDimensions.height}px`,
			y: `${windowDimensions.height}px`,
			transition: transitionSettings,
		},
	};

	const circleBg_variants = {
		initial: {
			r: 0,
			fill: red,
			transition: transitionSettings,
		},
		open: {
			r:
				windowDimensions.height > windowDimensions.width
					? windowDimensions.height * 1.5
					: windowDimensions.width * 1.5,
			transition: transitionSettings,
		},
	};

	return (
		<motion.div
			className='nav-toggle-content'
			initial='initial'
			animate={isOpen ? 'open' : 'initial'}
			style={{
				overflow: isOpen ? 'auto' : 'hidden',
				pointerEvents: isOpen ? 'all' : 'none',
			}}
			variants={floatingNavContent_variants}>
			{windowDimensions.width !== null && (
				<svg
					className='nav-toggle-bg-elements'
					width={windowDimensions.width}
					height={windowDimensions.height}
					viewBox={`0 0 ${windowDimensions.width} ${windowDimensions.height}`}>
					<motion.circle
						className='circle-bg'
						variants={circleBg_variants}
						animate={{
							cx: mouseX,
							cy: mouseY,

							// r:
							// 	windowDimensions.height > windowDimensions.width
							// 		? windowDimensions.height
							// 		: windowDimensions.width,
						}}></motion.circle>
					{/* <motion.path
						className='big_1'
						d={`M${
							windowDimensions.width / 2 - windowDimensions.height / 2 + 300
						} ${windowDimensions.height - 100} 
						L${windowDimensions.width / 2 + windowDimensions.height / 2 + 100} ${200}`}
						stroke='#F8D258'
						strokeWidth='330'
						strokeLinecap='round'
						variants={big_1_variants}
					/> */}

					<motion.path
						className='path_bg 1'
						d='M-262 637 L43 332'
						stroke='white'
						strokeWidth='160'
						strokeLinecap='round'
						variants={path_variants}
					/>

					<motion.path
						className='path_bg 2'
						d='M-318 875L171 386'
						stroke='#F8D258'
						strokeWidth='180'
						strokeLinecap='round'
						variants={path_variants}
					/>
					<motion.path
						className='path_bg 3'
						d={`M${windowDimensions.width - 350} ${250} 
					L${windowDimensions.width - 200} ${100}`}
						stroke='#F8D258'
						strokeWidth='125'
						strokeLinecap='round'
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
						variants={path_variants}
					/>
				</svg>
			)}

			<MainNav
				c={'toggle-nav'}
				defaultOpen={false}
				animation={true}
				toggle={toggle}
			/>
		</motion.div>
	);
}
