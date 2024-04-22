'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Fade from '@/components/Layout/Fade';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';
import ColumnSection from '@/cms-components/ColumnSection/ColumnSection';
import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';
import { AspectRatio } from '@chakra-ui/layout';
import PageBanner from '@/cms-components/PageBanner/PageBanner';

import { PiCaretCircleRight } from 'react-icons/pi';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
import Link from 'next/link';
import Column from '@/cms-components/Column/column';
import StackedImages from '@/cms-components/StackedImages/stackedimages';
export default function ShareholderInformation() {
	return (
		<Fade>
			<PageBanner
				title='Shareholder Information'
				direction='center'></PageBanner>
			<Section columnCount={2} containerStyle={{ alignItems: 'center' }}>
				<Column>
					<StackedImages
						images={[
							`${basePath}/images/ShareholderInformation/ShareholderInformation-1.svg`,
							`${basePath}/images/ph.svg`,
							`${basePath}/images/ShareholderInformation/ShareholderInformation-2.png`,
						]}
					/>
				</Column>

				<Column>
					<Link href='/' className='btn pri-btn btn-stacked'>
						President’s Message
						<PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Share Prices <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Dividend History <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Analyst Coverage <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Total Outstanding Shares <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Top 20 Stockholders <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Exchange where listed <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Company Ownership Report <PiCaretCircleRight size={'1.75rem'} />
					</Link>
				</Column>
			</Section>
		</Fade>
	);
}
