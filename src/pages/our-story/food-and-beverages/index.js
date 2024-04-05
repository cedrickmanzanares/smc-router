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
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={'Food and Beverage'} direction='center' />

				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<h2 className='heading-2'>San Miguel Brewery Inc.</h2>
							<img src={`${basePath}/images/OurBusinesses/smb.png`} />

							<p>
								San Miguel Brewery Inc. (SMB) is the largest producer of beer in
								the Philippines, with nine out of ten beer drinkers preferring
								its brands. San Miguel Beer was first produced by La Fabrica de
								Cerveza de San Miguel, an upstart brewery in the heart of Manila
								that began its operations in 1890. It received the Royal Grant
								from the Spanish king to brew beer in the Philippines, then a
								colony of Spain. In 1963, the brewery was renamed San Miguel
								Corp. (SMC) to reflect its growing ventures into food and
								packaging. As the beer business grew at a steady pace, it
								provided the foundation from which SMC expanded its interests
								from food, beverage and packaging, to power, oil, airline and
								infrastructure. Today, SMC is the country’s biggest diversified
								conglomerate.
							</p>
							<p>
								All SMB’s beer operations were then under the San Miguel Beer
								Division, a business unit of SMC. SMB was incorporated on July
								26, 2007, and the domestic beer business spun off from SMC to
								SMB on October 1, 2007. The spin-off of SMC’s domestic beer
								business into SMB was intended to realize the value of SMC’s
								flagship business. In 2010, the acquisition of San Miguel
								Brewing International Limited (SMBIL) enabled SMB to achieve
								full integration of its domestic and international beer
								business. SMB is now at a greater advantage to champion the
								iconic San Miguel brand across the Asia-Pacific region.
							</p>
							<p>
								From a single product produced in a single brewery in 1890, SMB
								has developed an array of popular beer products over the past
								century, catering to the distinct tastes and preferences of beer
								drinkers across all segments and markets in the Philippines.
								Today, it carries a portfolio of ten strong and popular beer
								brands: Red Horse Beer, San Mig Light, San Miguel Flavored Beer,
								San Mig Zero, Gold Eagle Beer, San Miguel Super Dry, San Miguel
								Premium All-Malt Beer, Cerveza Negra, Kirin Ichiban, and its
								flagship brand, San Miguel Pale Pilsen. These products carry
								distinct attributes that cater to all segments of the Philippine
								beer market and have earned international recognition for
								quality, winning in the prestigious Monde International
								Selection almost on an annual basis, among other awards and
								citations.
							</p>
							<p>
								The Company has seven production facilities strategically
								located across the Philippines to ensure product availability
								and freshness and a highly developed distribution system serving
								approximately 471,000 retail outlets.
							</p>
							<p>
								San Miguel Beer products have consistently dominated the market
								for beer in the Philippines, the country’s largest alcoholic
								beverage segment. Despite its dominant market position, SMB
								continues to find new ways to grow further its volumes and its
								market share in the Philippine beverage industry.
							</p>
							<p>
								In 2014, as part of SMB’s growth strategy, the Company embarked
								on another beverage segment which has seen promise in the last
								five years. As an initial endeavor, the Company acquired the
								non-alcoholic beverage assets of Ginebra San Miguel Inc. in
								April 2015 after SMB amended its primary purpose in its articles
								of incorporation, to include the non-alcoholic beverage
								business. The Company’s entry into this new business category is
								aimed at strengthening SMB’s growth performance and
								competitiveness. This latest venture is also expected to help
								the Company in expanding its reach in the Philippine market and
								tap new brands and planned product offerings.
							</p>
							<p>
								As in the case of its world-class beers, SMB’s non-alcoholic
								products will continue to carry the San Miguel trademark of
								quality and excellence.
							</p>
							<p>
								<Button
									href='https://www.sanmiguelfoods.com/'
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
									<b>Business Opportunities</b>
								</p>

								<p className='small-text'>
									Head Office Complex
									<br />
									40 San Miguel Avenue, Mandaluyong City
									<br />
									1550 Metro Manila, Philippines
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
									Tel no.: (632) 8632-3000 <br />
									http://www.sanmiguelbrewery.com.ph
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<img
									src={`${basePath}/images/OurBusinesses/smb-hotline.png`}
									data-filename='632BEERHotline-8632BEER.png'
									style={{
										width: '250px',
										maxWidth: '100%',
									}}
								/>
							</div>
						</div>
					</div>
				</Section>
				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<p className='heading-3'>
								<b>San Miguel Foods</b>
							</p>
							<img src={`${basePath}/images/OurBusinesses/food.png`} />
							<p>
								San Miguel Foods, a Division of San Miguel Food and Beverage,
								Inc., is comprised of leading food companies in the Philippines.
								Its products and services span across the entire value
								chain—from animal feeds, fresh chicken, and fresh meats to
								processed meats, flour, dairy, biscuits, and coffee—making it
								undoubtedly the most diversified food player in the country
								today.
							</p>
							<p>
								Owning a portfolio of products and brands loved by millions, San
								Miguel Foods has built a name that’s synonymous to fresh,
								safe-to-eat, and great-tasting food, offering convenience and
								value for money for consumers. Its strong brands, which include
								Magnolia, Purefoods, B-MEG, Monterey, Dari Crème, Star, La
								Pacita, Kambal Pandesal, and Treats, among others, are household
								names that have earned the mark of trust of generations of
								Filipinos around the world.
							</p>
							<p>
								In everything the group does, San Miguel Foods is always
								good—not only in creating products defined by quality, taste,
								and safety, but also in the way the group connects with
								consumers, lives out its values, and contributes to
								nationbuilding.
							</p>
							<p>San Miguel Foods. Always Good.</p>
							<p></p>
							<p></p>
							<p></p>

							<p>
								<Button
									href='https://www.sanmiguelfoods.com/'
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
									<b>Business Opportunities</b>
								</p>

								<p>
									<b>SAN MIGUEL FOODS, INC.</b> <br />
									No. 100 E. Rodriguez Jr. Avenue (C5 Road) <br />
									Barangay Ugong, Pasig City <br />
									1604, Metro Manila, Philippines <br />
								</p>
								<p>Landline: +632 5 317 5000</p>
								<p>
									<a href='mailto: customercare@sanmiguel.com.ph'>
										customercare@sanmiguel.com.ph
									</a>
								</p>
							</div>
						</div>
					</div>
				</Section>
				<Section
					columnCount={2}
					containerSize='medium'
					containerStyle={{ flexDirection: 'row-reverse' }}>
					<div className='column bussinesses-desc-column'>
						<div className='text-content'>
							<p className='heading-3'>
								<b>Ginebra San Miguel Inc.</b>
							</p>
							<img src={`${basePath}/images/OurBusinesses/genebra.png`} />
							<p>
								Ginebra San Miguel, Inc. is the world’s largest gin producer by
								volume as well as the market leader in the domestic hard liquor
								market, with core products such as Ginebra San Miguel Gin, GSM
								Blue Gin, Primera Light Brandy and Vino Kulafu. It also produces
								and sells distilled spirits in Thailand under a joint venture
								agreement with Thai Life Group of Companies. In addition,
								Ginebra owns one distillery, three liquor bottling plants, one
								cassava starch milk plant and five toll bottlers strategically
								located throughout Philippines and one bottling plant and one
								distillery in Thailand.
							</p>
							<p>
								<Button
									href='https://www.sanmiguelfoods.com/'
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
									<b>GINEBRA SAN MIGUEL, INC.</b>
									<br />
									Corporate Head Office 3rd, 5th &amp; 6th
									<br />
									Floor, San Miguel Properties Centre, St.
									<br />
									Francis Street, Mandaluyong City 1550
									<br />
									Metro Manila, Philippines
								</p>
								<p>
									Tel no.:{' '}
									<a href='tel: (02) 841-5100' target='_blank'>
										(02) 841-5100
									</a>
									<br />
									Fax no.: (02) 634-2211
									<br />
								</p>
							</div>
							<div className='opportunities-item small-text'>
								<p>
									<b>Customer Care</b>
								</p>
								<p>
									For inquiries, orders and suggestions
									<br />
									on our products and services,
									<br />
									please write or call:
									<br />
									GINEBRA SAN MIGUEL INC.
									<br />
									<b>Telephone No.:</b>{' '}
									<a href='tel: (632) 8632-2564' target='_blank'>
										(632) 8632-2564
									</a>
									<br />
									<b>Fax No.:</b>{' '}
									<a href='tel: (632) 8632-3299' target='_blank'>
										(632) 8632-3299
									</a>
									<br />
									<b>Mailbox No.:</b> 2623
									<br />
									<b>Email:</b>{' '}
									<a
										href='mailto: customercare.gsmi@smg.sanmiguel'
										target='_blank'>
										customercare.gsmi@smg.sanmiguel
									</a>
								</p>
							</div>
						</div>
					</div>
				</Section>
				<Section>
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
