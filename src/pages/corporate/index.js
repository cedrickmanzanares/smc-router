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

import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
import StackedImages from '@/cms-components/StackedImages/stackedimages';
import Column from '@/cms-components/Column/column';
export default function Corporate() {
	return (
		<Fade>
			<PageBanner
				size='full'
				title='Corporate'
				subtitle='Eu phasellus nunc neque porta laoreet maecenas tortor in. Magnis sit leo at a tortor. Quis massa tellus ut arcu sit sed sed. In ultrices curabitur leo eu.'
				bannerShade={true}
				image={`${basePath}/images/Corporate/Corporate-Banner.png`}></PageBanner>
			<Section columnCount={2} containerStyle={{ alignItems: 'center' }}>
				<Column>
					<h2 className='heading-2'>Tincidunt egestas phasellus sed ornare</h2>
					<p className='heading-5'>
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
				</Column>
				<Column>
					<StackedImages
						images={[
							`${basePath}/images/Corporate/Corporate-1.svg`,
							``,
							`${basePath}/images/Corporate/Corporate-2.png`,
						]}
					/>
				</Column>
			</Section>
			<Section columnCount={2}>
				<Column>
					<div className='business-item'>
						<div className='img-container'>
							<img src={`${basePath}/images/Corporate/governance.png`} />
						</div>
						<div className='desc-container'>
							<h3 className='heading-3'>Neque dictumst eget.</h3>

							<p>
								Velit morbi consequat laoreet hendrerit purus ornare ante tempor
								nibh. Purus pellentesque feugiat vestibulum enim tortor orci
								sodales hendrerit nascetur.
							</p>
							<p>
								<Button
									link='/our-story/our-company'
									className={'btn-bordered pri-btn'}>
									Learn more
								</Button>
							</p>
						</div>
					</div>
				</Column>
				<Column>
					<div className='business-item'>
						<div className='img-container'>
							<img
								src={`${basePath}/images/ph.svg`}
								style={{
									objectFit: 'contain',
								}}
							/>
						</div>
						<div className='desc-container'>
							<p>
								Sodales tempus at lorem magna tempus vitae turpis egestas. Ac
								nam tortor maecenas pellentesque.
							</p>

							<p>
								Ultricies eget tincidunt viverra enim malesuada. Eget velit
								aenean posuere lacus. Tempus nulla sed vel.
							</p>
							<p>
								<Button
									link='/our-story/our-company'
									className={'btn-bordered pri-btn'}>
									Learn more
								</Button>
							</p>
						</div>
					</div>
				</Column>
				<Column>
					<div className='business-item'>
						<div className='img-container'>
							<img
								src={`${basePath}/images/heart.svg`}
								style={{
									objectFit: 'contain',
								}}
							/>
						</div>

						<div className='desc-container'>
							<p>
								Sodales tempus at lorem magna tempus vitae turpis egestas. Ac
								nam tortor maecenas pellentesque.
							</p>

							<p>
								Ultricies eget tincidunt viverra enim malesuada. Eget velit
								aenean posuere lacus. Tempus nulla sed vel.
							</p>
							<p>
								<Button
									link='/our-story/our-company'
									className={'btn-bordered pri-btn'}>
									Learn more
								</Button>
							</p>
						</div>
					</div>
				</Column>
				<Column>
					<div className='business-item'>
						<div className='img-container'>
							<img src={`${basePath}/images/OurStrategy/our-strat-4.png`} />
						</div>
						<div className='desc-container'>
							<h3 className='heading-3'>Investor Relations</h3>

							<p>
								Velit morbi consequat laoreet hendrerit purus ornare ante tempor
								nibh.
							</p>
							<p>
								<Button
									link='/our-story/our-company'
									className={'btn-bordered pri-btn'}>
									Learn more
								</Button>
							</p>
						</div>
					</div>
				</Column>
			</Section>
		</Fade>
	);
}
