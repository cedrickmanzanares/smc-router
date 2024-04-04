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

import { PiCaretCircleRight } from 'react-icons/pi';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
import Link from 'next/link';
export default function ShareholderInformation() {
	return (
		<Curve>
			<PageBanner
				title='Shareholder Information'
				direction='center'></PageBanner>
			<Section columnCount={2}>
				<div className='column'>
					<div className='image-content stacked'>
						<div className='img-container'>
							<img
								src={`${basePath}/images/ShareholderInformation/ShareholderInformation-1.svg`}
							/>
						</div>
						<div className='img-container'>
							<img src={`${basePath}/images/ph.svg`} />
						</div>
						<div className='img-container'>
							<img
								src={`${basePath}/images/ShareholderInformation/ShareholderInformation-2.png`}
							/>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className=''>
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
					</div>
				</div>
			</Section>
			<Section columnCount={2}>
				<div className='column'>
					<div className='news-item'>
						<div className='img-container'>
							<img src={''} />
						</div>
						<div className='desc-container'>
							<h2 className='heading-5'>Neque dictumst eget.</h2>

							<p>
								Velit morbi consequat laoreet hendrerit purus ornare ante tempor
								nibh. Purus pellentesque feugiat vestibulum enim tortor orci
								sodales hendrerit nascetur.
							</p>

							<Button
								link='/our-story/our-company'
								className={'btn-bordered white'}>
								Learn more
							</Button>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='news-item'>
						<div className='img-container'>
							<img src={''} />
						</div>
						<div className='desc-container'>
							<h2 className='heading-5'>Neque dictumst eget.</h2>

							<p>
								Velit morbi consequat laoreet hendrerit purus ornare ante tempor
								nibh. Purus pellentesque feugiat vestibulum enim tortor orci
								sodales hendrerit nascetur.
							</p>

							<Button
								link='/our-story/our-company'
								className={'btn-bordered white'}>
								Learn more
							</Button>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='news-item'>
						<div className='img-container'>
							<img src={''} />
						</div>
						<div className='desc-container'>
							<h2 className='heading-5'>Neque dictumst eget.</h2>

							<p>
								Velit morbi consequat laoreet hendrerit purus ornare ante tempor
								nibh. Purus pellentesque feugiat vestibulum enim tortor orci
								sodales hendrerit nascetur.
							</p>

							<Button
								link='/our-story/our-company'
								className={'btn-bordered white'}>
								Learn more
							</Button>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='news-item'>
						<div className='img-container'>
							<img src={''} />
						</div>
						<div className='desc-container'>
							<h2 className='heading-5'>Neque dictumst eget.</h2>
							<p>Purus varius elit morbi diam varius integer.</p>
							<p>
								Velit morbi consequat laoreet hendrerit purus ornare ante tempor
								nibh. Purus pellentesque feugiat vestibulum enim tortor orci
								sodales hendrerit nascetur.
							</p>

							<Button
								link='/our-story/our-company'
								className={'btn-bordered white'}>
								Learn more
							</Button>
						</div>
					</div>
				</div>
			</Section>
		</Curve>
	);
}
