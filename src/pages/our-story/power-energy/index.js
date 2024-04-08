import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import Button from '@/components/button/button';

export default function FoodAndBeverages() {
	const parallaxColumn = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: parallaxColumn,
		offset: ['start end', 'end start'],
	});

	const section2 = useRef(null);
	const { scrollYProgress: section_2_scroll } = useScroll({
		target: section2,
		offset: ['start end', 'end start'],
	});

	const { height } = dimension;

	const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		var base_url = window.location.origin;
		console.log(base_url);

		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', resize);

		resize();

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

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
				<PageBanner title={'Power & Energy'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<h2 className='heading-2'>San Miguel Global Power</h2>
							<img src={`${basePath}/images/OurBusinesses/packaging.jpg`} />
							<p className='heading-5'>
								San Miguel Global Power (SMGP) is one of the largest power
								companies in the Philippines. Serving as the energy arm of San
								Miguel Corporation (SMC), San Miguel Global Power plays a
								pivotal role in serving as one of the biggest power suppliers in
								the country through its combined installed capacity of 4,697 MW.
							</p>

							<p>
								According to the Department of Energy EPIRA Report 2020, the
								power the Company produces is approximately 20% of the National
								Grid, 27% of the Luzon Grid, and 8% of the Mindanao Grid (as of
								December 31, 2020).
							</p>

							<p>
								Aside from leading the power generation industry, San Miguel
								Global Power is also a strong player in the industry of power
								distribution and battery energy storage in the Philippines. The
								Company continues to venture in innovations and technologies
								that will change the Philippine energy mix and help the country
								achieve a carbon-neutral economy.
							</p>

							<p>
								<b>Power Generation</b>
							</p>
							<p>
								San Miguel Global Power fulfills its mission of delivering
								competitive, affordable, and reliable power through its diverse,
								multi-fuel power portfolio, comprised of natural gas, coal, and
								renewable energy such as hydroelectric.
							</p>

							<p>
								Through its Independent Power Producer Administration (IPPA)
								agreements with the Power Sector Assets and Liabilities
								Management Corporation (PSALM), the Company administers the
								output produced by the following power plants: the 1,000 MW Sual
								Coal-fired Thermal Power Plant in Pangasinan; the 345 MW San
								Roque Hydroelectric Power Plant in Pangasinan; and the 1,200 MW
								Ilijan Natural Gas-fired Combined Cycle Power Plant in Batangas.
							</p>

							<p>
								San Miguel Global Power also provides power supply to the
								country through its whollyowned Independent Power Producer (IPP)
								assets, which includes the 1,019 MW Masinloc Power Plant in
								Zambales with Supercritical Technology; the 600 MW Limay Power
								Plant in Bataan with Circulating Fluidized Bed Technology; and
								the 300 MW Malita Power Plant in Davao Occidental with
								Circulating Fluidized Bed Technology.
							</p>

							<p>
								Additionally, the Company is in a joint-venture with Korea Water
								Resources Corp. (K-Water) for the operation and maintenance of
								the 218-MW Angat Hydroelectric Power Plant in Bulacan.
							</p>

							<p>
								Currently, San Miguel Global Power is materializing its growth
								strategy through the expansion of the Ilijan Power Plant and the
								construction of the Unit 4 of the Masinloc Power Plant, among
								others. These projects, along with other expansion plans in the
								pipeline, will enable the Company to maintain its lead in the
								power industry and further help the country achieve energy
								security.
							</p>

							<p>
								<b>Power Distribution</b>
							</p>
							<p>
								San Miguel Global Power also ventured in power distribution and
								retail electricity services. Through its subsidiary Albay Power
								Energy Corporation (APEC), San Miguel Global Power entered into
								a concession agreement for the operation and maintenance of
								Albay Electric Cooperative, Inc. (ALECO), which is the franchise
								holder for the distribution of electricity in the province of
								Albay in Luzon.
							</p>
							<p>
								Moreover, San Miguel Global Power expands its sale of power to a
								broader range of customers, including retail customers. The
								Retail Electricity Supplier (RES) licenses issued by the Energy
								Regulatory Commission (ERC) allows the Company to enter into
								contracts with contestable customers and expand its customer
								base.
							</p>
							<p>
								<b>Battery Energy Storage</b>
							</p>
							<p>
								San Miguel Global Power continuously undertakes the expansion of
								its portfolio of Battery Energy Storage System (BESS) projects
								that will help improve the reliability and stability of the
								grid. With the ongoing construction of approximately 1,000 MW of
								BESS Facilities across 37 locations in the Philippines, San
								Miguel Global Power will significantly usher in the use of
								renewable energy sources in the country and help system
								frequency control in the national grid.
							</p>
							<p>
								<Button
									href='https://smcglobalpower.com.ph/'
									without='true'
									rel='noreferrer'
									target='_blank'
									link='/our-business/inner'
									className={'pri-btn btn-bordered'}>
									Read More
								</Button>
							</p>
						</div>
					</div>
					<div className='column bussinesses-opportunities-column sticky'>
						<div className='text-content'>
							<h3 className='heading-5'>Business Opportunities</h3>
							<div className='opportunities-item small-text'>
								<p>
									<b>SAN MIGUEL GLOBAL POWER&nbsp;</b>
									<br />
									Website:{' '}
									<a href='https://smcglobalpower.com.ph/' target='_blank'>
										smcglobalpower.com.ph
									</a>
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
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
								<p>
									<b>Jeciel B. Campos</b> <br />
									Head, Sales & Marketing – Wholesale
									<br />
									Email: sales@smcgph.sanmiguel.com.ph
								</p>
								<p>
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
						<motion.div className='control prev'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurBusinesses/thumb.png`} />
							</div>

							<div className='control-details'>
								<div className='arrow'>
									<BsArrowLeftCircle size={'1.75rem'} />
								</div>
								<div>
									<p>
										<b>Previous Business</b>
									</p>
									<p className='label heading-5'>San Miguel Foods</p>
								</div>
							</div>
						</motion.div>

						<motion.div className='control next'>
							<div className='img-container'>
								<img src={`${basePath}/images/OurBusinesses/thumb.png`} />
							</div>
							<div className='control-details'>
								<div className='arrow'>
									<BsArrowRightCircle size={'1.75rem'} />
								</div>
								<div>
									<p>
										<b>Next Business</b>
									</p>
									<p className='label heading-5'>San Miguel Foods</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</Section>
			</Curve>
		</>
	);
}