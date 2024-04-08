import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { motion, AnimatePresence } from 'framer-motion';

import { getColors } from '@/hooks/use-color';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import ImageSlider from '@/cms-components/ImageSlider/ImageSlider';
import { useState } from 'react';

export default function OurCompany() {
	const [selected, setSelected] = useState(0);

	const fnb = [
		{
			img: `${basePath}/images/OurCompany/fnb-1.png`,
		},
		{
			img: `${basePath}/images/OurCompany/fnb-2.png`,
		},
	];
	const packaging = [
		{
			img: `${basePath}/images/OurCompany/packaging-1.png`,
		},
		{
			img: `${basePath}/images/OurCompany/packaging-2.png`,
		},
		{
			img: `${basePath}/images/OurCompany/packaging-3.png`,
		},
	];
	const fo = [
		{
			img: `${basePath}/images/OurCompany/FO-1.png`,
		},
		{
			img: `${basePath}/images/OurCompany/FO-2.png`,
		},
		{
			img: `${basePath}/images/OurCompany/FO-3.png`,
		},
	];
	const power = [
		{
			img: `${basePath}/images/OurCompany/Power-1.png`,
		},
		{
			img: `${basePath}/images/OurCompany/Power-2.png`,
		},
		{
			img: `${basePath}/images/OurCompany/Power-3.png`,
		},
	];
	const infra = [
		{
			img: `${basePath}/images/OurCompany/Infra-1.png`,
		},
		{
			img: `${basePath}/images/OurCompany/Infra-2.png`,
		},
		{
			img: `${basePath}/images/OurCompany/Infra-3.png`,
		},
	];
	const cem = [
		{
			img: `${basePath}/images/OurCompany/Cem-1.png`,
		},
	];

	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Curve>
				<PageBanner noBg={true} title={'Our Company'} />

				<Section>
					<div className='column'>
						<div className='text-content'>
							<div className='float float-right'>
								<div className='img-container'>
									<img src={`${basePath}/images/OurCompany/Our-Company.png`} />
								</div>
							</div>
							<p>
								San Miguel Corporation, together with its subsidiaries, is one
								of the largest and most diversified conglomerates in the
								Philippines by revenues and total assets—with sales equivalent
								to approximately 6.8% of the Philippine GDP in 2022.
							</p>
							<p>
								Originally founded in 1890 as a single product brewery in the
								Philippines, SMC today owns market-leading businesses and
								investments in various sectors, including food and beverage,
								packaging, energy, fuel and oil, infrastructure, cement,
								property and banking services. SMC has a portfolio of companies
								that is tightly interwoven into the economic fabric of the
								Philippines, benefiting from, as well as contributing to the
								development and economic progress of the country.
							</p>
							<p>
								Since adopting its business diversification program in 2007, SMC
								has channeled its resources into what it believes are attractive
								growth sectors, which are aligned with the development and
								growth of the Philippine economy. SMC believes that continuing
								this strategy and pursuing growth plans within each business
								will achieve a more diverse mix of sales and operating income,
								and better position SMC to access capital, present different
								growth opportunities and mitigate the impact of downturns and
								business cycles.
							</p>
							<p>
								SMC is one of the nation’s largest employers, with a direct
								workforce of 50,433 employees as of December 2022. For each job
								created within the San Miguel ecosystem, many additional jobs
								are generated through suppliers, distributors, retailers, and
								other business partners. At present, we have more than 100 major
								facilities in the Asia-Pacific region.
							</p>
							<p>
								Through strategic partnerships forged with major international
								companies, we have access to managerial expertise, international
								practices and advanced technology. Our partners, notably Kirin
								Brewery Co., Ltd., Nihon Yamamura Glass, U.S.-based Hormel Foods
								Corporation, and Korea Water Resources Corporation, are world
								leaders in their respective businesses.
							</p>
							<p>
								SMC is listed on the Philippine Stock Exchange (PSE Ticker:
								SMC). Publicly-listed subsidiaries include San Miguel Food and
								Beverage, Inc., Ginebra San Miguel, Inc., and Petron
								Corporation.
							</p>
						</div>
					</div>
				</Section>

				<Section columnCount={2} sectionStyle={{ paddingTop: 0 }}>
					<div className='column sticky tab-source tabsource-ourcompany'>
						<motion.button
							class={`tab-links ${selected === 0 ? 'active' : ''}`}
							onTap={() => {
								setSelected(0);
							}}>
							<div className='img-container'>
								<img
									src={`${basePath}/images/OurCompany/food-and-beverages.svg`}
								/>
								<img
									src={`${basePath}/images/OurCompany/food-and-beverages-white.svg`}
								/>
							</div>
							<div className='heading-6 tab-label'>Food and Beverage</div>
						</motion.button>
						<motion.button
							class={`tab-links ${selected === 1 ? 'active' : ''}`}
							onTap={() => {
								setSelected(1);
							}}>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/packaging.svg`} />
								<img
									src={`${basePath}/images/OurCompany/packaging-white.svg`}
								/>
							</div>
							<div className='heading-6 tab-label'>Packaging</div>
						</motion.button>
						<motion.button
							class={`tab-links ${selected === 2 ? 'active' : ''}`}
							onTap={() => {
								setSelected(2);
							}}>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/fuel-and-oil.svg`} />
								<img
									src={`${basePath}/images/OurCompany/fuel-and-oil-white.svg`}
								/>
							</div>
							<div className='heading-6 tab-label'>Fuel and Oil</div>
						</motion.button>
						<motion.button
							class={`tab-links ${selected === 3 ? 'active' : ''}`}
							onTap={() => {
								setSelected(3);
							}}>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/power.svg`} />
								<img src={`${basePath}/images/OurCompany/power-white.svg`} />
							</div>
							<div className='heading-6 tab-label'>Power</div>
						</motion.button>
						<motion.button
							class={`tab-links ${selected === 4 ? 'active' : ''}`}
							onTap={() => {
								setSelected(4);
							}}>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/infrastructure.svg`} />
								<img
									src={`${basePath}/images/OurCompany/infrastructure-white.svg`}
								/>
							</div>
							<div className='heading-6 tab-label'>Infrastructure</div>
						</motion.button>
						<motion.button
							class={`tab-links ${selected === 5 ? 'active' : ''}`}
							onTap={() => {
								setSelected(5);
							}}>
							<div className='img-container'>
								<img src={`${basePath}/images/OurCompany/cement.svg`} />
								<img src={`${basePath}/images/OurCompany/cement-white.svg`} />
							</div>
							<div className='heading-6 tab-label'>Cement</div>
						</motion.button>
					</div>
					<div className='column tab-target'>
						<AnimatePresence>
							<modiv style={{ display: selected === 0 ? 'block' : 'none' }}>
								<h3 className='heading-3'>Food and Beverage</h3>
								<p>
									<a href='http://www.smfb.com.ph/' target='_blank'>
										San Miguel Food and Beverage, Inc.
									</a>{' '}
									(SMFB) is the Philippines’ leading food and beverage company
									in the Philippines, combining the strength of San Miguel
									Brewery Inc., Ginebra San Miguel Inc, and San Miguel Foods. It
									has among the most recognizable and top-of-mind brands in the
									industry and holds market leading positions in their
									respective categories.
								</p>
								<ImageSlider
									dots={true}
									type='full'
									captionPosition='absolute'
									arrows={false}
									slides={fnb}
								/>
								<p>
									Key brands under the SMFB portfolio include San Miguel Pale
									Pilsen, San Mig Light and Red Horse for beer, Ginebra San
									Miguel for gin, Magnolia for chicken, ice cream and dairy
									products, Monterey for fresh and marinated meats, Purefoods
									Tender Juicy for hotdogs, Purefoods for refrigerated prepared
									and processed meats, canned meats and seafood lines, Veega for
									plant-based protein food products, Star and Dari Crème for
									margarine and B-Meg for animal feeds.
								</p>
							</modiv>
							<modiv style={{ display: selected === 1 ? 'block' : 'none' }}>
								<h3 className='heading-3'>Packaging</h3>
								<p>
									The Packaging Group is comprised of{' '}
									<a
										href='/page/san-miguel-yamamura-packaging-corp'
										target='_blank'>
										SMYPC
									</a>
									, and SMYPIL and their respective subsidiaries, both are joint
									venture companies between SMC and NYG, one of the largest
									glass and plastic packaging corporations in Japan; SYFMC, the
									only manufacturer of glass and plastics molds in the country,
									CAI, a pioneer in the production of two-piece aluminum cans,
									Mincorr, a paper corrugated carton manufacturer and Wine
									Brothers Philippines Corp., involved in the sale and
									distribution of wine products.
								</p>
								<ImageSlider
									dots={true}
									type='full'
									captionPosition='absolute'
									arrows={false}
									slides={packaging}
								/>
								<p>
									The Packaging Group has one of the largest packaging
									operations in the Philippines with diversified businesses
									producing glass, molds, metal and plastic closures, aluminum
									cans, plastic bottles, pallets and crates, flexibles, paper,
									and other packaging products. The group also provides services
									such as beverage filling in aluminum cans, PET and glass
									bottles, pallet leasing and logistics services. It also
									supplies packaging products to customers in the Asia-Pacific
									region, U.S., and Australasia, as well as to major
									multinational corporations across the Philippines.
								</p>
							</modiv>
							<modiv style={{ display: selected === 2 ? 'block' : 'none' }}>
								<h3 className='heading-3'>Fuel and Oil</h3>
								<p>
									<a href='https://www.petron.com/' target='_blank'>
										Petron Corporation
									</a>
									, is the only integrated oil refining and marketing company in
									the Philippines and a strong third player in the Malaysian
									market. Petron has a combined refining capacity of 268,000
									barrels per day. The company refines crude oil and markets and
									distributes refined petroleum products in the Philippines and
									Malaysia. Petron has an extensive network of around 1,900
									retail service stations in the Philippines and more than 750
									retail service stations in Malaysia as of December 31, 2022.
								</p>
								<ImageSlider
									dots={true}
									type='full'
									captionPosition='absolute'
									arrows={false}
									slides={fo}
								/>
								<p>
									Petron participates in the reseller (service station),
									industrial, lube, and liquefied petroleum gas sectors. In
									addition, the Company’s service station provides a one-stop
									service experience to travelers on the road, offering
									amenities such as Treats convenience stores, restaurants, and
									specialty shops.
								</p>
							</modiv>
							<modiv style={{ display: selected === 3 ? 'block' : 'none' }}>
								<h3 className='heading-3'>Power</h3>
								<p>
									The Energy business, which is conducted through{' '}
									<a href='https://smcglobalpower.com.ph/?p=1' target='_blank'>
										San Miguel Global Power Holdings Corp.
									</a>{' '}
									(formerly SMC Global Power Holdings Corp.), together with its
									subsidiaries, associates and joint ventures, is one of the
									largest power companies in the Philippines, controlling 4,719
									MW of combined capacity as of December 31, 2022. SMGP benefits
									from a diversified power portfolio, including natural gas,
									coal, and renewable energy such as hydroelectric power and
									battery energy storage systems (BESS).
								</p>
								<ImageSlider
									dots={true}
									type='full'
									captionPosition='absolute'
									arrows={false}
									slides={power}
								/>
								<p>
									Based on the total installed generating capacities in the
									Energy Regulatory Commission Resolution on Grid Market share
									Limitation, SMGP believes that its combined installed capacity
									comprises approximately 19% of the National Grid, 26% of the
									Luzon Grid and 7% of the Mindanao Grid, in each case, as of
									December 31, 2022.
								</p>
							</modiv>
							<modiv style={{ display: selected === 4 ? 'block' : 'none' }}>
								<h3 className='heading-3'>Infrastructure</h3>
								<p>
									The infrastructure business, conducted through San Miguel
									Holdings Corp. doing business under the name and style of{' '}
									<a href='/page/infrastructure' target='_blank'>
										SMC Infrastructure
									</a>{' '}
									(“SMHC”), consists of investments in companies that hold
									long-term concessions in the infrastructure sector in the
									Philippines.
								</p>
								<ImageSlider
									dots={true}
									type='full'
									captionPosition='absolute'
									arrows={false}
									slides={infra}
								/>
								<p>
									Its current operating toll roads include the South Luzon
									Expressway (“SLEX”), SLEX Elevated Extension, Skyway Stages 1,
									2 and 3, the Southern Tagalog Arterial Road (“STAR”), Tarlac-
									Pangasinan-La Union Toll Expressway (“TPLEX”) and NAIA
									Expressway (“NAIAX”). Ongoing projects include Skyway Stage 4,
									the extension of SLEX - Toll Road 4 (“SLEX TR4”), SLEX - Toll
									Road 5 (“SLEX TR5”), Pasig River Expressway (“PAREX”),
									Southern Access Link Expressway (“SALEX”), Northern Access
									Link Expressway (“NALEX”), Metro Rail Transit Line 7
									(“MRT-7”), and Manila International Airport (“MIA”). It also
									operates and is currently expanding the Boracay Airport and
									has investments in Manila North Harbour Port Inc. (MNHPI) and
									Luzon Clean Water Development Corporation (“LCWDC”) for the
									Bulacan Bulk Water Supply Project.
								</p>
							</modiv>
							<modiv style={{ display: selected === 5 ? 'block' : 'none' }}>
								<h3 className='heading-3'>Cement</h3>
								<p>
									The cement business is conducted under SMEII, which owns 100%
									of the issued and outstanding common stock of Northern Cement
									Corporation (NCC) and Southern Concrete Industries Inc.
									[formerly, Oro Cemento Industries Corporation] (SCII) and
									99.96% of newly acquired Eagle Cement Corporation (Eagle) as
									of end December 2022. As of December 31, 2022, SMC owns 100%
									of SMEII.
								</p>
								<ImageSlider
									dots={true}
									type='full'
									captionPosition='absolute'
									arrows={false}
									slides={cem}
								/>
								<p>
									It is a strong player in the cement industry with an
									established reputation and with long experience in cement
									production and domestic sales. It has a leading and
									contemporary cement plants with new integrated production line
									showcasing sustainable, environment-friendly, world-class and
									state-of-the art equipment capable of producing high quality
									cement products with comprehensive strength above and beyond
									the prescribed specifications.
								</p>
							</modiv>
						</AnimatePresence>
					</div>
				</Section>
			</Curve>
		</>
	);
}
