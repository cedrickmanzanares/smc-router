import Head from 'next/head';
import Fade from '@/components/Layout/Fade';

import PageTitle from '@/cms-components/PageTitle/PageTitle';

import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import VideoContent from '@/cms-components/VideoContent/Video';
import Section from '@/cms-components/Section/Section';
import Column from '@/cms-components/Column/column';
export default function CompanyOfficers() {
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
			<Fade>
				<PageBanner title={'Company Officers'} direction='center' />

				<Section
					columnCount={3}
					containerStyle={{ lineHeight: 1.5, gap: '3rem' }}>
					<Column columnClasses='full'>
						<p>
							<b>
								Ramon S. Ang
								<br />
							</b>
						</p>
						<p>Vice Chairman, President and Chief Executive Officer</p>
					</Column>
					<Column>
						<p>
							<b>
								Ferdinand K. Constantino
								<br />
							</b>
						</p>
						<p>Chief Finance Officer-Treasurer</p>
					</Column>
					<Column>
						<p>
							<b>
								Virgilio S. Jacinto
								<br />
							</b>
						</p>
						<p>Corporate Secretary and Compliance Officer</p>
					</Column>
					<Column>
						<p>
							<b>
								Mary Rose S. Tan
								<br />
							</b>
						</p>
						<p>Assistant Corporate Secretary</p>
					</Column>
					<Column columnClasses='full'>
						<h2 className='heading-5'>
							<b>San Miguel Food and Beverage, Inc.</b>
						</h2>
					</Column>
					<Column>
						<p>
							<b>Emmanuel B. Macalalag</b>
						</p>
						<p>
							Chief Operating Officer - Spirits
							<br />
							General Manager, Ginebra San Miguel Inc.
						</p>
					</Column>
					<Column>
						<p>
							<b>
								Francisco S. Alejo III
								<br />
							</b>
						</p>
						<p>
							Chief Operating Officer - Food
							<br />
							President, San Miguel Foods
						</p>
					</Column>
					<Column>
						<p>
							<b>
								Carlos Antonio M. Berba
								<br />
							</b>
						</p>
						<p>OIC, San Miguel Brewery Inc.</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							San Miguel Yamamura Packaging Corporation
						</h3>
						<p>
							<b>Ferdinand A. Tumpalan</b>
						</p>
						<p>President</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							<b>Petron Corporation</b>
						</h3>
						<p>
							<b>Lubin B. Nepomuceno</b>
						</p>
						<p>General Manager</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							<b>SMC Global Power Holdings Corp.</b>
						</h3>
						<p>
							<b>Elenita D. Go</b>
							<br />
						</p>
						<p>General Manager</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							<b>San Miguel Holdings Corp.</b>
						</h3>
						<p>SMC Infrastructure Business</p>
						<p>
							<b>
								Lorenzo G. Formoso III
								<br />
							</b>
						</p>
						<p>Senior Vice President and Head</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							<b>San Miguel Properties, Inc.</b>
						</h3>
						<p>
							<b>
								Karen V. Ramos
								<br />
							</b>
						</p>
						<p>General Manager</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							<b>Northen Cement Corporation</b>
						</h3>
						<p>
							<b>
								Rodelia S. Sarrosa
								<br />
							</b>
						</p>
						<p>Officer-in-charge</p>
					</Column>
					<Column>
						<h3 className='heading-6'>
							<b>Eagle Cement Corporation</b>
						</h3>
						<p>
							<b>
								John Paul L. Ang
								<br />
							</b>
						</p>
						<p>President</p>
					</Column>
				</Section>
			</Fade>
		</>
	);
}
