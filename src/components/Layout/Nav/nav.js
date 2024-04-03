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
import { createContext, useContext, useEffect, useState } from 'react';

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
	floatingNavContent_variants,
	hover_animation,
	navItem_variants,
	path1_variants,
	path2_variants,
	path3_variants,
	toggleSettings,
	transitionSettings,
} from './anim';
import Image from 'next/image';

import { basePath } from '@/hooks/use-basepath';
import { useRouter } from 'next/router';
import { getMenu, useGetToggleFill } from '@/data/data';
import { MenuContext, ThemeContext } from '@/pages/_app';

export default function Nav({}) {
	const router = useRouter();
	const smcTheme = useContext(ThemeContext);
	const className = router.route === '/' ? 'home' : 'inner';
	const { scrollY } = useScroll();
	const [navOpen, navShow] = useState(true);
	const [isOpen, toggle] = useCycle(false, true);
	const { red, blue, yellow } = getColors;

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest < 100) {
			navShow(true);
		} else {
			navShow(false);
		}
	});

	const getBackground = () => {
		switch (smcTheme) {
			case 'smc-red':
				return red;
			case 'smc-blue':
				return blue;
			case 'smc-yellow':
				return yellow;
			default:
				return '#ffffff00';
		}
	};

	const getNavColor = () => {
		switch (smcTheme) {
			case 'smc-red':
				return '#ffffff';
			case 'smc-blue':
				return '#ffffff';
			case 'smc-yellow':
				return '#000000';
			default:
				return '#ffffff00';
		}
	};

	const navContainer_variants = {
		open: {
			opacity: 1,
			y: '0%',
			transition: {
				duration: 0.35,
				ease: [0.76, 0, 0.24, 1],
				backgroundColor: {
					delay: 0.75,
				},
			},
			color: getNavColor(smcTheme),
			backgroundColor: getBackground(smcTheme),
		},

		closed: {
			opacity: 0,
			y: '-100%',
			transition: {
				duration: 0.35,
				ease: [0.76, 0, 0.24, 1],
			},
			color: getNavColor(smcTheme),
			backgroundColor: getBackground(smcTheme),
		},
	};

	return (
		<>
			<motion.div
				className={`${className} nav-container`}
				animate={navOpen ? 'open' : 'closed'}
				variants={navContainer_variants}>
				<div className='container-fluid-width large'>
					<Link href='/' className='brand-logo'>
						<figure>
							<motion.img
								animate={{
									opacity: smcTheme === '' ? 1 : 0,
								}}
								transition={{ delay: 0.75 }}
								src={`${basePath}/images/smc-logo.svg`}
								alt='SMC Logo'
							/>
							<motion.img
								animate={{
									opacity: smcTheme === '' ? 0 : 1,
								}}
								transition={{ delay: 0.75 }}
								src={`${basePath}/images/smc-logo-white.svg`}
								alt='SMC Logo White'
							/>
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
	const menu = useContext(MenuContext);
	const { smcTheme } = useContext(ThemeContext);

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
			className={`main-nav ${c && c} ${smcTheme}`}>
			{menu.length !== 0 &&
				menu.map((item, index) => {
					let key = `menuItem_lvl1_${item.id}`;

					let link = item.page.length ? `/${item.page[0].slug}` : `${item.url}`;
					let parent_slug = link;

					if (item.children.length)
						return (
							<NavItem
								key={key}
								label={item.title}
								link={link}
								animation={animation}
								toggle={toggle}
								navItem_variants={navItem_variants}>
								<motion.div
									className='nav-dropdown'
									initial={hover_animation.closed}
									variants={hover_animation}>
									<Accordion
										defaultIndex={defaultOpen && [0]}
										allowMultiple={false}>
										{item.children.map((item) => {
											let key = `menuItem_lvl2_${item.id}`;
											let link = parent_slug;
											link = item.page.length
												? (link += `/${item.page[0].slug}`)
												: `${item.url}`;

											return (
												<AccordionItem key={key}>
													<AccordionButton>
														<Box as='span' flex='1' textAlign='left'>
															<motion.div onTap={toggle}>
																<Link href={link}>
																	<b>{item.title}</b>
																</Link>
															</motion.div>
														</Box>
														<AccordionIcon />
													</AccordionButton>
													<AccordionPanel>
														<div className='inner-dropdown'>
															{item.children.map((item) => {
																let key = `menuItem_lvl3_${item.id}`;
																let link = parent_slug;
																link = item.page.length
																	? (link += `/${item.page[0].slug}`)
																	: `${item.url}`;

																if (item.children.length === 0) {
																	return (
																		<motion.div onTap={toggle} key={key}>
																			<Link href={link}>{item.title}</Link>
																		</motion.div>
																	);
																} else {
																	return (
																		<Accordion key={key}>
																			<AccordionItem>
																				<AccordionButton>
																					<Box
																						as='span'
																						flex='1'
																						textAlign='left'>
																						<motion.div onTap={toggle}>
																							<Link href={link}>
																								{item.title}
																							</Link>
																						</motion.div>
																					</Box>

																					<AccordionIcon />
																				</AccordionButton>
																				<AccordionPanel>
																					<div className='inner-dropdown'>
																						{item.children.map((item) => {
																							let key = `menuItem_lvl4_${item.id}`;
																							let link = parent_slug;
																							link = item.page.length
																								? (link += `/${item.page[0].slug}`)
																								: `${item.url}`;

																							return (
																								<motion.div
																									onTap={toggle}
																									key={key}>
																									<Link href={link}>
																										{item.title}
																									</Link>
																								</motion.div>
																							);
																						})}
																					</div>
																				</AccordionPanel>
																			</AccordionItem>
																		</Accordion>
																	);
																}
															})}
														</div>
													</AccordionPanel>
												</AccordionItem>
											);
										})}
									</Accordion>
								</motion.div>
							</NavItem>
						);
					else {
						return (
							<Link key={key} className='nav-item' href={link}>
								<motion.span
									onTap={toggle}
									variants={animation ? navItem_variants : undefined}>
									{item.title}
								</motion.span>
							</Link>
						);
					}
				})}
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
	const { baseBlack, red, blue, yellow } = getColors;
	const { toggleFill } = useGetToggleFill();

	const theme = useContext(ThemeContext);

	// const [isOpen, toggle] = useCycle(true, true);

	const circle_variants = {
		initial: {
			cx: toggleSettings.size / 2,
			cy: toggleSettings.size / 2,
			r: 30,
			transition: transitionSettings,
		},
	};

	const toggleDefaults = {
		stroke: '#ffffff',
		strokeWidth: '3px',
		strokeLinecap: 'round',
	};

	return (
		<motion.div
			className={`nav-toggle ${theme}`}
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
