'use client';

import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

import { PiCaretCircleRight } from 'react-icons/pi';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
import Link from 'next/link';
export default function FinancialInformation() {
	return (
		<Curve>
			<PageBanner title='Financial Information' direction='center'></PageBanner>
			<Section columnCount={2}>
				<div className='column'>
					<div className='image-content stacked'>
						<div className='img-container'>
							<img src={`${basePath}/images/OurStory/OurStory-1.svg`} />
						</div>
						<div className='img-container'>
							<img src={`${basePath}/images/ph.svg`} />
						</div>
						<div className='img-container'>
							<img src={`${basePath}/images/OurStory/OurStory-2.png`} />
						</div>
					</div>
				</div>
				<div className='column'>
					<div className=''>
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
					</div>
				</div>
			</Section>
		</Curve>
	);
}