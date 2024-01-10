'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Curve from '@/components/Layout/Curve';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';

export default function InnerDisclosure() {
	const { baseBlack, gray2, red } = getColors;

	const footerIcon = {
		size: '1.75rem',
		color: baseBlack,
	};

	const src = './videos/sample-video.mp4';
	const years = [
		2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
	].reverse();
	return (
		<Curve>
			<PageTitle title='Diclosures' />

			<div
				className='section-content no-min-height'
				{...useAnim(pageTranslate(1))}>
				<div className='container-fluid-width medium'>
					<div
						className='pdf-filter'
						style={{
							display: 'none',
						}}>
						<label className='form-group'>
							<span className='size-limit'>Keyword</span>
							<input type='text' />
						</label>
						<label className='form-group'>
							<span className='size-limit'>Year</span>
							<input list='browsers' />
							<datalist id='browsers'>
								{years.map((year, index) => {
									return <option key={`year_${index}`} value={year} />;
								})}
							</datalist>
						</label>
					</div>
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
