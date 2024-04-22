'use client';

import { getColors } from '@/hooks/use-color';
import { MenuContext, ThemeContext } from '@/pages/_app';
import {
	animate,
	motion,
	useCycle,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { enterDuration } from '../anim';
import Link from 'next/link';
import { basePath } from '@/hooks/use-basepath';
import Search from './search';
import { PiPlusCircle } from 'react-icons/pi';
import { useGetToggleFill } from '@/data/data';
import {
	floatingNavContent_variants,
	path1_variants,
	path2_variants,
	path3_variants,
	toggleSettings,
	transitionSettings,
} from './anim';
import { useWindowSize } from '@uidotdev/usehooks';

const preload_variants = {
	open: {
		y: '-100%',
	},
};

export default function Nav({}) {
	const router = useRouter();
	const { smcThemeDelayed, smcTheme } = useContext(ThemeContext);
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

	const getNavColor = () => {
		switch (smcThemeDelayed) {
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

	const getBackground = (smcThemeDelayed) => {
		switch (smcThemeDelayed) {
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

	useEffect(() => {
		getBackground(smcThemeDelayed);
	}, [smcThemeDelayed]);

	const navContainer_variants = {
		initial: {},
		'smc-red': {},
		'smc-yellow': {},
		'smc-blue': {},
		'smc-default': {},
		preloadDone: {},
		open: {
			opacity: 1,
			y: '0%',

			transition: {
				duration: 0.35,
				ease: [0.76, 0, 0.24, 1],

				// color: {
				// 	delay: enterDuration - 0.75,
				// },
			},
		},

		closed: {
			opacity: 0,
			y: '-100%',

			transition: {
				duration: 0.35,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	};

	const getNavAnimation = () => {
		if (navOpen) return 'open';
		else return 'closed';
	};
	return (
		<motion.div
			initial='initial'
			animate={getNavAnimation()}
			className={`${className} nav-container ${smcThemeDelayed}`}>
			<motion.div
				className='container-fluid-width large'
				variants={navContainer_variants}
				style={{
					background: getBackground(smcThemeDelayed),
					color: getNavColor(smcThemeDelayed),
				}}>
				<motion.Link
					href='/'
					className='brand-logo'
					variants={preload_variants}>
					<figure>
						<motion.img
							animate={{
								opacity: smcThemeDelayed === 'smc-default' ? 1 : 0,
							}}
							transition={{ delay: 0.75 }}
							src={`${basePath}/images/smc-logo.svg`}
							alt='SMC Logo'
						/>
						<motion.img
							animate={{
								opacity:
									smcThemeDelayed === 'smc-red' ||
									smcThemeDelayed === 'smc-blue'
										? 1
										: 0,
							}}
							transition={{ delay: 0.75 }}
							src={`${basePath}/images/smc-logo-white.svg`}
							alt='SMC Logo White'
						/>
						<motion.img
							animate={{
								opacity: smcThemeDelayed === 'smc-yellow' ? 1 : 0,
							}}
							transition={{ delay: 0.75 }}
							src={`${basePath}/images/smc-logo-gray.svg`}
							alt='SMC Logo White'
						/>
					</figure>
				</motion.Link>

				<MainNav animation={false} />

				<Search />
			</motion.div>
			<FloatingNav
				navOpen={navOpen}
				isToggleOpen={isToggleOpen}
				toggle={toggle}
			/>
		</motion.div>
	);
}

// export function MainNav() {
// 	// const [menu, setMenu] = useState([]);
// 	const nav = useRef(null);

// 	// const token = useContext(TokenContext);

// 	useEffect(() => {
// 		if (!menu.length) {
// 			fetch(`https://smc-revamp-cms.c3-interactive.ph/api/v1/navigation`, {
// 				method: 'GET',
// 				headers: {
// 					'Content-Type': 'application/json',
// 					// Authorization: `Bearer ${token}`,
// 				},
// 			})
// 				.then((res) => {
// 					return res.json();
// 				})
// 				.then((data) => {
// 					console.log(data);
// 					let filteredMenu = data.filter((item) => item.page_is_published);
// 					setMenu((prev) => (prev = filteredMenu));
// 				});
// 		}
// 	}, []);

// 	return (
// 		<div className='main-nav'>
// 			{menu.map((item_lvl1, index) => {
// 				console.log(item_lvl1.navigations.length);
// 				return (
// 					<motion.div
// 						className='nav-item'
// 						key={`menuItem_lvl1_${item_lvl1.page_id}`}>
// 						<Link href={item_lvl1.page_slug}>{item_lvl1.page_title}</Link>
// 						{item_lvl1.navigations.length !== 0 && (
// 							<motion.div className='nav-dropdown'>
// 								<div className='container-fluid-width medium'>
// 									{item_lvl1.navigations.map((item_lvl2, index) => {
// 										return (
// 											<div>
// 												<p>
// 													<b>
// 														<a>{item_lvl2.page_title}</a>
// 													</b>
// 												</p>
// 												{item_lvl2.navigations.length !== 0 && (
// 													<div>
// 														{item_lvl2.navigations.map((item_lvl3, index) => {
// 															return <a href=''>{item_lvl3.page_title}</a>;
// 														})}
// 													</div>
// 												)}
// 											</div>
// 										);
// 									})}
// 								</div>
// 							</motion.div>
// 						)}
// 					</motion.div>
// 				);
// 			})}
// 		</div>
// 	);
// }

export function MainNav({ c, animation = true, toggle }) {
	const menu = useContext(MenuContext);
	const nav = useRef(null);

	const navItem_variants = {
		open: {
			y: '-100%',
		},
		initial: {
			backgroundColor: `rgba(0,0,0,0)`,
		},
		hover: {
			backgroundColor: `rgba(0,0,0,.1)`,
		},
	};

	const navDropdown_variants = {
		initial: {
			display: 'none',
		},
		hover: {
			display: 'block',
		},
	};

	return (
		<motion.div
			className={`${c} main-nav`}
			variants={
				animation && {
					initial: {
						y: 0,
						opacity: 0,
						transition: {
							color: {
								delay: enterDuration - 0.75,
							},
							// delayChildren: 0.5,
						},
					},
					open: {
						y: -25,
						opacity: 1,
						transition: {
							staggerChildren: 0.015,
							color: {
								delay: enterDuration - 0.75,
							},
							// delayChildren: 0.5,
						},
					},
				}
			}>
			{menu.map((item_lvl1, index) => {
				let link = item_lvl1.page.length
					? `/${item_lvl1.page[0].slug}`
					: `${item_lvl1.url}`;

				let parent_slug = link;
				return (
					<motion.div
						className='nav-item'
						variants={navItem_variants}
						whileHover='hover'
						key={`menuItem_lvl1_${item_lvl1.id}`}>
						<Link href={link} onClick={toggle}>
							{item_lvl1.title}
						</Link>
						{item_lvl1.children.length !== 0 && (
							<motion.div
								className='nav-dropdown'
								variants={navDropdown_variants}>
								<div className='container-fluid-width medium'>
									{item_lvl1.children.map((item_lvl2, index) => {
										let link = parent_slug;
										link = item_lvl2.url
											? item_lvl2.url
											: (link += '/' + item_lvl2.page[0].slug);

										let columnClass =
											item_lvl2.children.length > 4 ? 'column-2' : '';

										return (
											<div
												className='inner-dropdown'
												key={`menuItem_lvl2_${item_lvl2.id}`}>
												<motion.b
													initial='initial'
													whileHover='hover'
													className='inner-dropdown-link'>
													<Link href={link} onClick={toggle}>
														{item_lvl2.title}
													</Link>
													<motion.span
														className='line'
														variants={{
															initial: {
																width: '0%',
															},
															hover: {
																width: '100%',
															},
														}}></motion.span>
												</motion.b>

												{item_lvl2.children.length !== 0 && (
													<div className={`${columnClass} inner_lvl2-dropdown`}>
														{item_lvl2.children.map((item_lvl3, index) => {
															let link = parent_slug;
															link = item_lvl3.url
																? item_lvl3.url
																: (link += '/' + item_lvl3.page[0].slug);

															return (
																<div key={`menuItem_lvl3_${item_lvl3.id}`}>
																	<div className='inner_lvl2-dropdown-link'>
																		<Link href={link} onClick={toggle}>
																			{item_lvl3.title}
																		</Link>

																		{item_lvl3.children.length !== 0 && (
																			<button
																				onClick={(event) => {
																					event.target.classList.toggle(
																						'active'
																					);

																					let target = event.target.closest(
																						'.inner_lvl2-dropdown-link'
																					).nextSibling;

																					if (
																						event.target.classList.contains(
																							'active'
																						)
																					)
																						animate(target, {
																							height: 'auto',
																						});
																					else
																						animate(target, {
																							height: '0px',
																						});
																				}}>
																				<PiPlusCircle fontSize={'1.25rem'} />
																			</button>
																		)}
																	</div>
																	{item_lvl3.children.length !== 0 && (
																		<div
																			className={`inner_lvl3-dropdown`}
																			style={{
																				height: 0,
																				listStyle: 'circle',
																				breakInside: 'avoid-column',
																				overflow: 'hidden',
																			}}>
																			{item_lvl3.children.length !== 0 && (
																				<motion.ul>
																					{item_lvl3.children.map(
																						(item_lvl4, index) => {
																							let link = parent_slug;
																							link = item_lvl4.url
																								? item_lvl4.url
																								: (link +=
																										'/' +
																										item_lvl4.page[0].slug);
																							return (
																								<li
																									key={`menuItem_lvl4_${item_lvl4.id}`}>
																									<Link
																										href={link}
																										onClick={toggle}>
																										{item_lvl4.title}
																									</Link>
																								</li>
																							);
																						}
																					)}
																				</motion.ul>
																			)}
																		</div>
																	)}
																</div>
															);
														})}
													</div>
												)}
											</div>
										);
									})}
								</div>
							</motion.div>
						)}
					</motion.div>
				);
			})}
		</motion.div>
	);
}

function FloatingNav({ navOpen, isToggleOpen, toggle }) {
	const { baseBlack, red, blue, yellow } = getColors;
	const { toggleFill } = useGetToggleFill();
	const toggleNav = useRef();
	const { smcTheme, smcThemeDelayed } = useContext(ThemeContext);

	// const [isToggleOpen, toggle] = useCycle(true, true);
	const getNavColor = () => {
		switch (smcThemeDelayed) {
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

	const getBackground = (smcThemeDelayed) => {
		switch (smcThemeDelayed) {
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
			className={`nav-toggle ${smcTheme}`}
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
	const toggleNav = useRef();

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
			x: `-${windowDimensions.height / 20}px`,
			y: `${windowDimensions.height / 20}px`,
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

	function scroll(event) {
		toggleNav.current.scrollTop += event.deltaY / 3;
	}

	useEffect(() => {
		toggleNav.current.removeEventListener('wheel', scroll);
		toggleNav.current.addEventListener('wheel', scroll);
	}, [toggleNav]);

	return (
		<motion.div
			ref={toggleNav}
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