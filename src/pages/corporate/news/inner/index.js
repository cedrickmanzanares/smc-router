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
import Section from '@/cms-components/Section/Section';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import { basePath } from '@/hooks/use-basepath';
import ImageSlider from '@/cms-components/ImageSlider/ImageSlider';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export default function NewsInner() {
	const { gray2, red } = getColors;

	const icon = {
		size: '1rem',
	};

	const slides = [
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'Lorem Ipsum Dolor',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-2.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
		{
			img: `${basePath}/images/Homepage-1/OurProjects/projects-1.png`,
			title: 'New Manila International Airport',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
		},
	];
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Curve>
				<PageBanner
					noBg={true}
					headingSize='heading-2'
					title={
						'SMC, TESDA partner to start training Filipino workers for jobs at NMIA, other major projects nationwide'
					}
					subtitle={'Mar 01, 2024'}
					subtitleClasses={'small-text'}></PageBanner>
				<Section>
					<div className='column'>
						<ImageSlider
							type='full'
							gradient={false}
							dots={true}
							arrows={false}
							captionPosition={'absolute'}
							slides={slides}
						/>
						<div className='text-content'>
							<p>
								San Miguel Corporation’s (SMC) infrastructure arm officially
								opened the new access ramp of the NAIA Expressway (NAIAx) at
								Tramo in Pasay City. This is expected to ease traffic in the
								area and provide seamless access to the country’s main
								international gateway and other areas.
							</p>
							<p>
								Speaking at its ceremonial opening on March 1, 2024, SMC
								President and CEO Ramon S. Ang explained the importance of the
								800-meter access ramp for motorists, particularly for those
								using EDSA southbound coming from Makati, or northbound, coming
								from the Entertainment City.
							</p>
							<p>
								“This is a great opportunity for many of our countrymen. The
								airport project and all our other projects, will not just
								generate jobs; more significantly, they will provide knowledge,
								skills, and technology transfer in construction, engineering,
								the operation of equipment and technologies, ground handling,
								aircraft maintenance, and many other fields,” said Ang.
							</p>
							<p>
								Public Works Secretary Manuel Bonoan led the inauguration of the
								new access ramp and credited the company for supporting the
								government’s efforts to build vital infrastructure to sustain
								the country’s economic growth.
							</p>
						</div>
						<ImageSlider
							adaptiveHeight={true}
							type='full'
							gradient={false}
							dots={false}
							slides={slides}
						/>
						<div className='text-content'>
							<p>
								“The Tramo access ramp has been in San Miguel’s drawing board
								for a long, long time because they knew it would enhance the
								efficiency of NAIA expressway, and improve the mobility of
								motorists going to the airport,” Bonoan said.
							</p>
							<p>
								Bonoan said further improvements on NAIAx are being studied by
								their agency, as grantor of the concession, in partnership with
								SMC, to improve the flow of traffic to airport terminals, given
								growing demand.
							</p>
							<p>
								“The Department of Public Works and Highways will always be
								there to support and implement these projects to improve traffic
								flow especially here in Metro Manila,” he added.
							</p>
							<p>
								For his part, Ang remained firm in the company’s commitment to
								work closely with the government, as it pursues infrastructure
								projects that benefit Filipinos.
							</p>
						</div>
						<ImageSlider
							adaptiveHeight={true}
							type='full'
							gradient={false}
							dots={false}
							slides={slides}
						/>
						<div className='text-content'>
							<p>
								“San Miguel will continue to pursue these vital infrastructure
								projects, in close coordination with our government, because of
								their benefits to our people and economy. Through these
								projects, we also create jobs, improve the mobility of goods and
								services, and make our cities and regions more primed for
								growth. All these serve to support and sustain our growing
								economy,” Ang said.
							</p>
							<p>
								The NAIA expressway is an 11-kilometer elevated toll road that
								connects the Skyway System to the three passengers terminals of
								NAIA, the country’s main international gateway, as well as to
								Pasay’s Entertainment City, Macapagal Boulevard, Sucat Road in
								Paranaque City, and the road network to Cavite province.
							</p>
						</div>
					</div>
				</Section>

				<Section sectionStyle={{ paddingTop: 0 }}>
					<motion.div className='page-controls'>
						<motion.div className='control prev'>
							<div className='control-details'>
								<div className='arrow'>
									<BsArrowLeftCircle size={'1.75rem'} />
								</div>
								<div>
									<p>
										<b>Previous Article</b>
									</p>
									<p className='label heading-5'>
										Massa at pulvinar vestibulum feugiat. Et ac proin tempor id
										nec.
									</p>
									<p className='date'>Sept. 20, 2023</p>
								</div>
							</div>
						</motion.div>

						<motion.div className='control next'>
							<div className='control-details'>
								<div className='arrow'>
									<BsArrowRightCircle size={'1.75rem'} />
								</div>
								<div>
									<p>
										<b>Next Article</b>
									</p>
									<p className='label heading-5'>
										Massa at pulvinar vestibulum feugiat. Et ac proin tempor id
										nec.
									</p>
									<p className='date'>Sept. 20, 2023</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</Section>
			</Curve>
		</>
	);
}
