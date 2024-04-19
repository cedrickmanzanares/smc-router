'use client';

import Fade from '@/components/Layout/Fade';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

export default function SharePrices({ title }) {
	return (
		<Fade>
			<PageBanner title={'Share Prices'} noBg={true} />
		</Fade>
	);
}
