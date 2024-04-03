import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

import Section from '@/cms-components/Section/Section';
export default function TotalOutstandingShares() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner
					title={'Total Outstanding Shares'}
					noBg='true'
					containerSize='small'
				/>

				<Section containerSize='small' columnCount={3}>
					<div className='column text-content'>
						<p>
							Latest data: As of June 30, 2023
							<br />
							*Updated Quarterly; will update once received
						</p>
						<table class='table'>
							<tbody>
								<tr>
									<td>Number of Issued Common Shares</td>
									<td>3,288,649,125</td>
								</tr>
								<tr>
									<td>Number of Outstanding Common Shares</td>
									<td>2,383,896,588</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Section>
			</Curve>
		</>
	);
}
