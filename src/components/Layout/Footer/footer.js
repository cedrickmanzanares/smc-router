'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

import {
	ImFacebook,
	ImYoutube,
	ImLinkedin2,
	ImSphere,
	ImCircleRight,
} from 'react-icons/im';

import { getColors } from '@/hooks/use-color';
import { LuInstagram } from 'react-icons/lu';

import Modal from '@/components/modal/modal';

import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';

import { useRef } from 'react';
import Image from 'next/image';
import { basePath } from '@/hooks/use-basepath';

export default function Footer() {
	const year = new Date().getFullYear();
	const { baseBlack, gray2, red } = getColors;
	const footerIcon = {
		size: '1.75rem',
		color: baseBlack,
	};

	const footer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: footer,
		offset: ['start end', 'start 0.5'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

	return (
		<footer className='section-content main-footer' ref={footer}>
			<motion.div className='container-fluid-width medium' style={{ y: y }}>
				<div className='footer-logo'>
					<figure>
						<img
							src={`${basePath}/images/footer-other-logo.png`}
							alt={"World's Best Companies 2023, World's Best Employers 2023"}
						/>
					</figure>
					<Link href='/' className='brand-logo'>
						<figure>
							<img
								src={`${basePath}/images/escudo-gray.png`}
								width={95}
								height={147}
								alt={'SMC Escudo'}
							/>
						</figure>
					</Link>
					<motion.div
						className='social-icons'
						initial={{
							backgroundColor: gray2,
						}}
						whileHover={{
							scale: 1.2,
							color: '#ffffff',
							backgroundColor: '#3975ea',
						}}
						whileTap={{ scale: 0.9 }}>
						<Link href='/'>
							<ImFacebook size={footerIcon.size} />
						</Link>
					</motion.div>
					<motion.div
						className='social-icons'
						initial={{
							backgroundImage: `linear-gradient(45deg, ${gray2}, ${gray2})`,
						}}
						whileHover={{
							scale: 1.2,
							color: '#ffffff',
							backgroundImage:
								'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
						}}
						whileTap={{ scale: 0.9 }}>
						<Link href='/'>
							<LuInstagram size={footerIcon.size} />
						</Link>
					</motion.div>

					<motion.div
						className='social-icons'
						initial={{
							backgroundColor: gray2,
						}}
						whileHover={{
							scale: 1.2,
							color: '#ffffff',
							backgroundColor: '#ea3324',
						}}
						whileTap={{ scale: 0.9 }}>
						<Link href='/'>
							<ImYoutube size={footerIcon.size} />
						</Link>
					</motion.div>

					<motion.div
						className='social-icons'
						initial={{
							backgroundColor: gray2,
						}}
						whileHover={{
							scale: 1.2,
							color: '#ffffff',
							backgroundColor: '#2a6496',
						}}
						whileTap={{ scale: 0.9 }}>
						<Link href='/'>
							<ImLinkedin2 size={footerIcon.size} />
						</Link>
					</motion.div>

					<motion.div
						className='social-icons'
						initial={{
							backgroundColor: gray2,
						}}
						whileHover={{
							scale: 1.2,
							color: '#ffffff',
							backgroundColor: red,
						}}
						whileTap={{ scale: 0.9 }}>
						<Link href='/'>
							<ImSphere size={footerIcon.size} />
						</Link>
					</motion.div>

					<Modal
						header={{
							label: 'Subsidiary Websites',
						}}
						trigger={{
							className:
								'size-limit push-right btn btn-bordered btn-gray3 btn-clear text-center uppercase',
							label: 'View subsidiary websites',
						}}>
						<a
							className='block'
							href='https://www.bankcom.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Bank of Commerce
						</a>
						<a
							className='block'
							href='https://www.eaglecement.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Eagle Cement
						</a>
						<a
							className='block'
							href='https://www.petron.com/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Petron Corp.
						</a>
						<a
							className='block'
							href='https://www.ginebrasanmiguel.com/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Ginebra San Miguel
						</a>
						<a
							className='block'
							href='https://www.sanmiguelproperties.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Properties, Inc
						</a>
						<a
							className='block'
							href='https://www.sanmiguelfoods.com/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Foods
						</a>
						<a
							className='block'
							href='https://greatfoodsolutions.com/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Great Food Solutions
						</a>
						<a
							className='block'
							href='https://homefoodie.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Home Foodie
						</a>
						<a
							className='block'
							href='https://magnoliachicken.com/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Magnolia Chicken
						</a>
						<a
							className='block'
							href='https://www.monterey.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Monterey Foods Corp.
						</a>
						<a
							className='block'
							href='https://www.ncc.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Northern Cement
						</a>
						<a
							className='block'
							href='https://petrogen.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Petrogen Insurance Corporation
						</a>
						<a
							className='block'
							href='https://www.sanmiguelbrewery.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Brewery Inc.
						</a>
						<a
							className='block'
							href='https://www.smfb.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Food and Beverage
						</a>
						<a
							className='block'
							href='https://www.facebook.com/redhorsebeer/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							Red Horse Beer
						</a>
						<a
							className='block'
							href='https://www.facebook.com/sanmiguel.hk'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Brewery Hong Kong
						</a>
						<a
							className='block'
							href='https://sanmiguelbrewery.com'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Brewing International Ltd.
						</a>
						<a
							className='block'
							href='https://www.sanmiguelmart.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Mart
						</a>
						<a
							className='block'
							href='https://www.facebook.com/SanMiguelPalePilsen/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Pale Pilsen
						</a>
						<a
							className='block'
							href='https://www.facebook.com/sanmiglightph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Mig Light
						</a>
						<a
							className='block'
							href='https://www.facebook.com/sanmiguelsuperdrybeer/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							San Miguel Super Dry
						</a>
						<a
							className='block'
							href='https://smcstocktransfer.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							SMC Stock Transfer Service Corporation
						</a>
						<a
							className='block'
							href='https://www.smcglobalpower.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							SMC Global Power Holdings Corp
						</a>
						<a
							className='block'
							href='https://www.sltc.com.ph/'
							target='_blank'
							without='true'
							rel='noreferrer'>
							South Luzon Tollway Corporation
						</a>
					</Modal>
				</div>

				<div className='footer-links'>
					<Accordion
						allowToggle={true}
						style={{ display: 'flex', gap: '2rem' }}>
						<div className='footer-links-col'>
							<AccordionItem className='accordion-item'>
								<AccordionButton>
									<div className='accordion-header'>
										<Box as='span' flex='1' textAlign='left'>
											Corporate Head Office
										</Box>
										<AccordionIcon />
									</div>
								</AccordionButton>
								<AccordionPanel>
									<p className='small'>
										SAN MIGUEL CORPORATION <br />
										40 San Miguel Avenue, Mandaluyong City
										<br />
										1550 Metro Manila, Philippines
										<br />
										P.O. Box 271 Manila Central Post Office
										<br />
										Telephone: (+632) 8-632-3000
										<br />
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className='accordion-item'>
								<AccordionButton>
									<div className='accordion-header'>
										<Box as='span' flex='1' textAlign='left'>
											San Miguel Customer Care Hotline
										</Box>
										<AccordionIcon />
									</div>
								</AccordionButton>
								<AccordionPanel>
									<p className='small'>
										Telephone: (+632) 8-632-2000
										<br />
										SAN MIGUEL CORPORATION
										<br />
										Fax: (+632) 8-632-3299 routing code 2005
										<br />
										Toll Free 1-800-1888-7621
										<br />
										customercare@sanmiguel.com.ph
										<br />
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className='accordion-item'>
								<AccordionButton>
									<div className='accordion-header'>
										<Box as='span' flex='1' textAlign='left'>
											Shareholder Services and Assistance
										</Box>
										<AccordionIcon />
									</div>
								</AccordionButton>
								<AccordionPanel>
									<p className='small'>
										SMC STOCK TRANSFER SERVICE CORPORATION
										<br />
										40 San Miguel Avenue, Mandaluyong City
										<br />
										1550 Metro Manila, Philippines
										<br />
										P.O. Box 271 Manila Central Post Office
										<br />
										Telephone: (+632) 8-632-3000
										<br />
										smc_stsc@sanmiguel.com.ph
										<br />
									</p>
								</AccordionPanel>
							</AccordionItem>
						</div>
						<div className='footer-links-col'>
							<AccordionItem className='accordion-item'>
								<AccordionButton>
									<div className='accordion-header'>
										<Box as='span' flex='1' textAlign='left'>
											Whistleblowing Office
										</Box>
										<AccordionIcon />
									</div>
								</AccordionButton>
								<AccordionPanel>
									<p className='small'>
										ATTY. NOEL D. BALSICAS
										<br />
										WHISTLEBLOWER RELATIONS
										<br />
										OFFICER (WRO)
										<br />
										Telephone: 86322-WRO
										<br />
										[86322-976]
										<br />
										Mobile: 09177-WRO-SMC
										<br />
										[0917-7976-762]
										<br />
										smcwhistleblower@sanmiguel.com.ph
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className='accordion-item'>
								<AccordionButton>
									<div className='accordion-header'>
										<Box as='span' flex='1' textAlign='left'>
											Investor Relations
										</Box>
										<AccordionIcon />
									</div>
								</AccordionButton>
								<AccordionPanel>
									<p className='small'>
										SAN MIGUEL CORPORATION
										<br />
										SMCInvestorRelations@sanmiguel.com.ph
										<br />
										Telephone: (+632) 8-632-3752
										<br />
									</p>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem className='accordion-item'>
								<AccordionButton>
									<div className='accordion-header'>
										<Box as='span' flex='1' textAlign='left'>
											Data Privacy and Security Office
										</Box>
										<AccordionIcon />
									</div>
								</AccordionButton>
								<AccordionPanel>
									<div className='privacy-flex'>
										<img
											src={`${basePath}/images/SMC_SOR.png`}
											alt='Seal of Registration'
											className='dpo'
											data-filename='SMC_SOR.png'
										/>
										<p className='small'>
											Telephone: (+632) 8-632-3007
											<br />
											Email: dpo@sanmiguel.com.ph
											<br />
											Click <a href='/page/npc-seal'>here</a> to view our
											<br />
											NPC Seal of Registration
										</p>
									</div>
								</AccordionPanel>
							</AccordionItem>
						</div>
					</Accordion>

					{/* <Accordion title='Corporate Head Office' className='footer-item'>
						<p>
							<small>
								<b>SAN MIGUEL CORPORATION</b> <br />
								40 San Miguel Avenue, Mandaluyong City
								<br />
								1550 Metro Manila, Philippines
								<br />
								P.O. Box 271 Manila Central Post Office
								<br />
								Telephone: (+632) 8-632-3000
								<br />
							</small>
						</p>
					</Accordion>
					
					<Accordion
						title='Shareholder Services and Assistance'
						className='footer-item'>
						<p>
							<small>
								<b>SMC STOCK TRANSFER SERVICE CORPORATION</b>
								<br />
								40 San Miguel Avenue, Mandaluyong City
								<br />
								1550 Metro Manila, Philippines
								<br />
								P.O. Box 271 Manila Central Post Office
								<br />
								Telephone: (+632) 8-632-3000
								<br />
								smc_stsc@sanmiguel.com.ph
								<br />
							</small>
						</p>
					</Accordion>
					<Accordion title='Whistleblowing Office' className='footer-item'>
						<p>
							<small>
								<b>ATTY. NOEL D. BALSICAS</b>
								<br />
								<span style={{ textWrap: 'balance' }}>
									WHISTLEBLOWER RELATIONS OFFICER (WRO)
								</span>
								<br />
								Telephone: 86322-WRO
								<br />
								[86322-976]
								<br />
								Mobile: 09177-WRO-SMC
								<br />
								[0917-7976-762]
								<br />
								smcwhistleblower@sanmiguel.com.ph
							</small>
						</p>
					</Accordion>
					<Accordion title='Investor Relations' className='footer-item'>
						<p>
							<small>
								<b>SAN MIGUEL CORPORATION</b>
								<br />
								SMCInvestorRelations@sanmiguel.com.ph
								<br />
								Telephone: (+632) 8-632-3752
								<br />
							</small>
						</p>
					</Accordion>
					<Accordion
						title='Data Privacy and Security Office'
						className='footer-item'>
						<div className='privacy-flex'>
							<img
								src='https://www.sanmiguel.com.ph/storage/images/extra/SMC_SOR.png'
								alt='Seal of Registration'
								data-filename='SMC_SOR.png'
							/>
							<p>
								<small>
									Telephone: (+632) 8-632-3007
									<br />
									Email: dpo@sanmiguel.com.ph
									<br />
									Click <a href='/page/npc-seal'>here</a> to view our
									<br />
									NPC Seal of Registration
								</small>
							</p>
						</div>
					</Accordion> */}
				</div>

				<p className='copy text-center small'>
					Copyright &copy; {year} San Miguel Corporation. All Rights Reserved.
				</p>
			</motion.div>
		</footer>
	);
}
