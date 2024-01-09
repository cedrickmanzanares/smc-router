'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Curve from '@/components/Layout/Curve';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';
import ColumnSection from '@/cms-components/ColumnSection/ColumnSection';
import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';
import { AspectRatio } from '@chakra-ui/layout';
import PageBanner from '@/cms-components/PageBanner/PageBanner';

export default function Corporate() {
	return (
		<Curve>
			<PageBanner
				images={[
					'/images/Corporate/1.png',
					'/images/Corporate/2.png',
					'/images/Corporate/3.svg',
				]}>
				<div className='desc-container'>
					<h1 className='heading-3 split-color'>
						<b>Corporate</b>
					</h1>
					<p>
						San Miguel Corporation is committed to the highest standards of
						corporate governance—critical in decision-making and corporate
						strategies that create value for and safeguard the long-term
						interests of its shareholders.
					</p>
				</div>
			</PageBanner>

			<ColumnSection direction={'reverse'}>
				<>
					<h3 className='heading-5'>Governance</h3>
					<p>
						As a responsible corporate citizen, San Miguel Corporation has in
						place efficient policies and programs to ensure that we always do
						what is right when it comes to conducting the everyday business of
						the Company.
					</p>

					<p>
						Corporate Human Resources (Talent Acquisition) San Miguel
						Corporation 40 San Miguel Avenue, Ortigas Center Mandaluyong City
						1550
					</p>

					<p>[_Button_]</p>
				</>
				<>
					<AspectRatio ratio={1}>
						<img src='/images/Homepage-1/1.png'></img>
					</AspectRatio>
				</>
			</ColumnSection>

			<div className='section-content text-center'>
				<div className='container-fluid-width small'>
					<div className='desc-container'>
						<h2 className='heading-4 split-color'>
							Investor <b>Relations</b>
						</h2>
						<p>
							SMC Investor Relations aims to build lasting relationships with
							our stakeholders, working together as partners to help SMC reach
							its growth objectives. We are committed to providing our
							stakeholders with the best service, as we deal with them fairly
							and objectively.
						</p>
						<p>
							We strive to present our stakeholders what we believe are relevant
							information to enable them to make sound investment decisions.
						</p>
					</div>
					<div className='img-container'></div>
				</div>
			</div>

			<FullPageBanner />

			<div className='section-content'>
				<div className='container-fluid-width small'>
					<div className='desc-container'>
						<h2 className='heading-4 split-color'>
							Share <b>Prices</b>
						</h2>
						<p>
							San Miguel Corporation (SMC) is among the largest and most
							diversified Philippine conglomerates. Its wide range of businesses
							include beverages, food, packaging, fuel and oil, energy,
							infrastructure, mining, real estate and aviation. San Miguel has
							adopted a five-pronged business strategy aimed at increasing the
							value of the company:
						</p>
						<p>
							First, is to enhance the value of its established core businesses
							through operational excellence, brand enhancement and improved
							product visibility. Second, is to diversify into industries that
							underpin the development and growth of the Philippine economy.
						</p>
						<p>
							Third, is to pursue synergies across its businesses through
							vertical integration, platform matching and channel management.
							Fourth, is to invest and develop businesses with leading market
							positions, enabling us to leverage on our strong brands and market
							dominance to expand existing businesses. Finally, to adopt
							globally competitive practices through partnerships with leading
							companies worldwide.
						</p>
					</div>
					<div className='img-container'></div>
				</div>
			</div>
		</Curve>
	);
}
