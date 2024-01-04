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
			<PageTitle title='Diclosures' split='Inner' />

			<div
				className='section-content no-min-height'
				{...useAnim(pageTranslate(1))}>
				<div className='container-fluid-width'>
					<div className='pdf-listing'>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>

						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>
						<PDFItem
							title={
								'SMC 65 Billion Shelf Registration and Public Offering of Series 2 Preferred Shares'
							}
							date={'April 18, 2023'}
							download={true}
							link={'/test'}
						/>
					</div>
				</div>
			</div>
		</Curve>
	);
}
