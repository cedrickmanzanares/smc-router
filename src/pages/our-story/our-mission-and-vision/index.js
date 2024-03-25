import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import { getColors } from '@/hooks/use-color';

import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';

export default function OurMissionAndVison() {
	const { gray2, red } = getColors;

	const icon = {
		size: '1rem',
	};
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Curve>
				<PageBanner title={'Our Mission & Vision'} direction='center' />
				<Section>
					<div className='column'>
						<div className='text-content'>
							<p>Test</p>
						</div>
					</div>
				</Section>
			</Curve>
		</>
	);
}
