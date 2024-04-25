import Head from 'next/head';
import Fade from '@/components/Layout/Fade';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import Button from '@/components/button/button';
import { NextBusinesses, PrevBusinesses } from '../our-businesses/inner';
import Column from '@/cms-components/Column/column';

export default function FoodAndBeverages() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<meta
					http-equiv='Content-Security-Policy'
					content='frame-src youtube.com www.youtube.com'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Fade>
				<PageBanner title={'Infrastructure'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<Column>
							<p>
								SMC Infrastructure, our infrastructure arm handles the
								construction, management, and operation of the country’s largest
								infrastructure network. Its current portfolio includes: the
								Tarlac-Pangasinan-La Union Expressway (TPLEX), the Southern
								Tagalog Arterial Road (STAR), South Luzon Expressway (SLEX), the
								Skyway System, and the NAIA Expressway (NAIAX), Boracay Airport,
								the MRT-7 rail and road project, and the Bulacan Bulk Water
								Supply Project.
							</p>

							<h2 className='heading-2'>
								Tarlac-Pangasinan-la Union Expressway (TPLEX)
							</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-1.png`} />
							</p>
							<p>
								The <b>Tarlac-Pangasinan-La Union Expressway (TPLEX)</b> is an
								89.21-km toll road that runs from Tarlac to La Union. It has
								opened the Rosario segment in July 2020. TPLEX has conveniently
								reduced travel time from Metro Manila to the provinces in
								Northern Luzon which also made the transport of fresh produce
								from the mountains to the city, from farms to tables, faster and
								easier. This expressway has also been the gateway to beautiful
								destinations up north.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>Skyway System</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-2.png`} />
							</p>
							<p>
								<b>Skyway Stage 1</b> consists of a 9.3-km elevated road that
								runs from Bicutan to the Makati Central Business District; as
								well as the rehabilitation of the 13.43-km section (at-grade) of
								the South Luzon Expressway from Alabang to Magallanes.{' '}
								<b>Skyway Stage 2</b> is the 6.86-km elevated expressway that
								consists of six lanes in the Bicutan-to-Sucat section, and four
								lanes in the Sucat-to-Alabang section, with ramps leading to the
								South Luzon Expressway.
							</p>
							<p>
								Another major infrastructure initiative, which started
								operations in December 2020, is the Skyway Stage 3 project—a
								17.93-km, six-lane elevated expressway that extends the existing
								elevated Skyway from Buendia, Makati to Balintawak, Quezon City
								and will link the South Luzon Expressway (SLEX) to NLEX. The
								project aims to decongest major thoroughfares, including EDSA,
								while creating new transport routes.
							</p>
							<p>
								Currently, the following access points are open: Buendia SB Exit
								& NB Entry, Quirino NB Exit, Plaza Dilao SB Entry, E. Rodriguez
								SB Exit, Quezon Ave SB Exit & Entry, Quezon Ave NB Exit & Entry,
								A. Bonifacio NB Exit, NLEX NB Exit and NLEX SB Entry.
							</p>
							<p>
								Another plan of expansion is the Metro Manila Expressway or
								Skyway Stage 4, an 80-km mixed elevated and at-grade toll road
								that will connect the existing Skyway system starting from the
								FTI section all the way to Bulacan. This 3-phase highway aims to
								reduce traffic in the eastern part of Metro Manila.
							</p>
							<p>
								The Skyway Extension project is an additional 4-km elevated
								expressway which connects the existing Skyway system to Susana
								Heights, Muntinlupa. This toll road will also provide additional
								lanes to Sucat, and is expected to be completed by 2021.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>
								Southern Tagalog Arterial Road (STAR)
							</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-3.png`} />
							</p>
							<p>
								The Southern Tagalog Arterial Road (STAR) is a 41.9-km highway
								that stretches out from Sto. Tomas, Batangas all the way to
								Batangas City. Aside from connecting cities and towns of
								Batangas, STAR has become a venue exhibiting the province’s
								arts, culture and heritage. In addition, it also gave way to a
								more convenient movement of goods from the port all the way to
								Mindoro and other parts of Visayas
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>South Luzon Expressway (SLEX)</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-4.png`} />
							</p>
							<p>
								The South Luzon Expressway (SLEX), is a 36-km long highway, with
								toll roads 1, 2 and 3, that runs from Alabang to Sto. Tomas,
								Batangas. It has 13 access points connecting several commercial
								and residential areas in the Greater Manila and the provinces of
								Laguna, Cavite and Batangas.
							</p>
							<p>
								The SLEX toll road 4 (TR4), which has broken ground in 2019,
								will extend SLEX from Sto. Tomas, Batangas all the way to
								Lucena, Quezon and is expected to be completed in the next 36
								months.
							</p>
							<p>
								The SLEX toll road 5 (TR5), a 420-km toll road expansion, will
								extend equal opportunities of economic growth to the region of
								Bicol.
							</p>
							<p>
								Being the gateway to the southernmost part of Luzon, SLEX and
								its expansion provide faster access to the provinces of Laguna,
								Batangas and Quezon.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>NAIA Expressway (NAIAX)</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-5.png`} />
							</p>
							<p>
								The NAIA Expressway or (NAIAX), an important component of the
								company’s infrastructure portfolio, is a 5.4-km, four-lane
								elevated expressway that connects the Skyway system to NAIA
								airport terminals 1, 2, & 3 and the Entertainment City. Through
								NAIAX, passengers are handed the luxury of a stress-free travel,
								be it by land or by air.
							</p>
						</Column>
						<Column>
							<h2 className='heading02'>Pasig River Expressway (PAREX)</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-6.png`} />
							</p>
							<p>
								The Pasig River Expressway (PAREX) is a 19.37-km, 6-lane
								elevated expressway that will connect the Radial Road 10 (R10)
								in Manila and the Circumferential Road 6 (C6) through the South
								East Metro Manila Expressway (SEMME), a section of Skyway Stage
								4. PAREX aims to solve traffic congestion in the metropolis by
								establishing a direct link between the western and eastern
								cities of Metro Manila.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>Autosweep RFID</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-7.png`} />
							</p>
							<p>
								Autosweep RFID commenced its formal operations in 2016 for a
								faster and more effective electronic toll collection program for
								all SMC tollways; it has also provided IT systems support and
								services.
							</p>
							<p>
								In 4 quick steps, motorists, both personal and business
								accounts, can conveniently apply for their own RFID and enjoy a
								more hassle-free drive.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>Metro Rail Transit 7 (MRT-7)</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-8.png`} />
							</p>
							<p>
								SMC Infrastructure has also ventured early on in other projects
								aside from the toll road business. The Metro Rail Transit 7
								(MRT-7) is a 22-km planned rail and road project starting in
								North Avenue, Quezon City and ending in San Jose del Monte,
								Bulacan with 14 stations, which can accommodate up to 650,000
								passengers daily.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>
								Bulacan Bulk Water Supply System Project (BBWSSP)
							</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-9.png`} />
							</p>
							<p>
								The Bulacan Bulk Water Supply System Project is a treatment
								facility with 3 stages – it will provide affordable and potable
								bulk water to the 24 municipalities of Bulacan to meet the
								increasing water demand of its residents. With water being one
								of life’s most basic essentials, Bulacan Bulk Water goes beyond
								providing Bulacenos easier access to the kind of water they
								deserve, by also giving them a better quality of life.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>Manila North Harbor Port</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-10.png`} />
							</p>
							<p>
								Through concessionaire, SMC also initiated the rehabilitation of
								the Manila North Harbor Port, the country’s busiest port. Aside
								from cargo handling and other ancillary services, North Port
								also provides passengers first-class service, making their
								safety and security from and to the vessels the top priority.{' '}
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>Boracay Airport</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-11.png`} />
							</p>
							<p>
								SMC Infrastructure took the lead in overseeing the modernization
								of the Boracay Airport, the current and long-term developments
								include the construction of an international airport passenger
								terminal and the extension of the existing runway to better
								serve bigger aircrafts and to keep passengers happy and
								satisfied.
							</p>
						</Column>
						<Column>
							<h2 className='heading-2'>
								New Manila International Airport (NMIA)
							</h2>
							<p>
								<img src={`${basePath}/images/OurBusinesses/infra-12.png`} />
							</p>
							<p>
								The New Manila International Airport (NMIA) project is a
								game-changer for the Philippines, a world class airport that
								will be developed in phases, with an initial capacity of 35
								million passengers annually, and a target of 100 million
								passengers per year, once fully-complete.{' '}
							</p>

							<p>
								<Button
									href='https://www.sanmiguel.com.ph/page/san-miguel-aerocity-inc'
									without='true'
									rel='noreferrer'
									target='_blank'
									link='/our-business/inner'
									className={'pri-btn btn-bordered'}>
									Read More
								</Button>
							</p>
						</Column>
					</div>
					<div className='column bussinesses-opportunities-column sticky'>
						<div className='text-content'>
							<h3 className='heading-5'>Business Opportunities</h3>
							<div className='opportunities-item small-text'>
								<p className='small-text'>
									<b>SAN MIGUEL GLOBAL POWER&nbsp;</b>
									<br />
									Website:{' '}
									<a href='https://smcglobalpower.com.ph/' target='_blank'>
										smcglobalpower.com.ph
									</a>
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p className='small-text'>
									Fax No.: <br />
									<a href='tel: (+632) 8-702-4602' target='_blank'>
										(+632) 8-702-4602
									</a>
									<br />
									Hotline Number:
									<br />
									<a href='tel: (+632) 8-702-4601' target='_blank'>
										(+632) 8-702-4601
									</a>
									,{' '}
									<a href='tel: 8-702-4500' target='_blank'>
										8-702-4500
									</a>
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p className='small-text'>
									<b>Jeciel B. Campos</b> <br />
									Head, Sales & Marketing – Wholesale
									<br />
									Email: sales@smcgph.sanmiguel.com.ph
								</p>
								<p className='small-text'>
									<b>Gonzalo B. Julian</b>
									<br />
									Head, Sales & Marketing - Retail
									<br />
									Email: ressales@smcgph.sanmiguel.com.ph
								</p>
							</div>
						</div>
					</div>
				</Section>

				<Section sectionStyle={{ paddingTop: 0 }}>
					<motion.div className='page-controls'>
						<PrevBusinesses />
						<NextBusinesses />
					</motion.div>
				</Section>
			</Fade>
		</>
	);
}
