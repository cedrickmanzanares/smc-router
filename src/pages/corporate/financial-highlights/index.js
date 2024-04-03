'use client';

import PDFItem from '@/cms-components/PDFItem/PDFItem';

import { getColors } from '@/hooks/use-color';

import Curve from '@/components/Layout/Curve';

import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import { Flex } from '@chakra-ui/layout';
import { FormControl, Input, Select } from '@chakra-ui/react';
import { PiCaretCircleLeft, PiCaretCircleRight } from 'react-icons/pi';

export default function FinancialHighlights({}) {
	const { baseBlack, gray2, red } = getColors;

	const footerIcon = {
		size: '1.75rem',
		color: baseBlack,
	};

	const src = './videos/sample-video.mp4';
	const years = [
		2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
	].reverse();
	return (
		<Curve>
			<PageBanner title={'Financial Highlights'} noBg={true} />
			<Section>
				<Flex gap={5} mb={10}>
					<FormControl ml={'auto'} w={'auto'}>
						<Input placeholder='Enter Keyword' />
					</FormControl>
					<FormControl w={'auto'}>
						<Select placeholder='Select Year'>
							<option>United Arab Emirates</option>
							<option>Nigeria</option>
						</Select>
					</FormControl>
				</Flex>
				<div className='column'>
					<table class='table'>
						<tbody>
							<tr class='upper table__header'>
								<th>
									For the period ended 1H2023 (In Million Pesos, except per
									share and statistical data)
								</th>
								<th>&nbsp;</th>
								<th>1H2023</th>
							</tr>
							<tr>
								<td>Sales</td>
								<td>&nbsp;</td>
								<td>685,229</td>
							</tr>
							<tr>
								<td>Income from Operating Activities</td>
								<td>&nbsp;</td>
								<td>69,921</td>
							</tr>
							<tr>
								<td>
									Net Income attributable to equity holders of the Parent
									Company
								</td>
								<td>&nbsp;</td>
								<td>757</td>
							</tr>
							<tr>
								<td>Basic Earnings per share (absolute amount)</td>
								<td></td>
								<td class='td-yellow'>(0.84)</td>
							</tr>
							<tr>
								<td>Cash Dividend declared</td>
								<td>&nbsp;</td>
								<td>4,424</td>
							</tr>
							<tr class='force-white'>
								<td>
									Cash Dividend declared per common share per quarter (absolute
									amount)
								</td>
								<td>&nbsp;</td>
								<td>0.35</td>
							</tr>
							<tr class='force-white'>
								<td>
									Cash Dividend declared per preferred share per quarter
									(absolute amount):
								</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr class='force-white'>
								<td>&nbsp;SMCP2F</td>
								<td>&nbsp;</td>
								<td>1.276350</td>
							</tr>
							<tr class='force-white'>
								<td>&nbsp;SMCP2I</td>
								<td>&nbsp;</td>
								<td>1.187906</td>
							</tr>
							<tr class='force-white'>
								<td>&nbsp;SMCP2J</td>
								<td>&nbsp;</td>
								<td>0.890625</td>
							</tr>
							<tr class='force-white'>
								<td>&nbsp;SMCP2K</td>
								<td>&nbsp;</td>
								<td>0.843750</td>
							</tr>
						</tbody>
					</table>
					<table class='table'>
						<tbody>
							<tr>
								<th>As of 1H2023</th>
								<th>&nbsp;</th>
								<th>&nbsp;</th>
							</tr>
							<tr>
								<td>Total Assets</td>
								<td>&nbsp;</td>
								<td>2,367,402</td>
							</tr>
							<tr>
								<td>Property, Plant &amp; Equipment-net</td>
								<td>&nbsp;</td>
								<td>728,164</td>
							</tr>
							<tr class='force-white'>
								<td>
									Equity Attributable to Equity Holders of the Parent Company
								</td>
								<td>&nbsp;</td>
								<td>278,207</td>
							</tr>
							<tr>
								<td>Stockholder’s equity</td>
								<td>&nbsp;</td>
								<td>633,462</td>
							</tr>
							<tr class='force-white'>
								<td>
									Equity Per Share Attributable to Equity Holders of Parent
									Company:
								</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr class='force-white'>
								<td>&nbsp; &nbsp;- Common</td>
								<td>&nbsp;</td>
								<td>79.54</td>
							</tr>
							<tr>
								<td>&nbsp; &nbsp;- Preferred</td>
								<td></td>
								<td>75.00</td>
							</tr>
							<tr class='force-gray'>
								<td>Number of Common Shares Outstanding:</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
							<tr class='force-gray'>
								<td>
									<span>&nbsp;&nbsp;&nbsp;-&nbsp;</span>Net of treasury Shares
									(absolute number)
								</td>
								<td>&nbsp;</td>
								<td>2,383,896,588</td>
							</tr>
							<tr class='force-white'>
								<td>Number of Stockholders (common &amp; preferred)</td>
								<td>&nbsp;</td>
								<td>32,488</td>
							</tr>
							<tr class='force-gray'>
								<td>Number of Employees*</td>
								<td>&nbsp;</td>
								<td>51,132</td>
							</tr>
						</tbody>
					</table>
					<table class='table'>
						<tbody>
							<tr>
								<th>Financial Statistics</th>
								<th>&nbsp;</th>
								<th>&nbsp;</th>
							</tr>
							<tr>
								<td>% of Return on Average Stockholder’s Equity</td>
								<td>&nbsp;</td>
								<td>-3.86%</td>
							</tr>
							<tr>
								<td>Current Ratio</td>
								<td>&nbsp;</td>
								<td>1.21%</td>
							</tr>
							<tr>
								<td>Debt/Equity Ratio</td>
								<td>&nbsp;</td>
								<td>2.74%</td>
							</tr>
						</tbody>
					</table>
					<p>*As of June 30, 2023</p>
				</div>
			</Section>
		</Curve>
	);
}
