'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';

import { getColors } from '@/hooks/use-color';

import Fade from '@/components/Layout/Fade';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import { Flex } from '@chakra-ui/layout';
import { FormControl, Input, Select } from '@chakra-ui/react';
import { PiCaretCircleLeft, PiCaretCircleRight } from 'react-icons/pi';

export default function InnerDisclosure({ title }) {
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
		<Fade>
			<PageBanner title={title} noBg={true} />
			<Section>
				<Flex
					gap={5}
					mb={0}
					direction={{
						base: 'column',
						sm: 'row',
					}}>
					<FormControl
						ml={'auto'}
						w={{ base: '100%', sm: 'auto' }}
						h={'3.5rem'}>
						<Input placeholder='Enter Keyword' h={'4rem'} />
					</FormControl>
					<FormControl w={{ base: '100%', sm: 'auto' }} h={'3.5rem'}>
						<Select placeholder='Select Year'>
							{years.map((year) => {
								return <option>{year}</option>;
							})}
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
				<div className='pagination'>
					<button className='btn btn-icon'>
						<PiCaretCircleLeft size={'2rem'} />
					</button>
					<button className='btn btn-text'>1</button>
					<button className='btn btn-text'>2</button>
					<button className='btn btn-text'>3</button>
					<button className='btn btn-text'>4</button>
					<button className='btn btn-text'>...</button>
					<button className='btn btn-text'>10</button>
					<button className='btn btn-icon'>
						<PiCaretCircleRight size={'2rem'} />
					</button>
				</div>
			</Section>
		</Fade>
	);
}
