'use client';

import Link from 'next/link';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { useCycle } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';

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

import {
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	ButtonGroup,
	useDisclosure,
} from '@chakra-ui/react';

import { basePath } from '@/hooks/use-basepath';
import { useRouter } from 'next/router';
import { useGetToggleFill } from '@/data/data';
import { MenuContext, ThemeContext } from '@/pages/_app';
import { PiCaretDown } from 'react-icons/pi';
import { enterDuration } from '../Curve/anim';
import Search from './search';
import SocialIcons, { FacebookIcon } from '../Footer/social-icon';

export default function Nav({}) {
	const router = useRouter();
	const smcTheme = useContext(ThemeContext);

	const className = router.route === '/' ? 'home' : 'inner';
	const { scrollY } = useScroll();
	const [navOpen, navShow] = useState(true);
	const [isToggleOpen, toggle] = useCycle(false, true);
	const { red, redShade1, blue, blueShade1, yellow, yellowShade1, baseBlack } =
		getColors;

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

	const navContainer_variants = {
		open: {
			opacity: 1,
			y: '0%',
			backgroundColor: getBackground(smcTheme),
			transition: {
				duration: 0.35,
				ease: [0.76, 0, 0.24, 1],
				backgroundColor: {
					delay: enterDuration - 0.75,
				},
				color: {
					delay: enterDuration - 0.75,
				},
			},
		},

		closed: {
			opacity: 0,
			y: '-100%',
			transition: {
				duration: 0.35,
				ease: [0.76, 0, 0.24, 1],
			},
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
									opacity: smcTheme === 'smc-default' ? 1 : 0,
								}}
								transition={{ delay: 0.75 }}
								src={`${basePath}/images/smc-logo.svg`}
								alt='SMC Logo'
							/>
							<motion.img
								animate={{
									opacity:
										smcTheme === 'smc-red' || smcTheme === 'smc-blue' ? 1 : 0,
								}}
								transition={{ delay: 0.75 }}
								src={`${basePath}/images/smc-logo-white.svg`}
								alt='SMC Logo White'
							/>
							<motion.img
								animate={{
									opacity: smcTheme === 'smc-yellow' ? 1 : 0,
								}}
								transition={{ delay: 0.75 }}
								src={`${basePath}/images/smc-logo-gray.svg`}
								alt='SMC Logo White'
							/>
						</figure>
					</Link>
					<MainNav />

					<Search />
				</div>
			</motion.div>
			<FloatingNav
				navOpen={navOpen}
				isToggleOpen={isToggleOpen}
				toggle={toggle}
			/>
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
	const { isOpen, onOpen, onClose } = useDisclosure();
	const menu = useContext(MenuContext);
	const { red, redShade1, blue, blueShade1, yellow, yellowShade1, baseBlack } =
		getColors;

	const smcTheme = useContext(ThemeContext);
	const getNavColor = () => {
		switch (smcTheme) {
			case 'smc-red':
				return '#ffffff';
			case 'smc-blue':
				return '#ffffff';
			case 'smc-yellow':
				return baseBlack;
			default:
				return '#ffffff';
		}
	};

	const nav_variants = {
		'smc-red': {
			color: '#ffffff',
		},

		'smc-blue': {
			color: '#ffffff',
		},

		'smc-yellow': {
			color: baseBlack,
		},

		'smc-default': {
			color: '#ffffff',
		},
	};

	useEffect(() => {
		let navItem = document.querySelectorAll('.nav-item');
		navItem.forEach((item) => {
			let height = 0;
			let dropdown = item.querySelector('.inner-dropdown');
			if (dropdown) {
				height = dropdown.offsetHeight;
				dropdown.classList.add('active');
			}

			let navDropdown = item.querySelector('.nav-dropdown');
			if (navDropdown) navDropdown.style.height = `${height}px`;
		});
	}, [menu]);

	const innerDropdown_variants = {
		'smc-default': {
			backgroundImage: `linear-gradient(90deg, ${redShade1}, ${red})`,
		},
		'smc-red': {
			backgroundImage: `linear-gradient(90deg, ${redShade1}, ${red})`,
		},
		'smc-blue': {
			backgroundImage: `linear-gradient(90deg, ${blueShade1}, ${blue})`,
		},
		'smc-yellow': {
			backgroundImage: `linear-gradient(90deg, ${yellow}, ${yellowShade1})`,
		},
	};
	return (
		<motion.nav
			animate={smcTheme}
			variants={nav_variants}
			transition={{
				color: {
					delay: enterDuration - 0.75,
				},
			}}
			className={`main-nav ${c && c} ${smcTheme}`}>
			{menu.length !== 0 &&
				menu.map((item_lvl1, index) => {
					let key = `menuItem_lvl1_${item_lvl1.id}`;

					let link = item_lvl1.page.length
						? `/${item_lvl1.page[0].slug}`
						: `${item_lvl1.url}`;
					let parent_slug = link;

					if (item_lvl1.children.length)
						return (
							<NavItem
								key={key}
								label={item_lvl1.title}
								link={link}
								animation={animation}
								toggle={toggle}
								navItem_variants={navItem_variants}>
								<motion.div
									className='nav-dropdown'
									initial={hover_animation.closed}
									variants={hover_animation}>
									{item_lvl1.children.map((item) => {
										let key = `menuItem_lvl2_${item.id}`;
										let link = parent_slug;
										link = item.page.length
											? (link += `/${item.page[0].slug}`)
											: `${item.url}`;

										if (link === 'social-media-popup')
											// let defaultheight = height;
											return (
												<div className='nav-dropdown-item' key={key}>
													<div>
														<Button onClick={onOpen} className='nav-popup'>
															{item.title}
														</Button>
														<Modal isOpen={isOpen} onClose={onClose} p={5}>
															<ModalOverlay />
															<ModalContent pb={4}>
																<ModalHeader className='heading-5'>
																	{item.title}
																</ModalHeader>
																<ModalCloseButton />
																<ModalBody>
																	<h3 className='heading-6'>
																		San Miguel Social Media
																	</h3>
																	<SocialIcons />
																	<h3 className='heading-6'>
																		Follow RSA on social media!
																	</h3>
																	<Flex gap={2} className='social-icon'>
																		<FacebookIcon
																			link={
																				'https://www.facebook.com/smcramonang/'
																			}
																		/>
																	</Flex>
																</ModalBody>
															</ModalContent>
														</Modal>
													</div>
												</div>
											);
										else
											return (
												<motion.div
													key={key}
													className='nav-dropdown-item'
													onMouseEnter={(event) => {
														let dropdownItem =
															event.target.closest('.nav-dropdown-item');
														dropdownItem
															.closest('.nav-item')
															.querySelectorAll('.inner-dropdown')
															.forEach((dropdown) => {
																dropdown.classList.remove('active');
															});

														let innerDropdown =
															dropdownItem.querySelector('.inner-dropdown');

														if (innerDropdown) {
															innerDropdown.classList.add('active');

															let navDropdown =
																innerDropdown.closest('.nav-dropdown');
															if (navDropdown) {
																navDropdown.style.height = `${innerDropdown.offsetHeight}px`;
															}
														} else {
															let navDropdown =
																dropdownItem.closest('.nav-dropdown');
															if (navDropdown) {
																navDropdown.style.height = `auto`;
															}
														}
													}}
													onMouseLeave={() => {
														// setHeight(innerDropdown.offsetHeight);
													}}>
													<motion.div onTap={toggle}>
														<Link href={link}>
															<b>{item.title}</b>
															{item.children.length !== 0 && <PiCaretDown />}
														</Link>
													</motion.div>

													{item.children.length !== 0 && (
														<motion.div
															animate={smcTheme}
															variants={innerDropdown_variants}
															className={`inner-dropdown`}
															transition={{
																delay: enterDuration,
															}}>
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
																		<div key={key}>
																			<motion.div onTap={toggle}>
																				<Link href={link}>{item.title}</Link>
																			</motion.div>

																			<ul className='inner-dropdown'>
																				{item.children.map((item) => {
																					let key = `menuItem_lvl4_${item.id}`;
																					let link = parent_slug;
																					link = item.page.length
																						? (link += `/${item.page[0].slug}`)
																						: `${item.url}`;

																					return (
																						<motion.li onTap={toggle} key={key}>
																							<Link href={link}>
																								{item.title}
																							</Link>
																						</motion.li>
																					);
																				})}
																			</ul>
																		</div>
																	);
																}
															})}
														</motion.div>
													)}
												</motion.div>
											);
									})}
								</motion.div>
							</NavItem>
						);
					else {
						return (
							<Link key={key} className='nav-item' href={link}>
								<motion.span
									onTap={toggle}
									variants={animation ? navItem_variants : undefined}>
									{item_lvl1.title}
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
	const [isToggleOpen, toggleOpen] = useCycle(false, true);

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
			animate={animation ? navItem_variants : isToggleOpen ? 'open' : 'closed'}>
			<motion.div onTap={toggle} style={{}}>
				<Link href={link}>{label}</Link>
			</motion.div>
			{children}
		</motion.div>
	);
}

