import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

import Section from '@/cms-components/Section/Section';
export default function BoardCommittees() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={'Analyst Coverage'} noBg='true' />

				<Section columnCount={3}>
					<div className='column text-content'>
						<table class='table text-center'>
							<tbody>
								<tr class='upper table__header'>
									<th>Name</th>
									<th>Company</th>
									<th>Email Address</th>
								</tr>
								<tr>
									<td>Aaron Darren C. Uy</td>
									<td>RCBC</td>
									<td>
										<a
											href='mailto:acuy@rcbc.com'
											target='_blank'
											rel='noopener'>
											acuy@rcbc.com
										</a>
									</td>
								</tr>
								<tr>
									<td>Angelo Antonio S. Torres</td>
									<td>BPI Securities</td>
									<td>
										<a
											href='mailto: aastorres@bpi.com.ph'
											target='_blank'
											rel='noopener'>
											aastorres@bpi.com.ph
										</a>
									</td>
								</tr>
								<tr>
									<td>Jonathan J. Latuja</td>
									<td>PNB</td>
									<td>
										<a
											href='mailto:latujajj@pnb.com'
											target='_blank'
											rel='noopener'>
											latujajj@pnb.com
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Section>
			</Curve>
		</>
	);
}
