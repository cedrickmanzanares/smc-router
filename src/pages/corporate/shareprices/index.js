'use client';

import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

export default function SharePrices({ title }) {
	return (
		<Curve>
			<PageBanner title={'Share Prices'} noBg={true} />
		</Curve>
	);
}
