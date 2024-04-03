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

import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
export default function Corporate() {
	return (
		<Curve>
			<PageBanner
				size='full'
				title='Corporate'
				subtitle='Eu phasellus nunc neque porta laoreet maecenas tortor in. Magnis sit leo at a tortor. Quis massa tellus ut arcu sit sed sed. In ultrices curabitur leo eu.'
				image={`${basePath}/images/Corporate/Corporate-Banner.png`}>
				<div className='desc-container'>
					<h1 className='heading-1 split-color'>
						<b>Corporate</b>
					</h1>
				</div>
			</PageBanner>
			<Section columnCount={2}>
				<div className='column'>
					<h2 className='heading-2'>Tincidunt egestas phasellus sed ornare</h2>
					<p>
						<b>
							Pellentesque cras tortor viverra dui tempor semper cum sed. Sit
							ut.
						</b>
					</p>
					<p>
						Velit morbi consequat laoreet hendrerit purus ornare ante tempor
						nibh. Purus pellentesque feugiat vestibulum enim tortor orci sodales
						hendrerit nascetur.
					</p>
					<p>
						Mauris sed morbi pretium ullamcorper morbi adipiscing fringilla.
						Dictumst et turpis urna accumsan ornare. Volutpat amet enim aliquam
						magnis. Felis viverra ornare elit feugiat dictumst. Velit nisl arcu.
					</p>
				</div>
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
			</Section>
			<Section columnCount={2}>
				<div className='column'>
					<div className='news-item'>
						<div className='img-container'>
							<img src={''} />
						</div>
						<div className='desc-container'>
							<h3 className='heading-3'>Neque dictumst eget.</h3>

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
							<h3 className='heading-3'>Governance</h3>

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
							<h3 className='heading-3'>Neque dictumst eget.</h3>

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
							<h3 className='heading-3'>Neque dictumst eget.</h3>
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
