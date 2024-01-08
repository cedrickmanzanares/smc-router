'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Curve from '@/components/Layout/Curve';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';

export default function All() {
	const { baseBlack, gray2, red } = getColors;

	const footerIcon = {
		size: '1.75rem',
		color: baseBlack,
	};

	const src = './videos/sample-video.mp4';

	return (
		<Curve>
			<PageTitle title='Company' split='Disclosures' />

			<motion.div
				className='section-content no-min-height'
				{...useAnim(pageTranslate(1))}>
				<div className='container-fluid-width medium'>
					<div className='pdf-listing'>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/pdf/test-pdf.pdf'}
						/>

						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							link={'/test'}
						/>
					</div>
				</div>
			</motion.div>
			<motion.div
				className='section-content no-min-height'
				{...useAnim(pageTranslate(2))}>
				<div className='container-fluid-width medium'>
					<h2 className='heading-4'>Sec Filings</h2>
					<div className='grid pdf-grid'>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							title={'17-A'}
							subtitle={'Annual Reports'}
							link={'/disclosures/inner'}
						/>
					</div>
				</div>
			</motion.div>
		</Curve>
	);
}
