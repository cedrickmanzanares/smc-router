'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Curve from '@/components/Layout/Curve';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';
import ColumnSection from '@/cms-components/ColumnSection/ColumnSection';
import { useRef } from 'react';
import { AspectRatio } from '@chakra-ui/layout';
import TextGradient from '@/cms-components/TextGradient/TextGradient';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import SingleParallax from '@/components/single-parallax/single-parallax';
import Section from '@/cms-components/Section/Section';
export default function Careers() {
	return (
		<Curve>
			<PageBanner
				title={'Careers at San Miguel'}
				image={`${basePath}/images/Careers/Careers-Banner.png`}
				size={'full'}
				headingSize='heading-1'></PageBanner>

			<Section containerSize={'small'}>
				<div className='column'>
					<div className='text-content center'>
						<h2 className='heading-5'>
							We are today in the midst of an unprecedented expansion program
							that will weave our products and services even more tightly into
							the fabric of everyday life. 
						</h2>
					</div>
					<div>[-Video-]</div>
				</div>
			</Section>

			<Section columnCount={2} containerSize='small'>
				<div className='column'>
					<div className='image-content'>
						<div className='img-container'>
							<img src={`${basePath}/images/OurCompany/Our-Company.png`} />
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='text-content'>
						<p>
							We are looking for people who share our core values, who possess a
							high level of initiative and responsibility to join us on this
							journey. We offer attractive opportunities for career development.
						</p>
						<h2 className='heading-5'>
							Corporate Human Resources (Talent Acquisition)
						</h2>
						<p>
							San Miguel Corporation
							<br />
							40 San Miguel Avenue, Ortigas Center
							<br />
							Mandaluyong City 1550
						</p>
						<p>
							<Button link='/our-business/inner' className={'pri white'}>
								Read More
							</Button>
						</p>
					</div>
				</div>
			</Section>
		</Curve>
	);
}
