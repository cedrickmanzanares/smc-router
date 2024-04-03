'use client';

import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

export default function DividendHistory() {
	return (
		<Curve>
			<PageBanner title={'Dividend History'} noBg={true} />
		</Curve>
	);
}
