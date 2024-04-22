'use client';

import Fade from '@/components/Layout/Fade';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

import { PiCaretCircleRight } from 'react-icons/pi';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
import Link from 'next/link';
import StackedImages from '@/cms-components/StackedImages/stackedimages';
import Column from '@/cms-components/Column/column';
export default function FinancialInformation() {
	return (
		<Fade>
			<PageBanner title='Financial Performance' direction='center'></PageBanner>
			<Section columnCount={2}>
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
						Annual Reports
						<PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Financial Statements <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						IR Presentations <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Financial Highlights <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Prospectus <PiCaretCircleRight size={'1.75rem'} />
					</Link>
					<Link href='/' className='btn pri-btn btn-stacked'>
						Shelf Registration of Fixed-Rate Bonds Offering{' '}
						<PiCaretCircleRight size={'1.75rem'} />
					</Link>
				</Column>
			</Section>
		</Fade>
	);
}