function FloatingNav({ navOpen, isToggleOpen, toggle }) {
	const { baseBlack, red, blue, yellow } = getColors;
	const { toggleFill } = useGetToggleFill();

	const theme = useContext(ThemeContext);

	// const [isToggleOpen, toggle] = useCycle(true, true);

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
			<FloatingNavContent
				isToggleOpen={isToggleOpen}
				toggle={toggle}></FloatingNavContent>
			<motion.div
				className='nav-toggle-trigger'
				// initial={toggleTrigger_variants.closed}
				// animate={navOpen ? 'closed' : 'open'}
				// variants={toggleTrigger_variants}
				initial='initial'
				whileHover={isToggleOpen ? 'open' : 'hovered'}
				animate={isToggleOpen ? 'open' : !navOpen ? 'navopen' : 'initial'}
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

function FloatingNavContent({ isToggleOpen, toggle }) {
	const { red } = getColors;
	const windowDimensions = useWindowSize();
	const { x: mouseX, y: mouseY } = useMousePosition();

	useEffect(() => {
		if (isToggleOpen) document.querySelector('body').style.overflow = 'hidden';
		else document.querySelector('body').style.overflow = 'auto';
	}, [isToggleOpen]);

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
			x: `-${windowDimensions.height / 6}px`,
			y: `${windowDimensions.height / 6}px`,
			transition: transitionSettings,
		},
	};

	const circleBg_variants = {
		initial: {
			opacity: 0,
			r:
				windowDimensions.height > windowDimensions.width
					? windowDimensions.height * 1.5
					: windowDimensions.width * 1.5,
			fill: red,
			transition: transitionSettings,
		},
		open: {
			opacity: 1,
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
			animate={isToggleOpen ? 'open' : 'initial'}
			style={{
				overflow: isToggleOpen ? 'auto' : 'hidden',
				pointerEvents: isToggleOpen ? 'all' : 'none',
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
						variants={circleBg_variants}></motion.circle>
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
