import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import PageTitle from '@/cms-components/PageTitle/PageTitle';

import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import VideoContent from '@/cms-components/VideoContent/Video';
import Section from '@/cms-components/Section/Section';
export default function BoardOfDirectors() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={'Board of Directors'} direction='center' />

				<Section containerSize='small' columnCount={3}>
					<div className='column text-content full'>
						<p>
							<b>Ramon S. Ang</b>
						</p>
						<p>
							Vice Chairman, President and Chief Executive Officer
							<br />
							Vice Chairman, Executive Committee
						</p>
					</div>
					<div className='column'>
						<p>
							<b>John Paul L. Ang</b>
						</p>
					</div>
					<div className='column'>
						<p>
							<b>Aurora T. Calderon</b>
						</p>
						<p>Member, Corporate Governance Committee</p>
					</div>
					<div className='column'>
						<p>
							<b>Joselito D. Campos, Jr.</b>
						</p>
						<p>Member, Related Party Transactions Committee</p>
					</div>
					<div className='column'>
						<p>
							<b>Jose C. de Venecia, Jr.</b>
						</p>
					</div>
					<div className='column'>
						<p>
							<b>Menardo R. Jimenez</b>
						</p>
						<p>
							Member, Executive Committee
							<br />
							Member, Corporate Governance Committee
						</p>
					</div>
					<div className='column'>
						<p>
							<b>Estelito P. Mendoza</b>
						</p>
						<p>
							Member, Executive Committee
							<br />
							Member, Audit and Risk Oversight Committee
						</p>
					</div>
					<div className='column'>
						<p>
							<b>
								Alexander J. Poblador
								<br />
							</b>
						</p>
						<p>Member, Related Party Transactions Committee</p>
					</div>
					<div className='column'>
						<p>
							<b>Thomas A. Tan</b>
						</p>
					</div>
					<div className='column'>
						<p>
							<b>Ramon F. Villavicencio</b>
						</p>
					</div>
					<div className='column'>
						<p>
							<b>
								Iñigo Zobel
								<br />
							</b>
						</p>
						<p>Member, Executive Committee</p>
					</div>
					<div className='column'>
						<p>
							<b>Teresita J. Leonardo-De Castro</b>
						</p>
						<p>
							Independent Director
							<br />
							Chairman, Related Party Transactions Committee <br />
							Member, Audit and Risk Oversight Committee
						</p>
					</div>
					<div className='column'>
						<p>
							<b>Reynato S. Puno</b>
						</p>
						<p>
							Independent Director
							<br />
							Chairman, Corporate Governance Committee
							<br />
							Member, Audit and Risk Oversight Committee
							<br />
							Member, Related Party Transactions Committee
						</p>
					</div>
					<div className='column grow-limit'>
						<p>
							<b>Margarito B. Teves</b>
						</p>
						<p>
							Independent Director
							<br />
							Chairman, Audit and Risk Oversight Committee
							<br />
							Member, Related Party Transactions Committee
							<br />
							Member, Corporate Governance Committee
						</p>
					</div>
					<div className='column grow-limit'>
						<p>
							<b>Diosdado M. Peralta</b>
						</p>
						<p>
							Independent Director
							<br />
							Member, Audit and Risk Oversight Committee
							<br />
							Member, Corporate Governance Committee
							<br />
						</p>
					</div>
				</Section>
			</Curve>
		</>
	);
}
