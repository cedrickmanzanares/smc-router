'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Curve from '@/components/Layout/Curve';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';
import {
	Flex,
	Spacer,
	FormControl,
	FormLabel,
	Input,
	Select,
	Grid,
	SimpleGrid,
} from '@chakra-ui/react';
import Section from '@/cms-components/Section/Section';
import PageBanner from '@/cms-components/PageBanner/PageBanner';

export default function All() {
	const { baseBlack, gray2, red } = getColors;

	const footerIcon = {
		size: '1.75rem',
		color: baseBlack,
	};

	const src = './videos/sample-video.mp4';

	return (
		<Curve>
			<PageBanner title={'Company Disclosures'} noBg={true} />
			<Section>
				<Flex
					gap={5}
					mb={0}
					direction={{
						base: 'column',
						sm: 'row',
					}}>
					<FormControl ml={'auto'} w={{ base: '100%', sm: 'auto' }}>
						<Input placeholder='Enter Keyword' size={'lg'} fontSize={'1rem'} />
					</FormControl>
					<FormControl w={{ base: '100%', sm: 'auto' }}>
						<Select placeholder='Select Year' size={'lg'} fontSize={'1rem'}>
							<option>United Arab Emirates</option>
							<option>Nigeria</option>
						</Select>
					</FormControl>
				</Flex>
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
				<div className='pdf-pagination'></div>
				<h2 className='heading-3'>Sec Filings</h2>
				<SimpleGrid columns={[1, 2, 4]} gap={[8, 8, 8]}>
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
					<PDFWidget
						title={'17-A'}
						subtitle={'Annual Reports'}
						link={'/disclosures/inner'}
					/>
				</SimpleGrid>
			</Section>
		</Curve>
	);
}
