'use client';

import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';

import { PiCaretCircleRight } from 'react-icons/pi';
import Button from '@/components/button/button';

import { basePath } from '@/hooks/use-basepath';
import Section from '@/cms-components/Section/Section';
import Link from 'next/link';
export default function FinancialStatement() {
	return (
		<Curve>
			<PageBanner title='Financial Statement' direction='center'></PageBanner>
			<Section>
				<div className='column'>
					<table class='table'>
						<thead>
							<tr>
								<th colspan='2'>17-A (Annual Report)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan='2'>
									<b>2022</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 4 (SMC Parent FS)</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC - SEC FORM 17-A Part 4 - SMC Parent FS.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 3</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC - SEC FORM 17-A Part 3 (04.17.2023).pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 2</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC - SEC FORM 17-A  Part 2 (04.17.2023).pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 1</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC - SEC FORM 17-A Part 1 (04.17.2023) .pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2021</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 4 (SMC Parent FS)</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/2021 SAN MIGUEL CORPORATION PARENT AUDITED FINANCIAL STATEMENT (04.25.2022).pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 3</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-SEC FORM 17-A (04.25.2022) Part 3-FINAL.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 2</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-SEC FORM 17-A (04.25.2022) Part 2-FINAL.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 1</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-SEC FORM 17-A (04.25.2022) Part 1-FINAL.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2020</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 3</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-SEC_FORM_17A_04.16_.2021_Part_3_-_FINAL_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 2</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-SEC_FORM_17A_04.16_.2021_Part_2-FINAL_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements - Part 1</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-SEC_FORM_17A_04_16_2021_Part_1_-FINAL.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2019</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC_Amended_SEC_Form_17A_with_Sustainability_Report__30_June_2020.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2018</b>
								</td>
							</tr>
							<tr>
								<td> Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC_17A_04.12_.2019_-_Full_Report_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2017</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements A</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC_17A_04.16_.2018_(A)_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements B</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC_17A_04.16_.2018_(B)_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2016</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC_17A_04.10_.2016_FINAL_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2015</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/smc_files/disclosures/2016/17A/2015-SMC-17A-04.14.16.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2014</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-17-A-Final_04.15_.14_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2013</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/SMC-17-A-Final04.15_.14_.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2012</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/2012_SMC_17-A.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2011</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/2011_SMC_17-A.pdf'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2010</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/2010_SMC_17-A.PDF'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2009</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/2009_SMC_17-A.PDF'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
							<tr>
								<td colspan='2'>
									<b>2008</b>
								</td>
							</tr>
							<tr>
								<td>Full Year Financial Statements</td>
								<td>
									<a
										href='https://www.sanmiguel.com.ph/storage/files/reports/2008_SMC_17-A.PDF'
										target='_blank'
										without='true'
										rel='noreferrer'>
										View/Download
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Section>
		</Curve>
	);
}
