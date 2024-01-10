import Head from 'next/head';
import Curve from '@/components/Layout/Curve';
import Parallax from '@/components/Parallax/parallax';
import SampleVideo from '@/components/SampleVideo/sample-video';
import OurBusinesses from '@/cms-components/OurBusinesses/OurBusinesses';

import {
	animate,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { getColors } from '@/hooks/use-color';
import Card from '@/components/card/card';
import Button from '@/components/button/button';
import PageCTA from '@/cms-components/PageCTA/PageCTA';
import PageTitle from '@/cms-components/PageTitle/PageTitle';
import div from '@/components/single-parallax/single-parallax';
import { useDimensions } from '@/hooks/use-dimension';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import TextGradient from '@/cms-components/TextGradient/TextGradient';
import SingleParallax from '@/components/single-parallax/single-parallax';
import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
export default function OurValues() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageTitle title='Our' split='Values' horizontal='center' />
				<FullPageBanner>
					<video
						style={{
							height: '100%',
							width: '100%',
						}}
						preload='auto'
						poster={`${basePath}/videos/615559faf380d-poster.png`}
						playsInline
						controls
						src={`${basePath}/videos/615559faf380d.mp4`}></video>
				</FullPageBanner>

				<div className='section-content'>
					<div className='container-fluid-width small'>
						<h2 className='heading-4 split-color'>
							Malasakit is at the core <b>of who we are as a company</b>
						</h2>
						<h3 className='heading-6'>We do what is right</h3>
						<p>
							We believe in profit with honor. For us, this simply means doing
							what we’ll say we’ll do and acting with honesty, fairness and
							integrity.
						</p>

						<h3 className='heading-6'>We believe in doing our best</h3>
						<p>
							We will give every single person we touch the best we can offer.
							We are passionate about our brands, products and services.
						</p>

						<h3 className='heading-6'>
							We take accountability for our decisions
						</h3>
						<p>
							We hold ourselves accountable for delivering results, we keep to
							our commitments and we take responsibility for our actions.
						</p>

						<h3 className='heading-6'>We think innovation</h3>
						<p>
							Our innovation lends us agility and is driven by our understanding
							of what our customers and stakeholders need.
						</p>

						<h3 className='heading-6'>We help our people succeed</h3>
						<p>
							We believe in treating each other with respect. We cultivate a
							culture that recognizes the individuality and contributions of
							each of our employees, helping them to become productive and
							responsible members of society.
						</p>

						<h3 className='heading-6'>We are a good neighbor</h3>
						<p>
							We are a positive force in our communities. We believe in doing
							what is good for the greatest number of people.
						</p>

						<h3 className='heading-6'>We advocate sustainable development</h3>
						<p>
							We believe in using only what we need and integrating
							sustainability practices into our operations. Water stewardship,
							energy optimization and reducing waste are our key environmental
							priorities.
						</p>
					</div>
				</div>
			</Curve>
		</>
	);
}
