'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';

import { getColors } from '@/hooks/use-color';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import Fade from '@/components/Layout/Fade';
import { pageTranslate } from '@/hooks/pageAnim';
import useAnim from '@/hooks/use-anim';
import ColumnSection from '@/cms-components/ColumnSection/ColumnSection';
import { useRef } from 'react';
import { AspectRatio } from '@chakra-ui/layout';
import TextGradient from '@/cms-components/TextGradient/TextGradient';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import SingleParallax from '@/cms-components/SingleParallax/single-parallax';
import Section from '@/cms-components/Section/Section';
import VideoContent from '@/cms-components/VideoContent/Video';
import StackedImages from '@/cms-components/StackedImages/stackedimages';
export default function Careers() {
	return (
		<Fade>
			<PageBanner
				title={'Careers at San Miguel'}
				image={`${basePath}/images/Careers/Careers-Banner.png`}
				size={'full'}
				headingSize='heading-1'></PageBanner>

			<Section direction={'center'}>
				<div className='column'>
					<p className='heading-3'>
						<b>
							We are today in the midst of an unprecedented expansion program
							that will weave our products and services even more tightly into
							the fabric of everyday life. 
						</b>
					</p>
				</div>
				<div className='column'>
					<VideoContent src={`${basePath}/images/60984b8996347.mp4`} />
				</div>
			</Section>

			<Section columnCount={2} containerStyle={{ alignItems: 'center' }}>
				<div className='column'>
					<StackedImages
						images={[
							`${basePath}/images/Careers/Careers-1.svg`,
							`${basePath}/images/tao.svg`,
							`${basePath}/images/Careers/Careers-2.png`,
						]}
					/>
				</div>
				<div className='column'>
					<div className='text-content'>
						<p>
							We are looking for people who share our core values, who possess a
							high level of initiative and responsibility to join us on this
							journey. We offer attractive opportunities for career development.
						</p>
						<h2 className='heading-5'>
							Corporate Human Resources <br />
							(Talent Acquisition)
						</h2>
						<p>
							San Miguel Corporation
							<br />
							40 San Miguel Avenue, Ortigas Center
							<br />
							Mandaluyong City 1550
						</p>
						<p>
							<Button
								link='/our-business/inner'
								className={'pri-btn btn-bordered'}>
								Read More
							</Button>
						</p>
					</div>
				</div>
			</Section>
		</Fade>
	);
}
