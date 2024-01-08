import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion } from 'framer-motion';

import { getColors } from '@/hooks/use-color';

import Link from 'next/link';

import { ImFacebook, ImLinkedin2, ImSphere, ImYoutube } from 'react-icons/im';
import { LuInstagram } from 'react-icons/lu';

import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';

export default function NewsInner() {
	const { gray2, red } = getColors;

	const icon = {
		size: '1rem',
	};
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Curve>
				<div className='section-content '>
					<div className='article-content'>
						<div className='article-social'>
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
									<ImFacebook size={icon.size} />
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
									<LuInstagram size={icon.size} />
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
									<ImYoutube size={icon.size} />
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
									<ImLinkedin2 size={icon.size} />
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
									<ImSphere size={icon.size} />
								</Link>
							</motion.div>
						</div>
						<h1 className='heading-2'>
							SMC, TESDA partner to start training Filipino workers for jobs at
							NMIA, other major projects nationwide
						</h1>

						<h1 className='text-3xl font-bold underline'>Hello world!</h1>

						<Accordion>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box as='span' flex='1' textAlign='left'>
											Section 1 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box as='span' flex='1' textAlign='left'>
											Section 2 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						<img className='feature' src={'/images/Homepage-1/1.png'} />
						<p>
							San Miguel Corporation (SMC) and the Technical Education Skills
							and Development Authority (TESDA) are launching a skills training
							program that will enable a greater number of Filipinos to
							participate in opportunities at its New Manila International
							Airport (NMIA) project as well as its various strategic
							initiatives across the country.
						</p>

						<p className='heading-5 popout'>
							"San Miguel Corporation (SMC) and the Technical Education Skills
							and Development Authority (TESDA) are launching a skills training
							program that will enable a greater number of Filipinos to
							participate in opportunities at its New Manila International
							Airport (NMIA) project as well as its various strategic
							initiatives across the country."
						</p>
						<p>
							San Miguel Corporation (SMC) and the Technical Education Skills
							and Development Authority (TESDA) are launching a skills training
							program that will enable a greater number of Filipinos to
							participate in opportunities at its New Manila International
							Airport (NMIA) project as well as its various strategic
							initiatives across the country.
						</p>
						<div className='popout'>
							<p className='heading-4'>Highligt Content</p>
							<p>
								San Miguel Corporation (SMC) and the Technical Education Skills
								and Development Authority (TESDA) are launching a skills
								training program that will enable a greater number of Filipinos
								to participate in opportunities at its New Manila International
								Airport (NMIA) project as well as its various strategic
								initiatives across the country.
							</p>
							<p>
								San Miguel Corporation (SMC) and the Technical Education Skills
								and Development Authority (TESDA) are launching a skills
								training program that will enable a greater number of Filipinos
								to participate in opportunities at its New Manila International
								Airport (NMIA) project as well as its various strategic
								initiatives across the country.
							</p>
						</div>
						<p>
							San Miguel Corporation (SMC) and the Technical Education Skills
							and Development Authority (TESDA) are launching a skills training
							program that will enable a greater number of Filipinos to
							participate in opportunities at its New Manila International
							Airport (NMIA) project as well as its various strategic
							initiatives across the country.
						</p>
					</div>
				</div>
			</Curve>
		</>
	);
}
