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

export default function Careers() {
	return (
		<Curve>
			<div className='section-content page-banner no-padding'>
				<div className='container-fluid-width medium'>
					<div className='desc-container'>
						<h1 className='heading-3 split-color'>
							Careers at <b>San Miguel</b>
						</h1>
						<p>
							Elit arcu nulla sed ac. Diam gravida tellus lorem turpis a quam
							ornare sem leo. Malesuada semper in ut nisl morbi vitae tristique
							in. Urna vel amet in adipiscing at. Magnis est id sollicitudin
							imperdiet risus ornare ut massa.
						</p>
					</div>
				</div>
			</div>
			<div className='section-content'>
				<div className='container-fluid-width medium'>
					<div className='desc-container'>
						<p
							className='split-color heading-3'
							style={{
								fontWeight: 'bold',
							}}>
							We are today in the midst of an unprecedented expansion program{' '}
							<b>
								that will weave our products and services even more tightly into
								the fabric of everyday life.
							</b>
						</p>
					</div>
					<div className='img-container'></div>
				</div>
			</div>

			<ColumnSection direction='reverse'>
				<p>
					We are looking for people who share our core values, who possess a
					high level of initiative and responsibility to join us on this
					journey. We offer attractive opportunities for career development.
				</p>

				<p>
					Corporate Human Resources (Talent Acquisition) San Miguel Corporation
					40 San Miguel Avenue, Ortigas Center Mandaluyong City 1550
				</p>

				<p>[_Button_]</p>
			</ColumnSection>
		</Curve>
	);
}
