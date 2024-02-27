import Head from 'next/head';
import Curve from '@/components/Layout/Curve';
import Parallax from '@/components/Parallax/parallax';
import SampleVideo from '@/components/SampleVideo/sample-video';
import OurBusinesses from '@/cms-components/OurBusinesses/OurBusinesses';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { getColors } from '@/hooks/use-color';
import Card from '@/components/card/card';
import Button from '@/components/button/button';
import PageCTA from '@/cms-components/PageCTA/PageCTA';
import ColumnSection from '@/cms-components/ColumnSection/ColumnSection';

import { basePath } from '@/hooks/use-basepath';

export default function Home() {
	const images1 = [
		`${basePath}/images/Image3D/image3d1-1.png`,
		`${basePath}/images/Image3D/image3d1-2.png`,
	];

	const images2 = [
		`${basePath}/images/Image3D/image3d2-1.png`,
		`${basePath}/images/Image3D/image3d2-2.png`,
		`${basePath}/images/Image3D/image3d2-3.png`,
	];

	const images3 = [
		`${basePath}/images/Image3D/image3d3-1.png`,
		`${basePath}/images/Image3D/image3d3-2.png`,
	];

	const images4 = [
		`${basePath}/images/Image3D/image3d4-1.png`,
		`${basePath}/images/Image3D/image3d4-2.png`,
	];

	const images5 = [
		`${basePath}/images/Image3D/image3d5-1.png`,
		`${basePath}/images/Image3D/image3d5-2.png`,
	];

	const images6 = [
		`${basePath}/images/Image3D/image3d6-1.png`,
		`${basePath}/images/Image3D/image3d6-2.png`,
	];

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<Parallax />
				<SampleVideo />
				<ColumnSection
					conClass='ph-trigger'
					images={images1}
					direction='reverse'>
					<>
						<h2 className='heading-4'>
							A resilient and globally competitive Philippines
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
							accumsan lacus vel facilisis.
						</p>
					</>
					<></>
				</ColumnSection>
				<ColumnSection conClass='tao-trigger' images={images2}>
					<>
						<h2 className='heading-4'>
							A resilient and globally competitive Philippines
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
							accumsan lacus vel facilisis.
						</p>
					</>
					<></>
				</ColumnSection>
				<OurBusinesses />
				<div className='heart-trigger'>
					<div className='section-content'>
						<div className='container-fuild-width small text-center'>
							<h2 className='heading-3'>
								World We Want aut officiis debitis <br />
								aut rerum
							</h2>
						</div>
					</div>
					<ColumnSection images={images3} direction='reverse'>
						<>
							<h2 className='heading-4'>Economic</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.
							</p>
						</>
						<></>
					</ColumnSection>
					<ColumnSection images={images4} direction=''>
						<>
							<h2 className='heading-4'>Environmental</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.
							</p>
						</>
						<></>
					</ColumnSection>
					<ColumnSection images={images5} direction='reverse'>
						<>
							<h2 className='heading-4'>Governance</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.
							</p>
						</>
						<></>
					</ColumnSection>
					<ColumnSection images={images6} direction=''>
						<>
							<h2 className='heading-4'>Social</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis.
							</p>
						</>
						<></>
					</ColumnSection>
				</div>
				<PageCTA />
			</Curve>
		</>
	);
}