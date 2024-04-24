import Column from '@/cms-components/Column/column';
import PDFWidget from '@/cms-components/PDFWidget/PDFWidget';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import Section from '@/cms-components/Section/Section';
import Fade from '@/components/Layout/Fade';
import { SimpleGrid } from '@chakra-ui/layout';

export default function CompanyPolicies() {
	return (
		<Fade>
			<PageBanner title={'Company Policies'} noBg={true} />
			<Section columnCount={2}>
				<div className='column'>
					<SimpleGrid columns={[1, 2, 4]} gap={[8, 8, 8]}>
						<PDFWidget
							headingSize='heading-5'
							title={'Policy on solicitation or acceptance of gifts'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Code of conduct and ethical business policy'}
							link={'/disclosures/inner'}
						/>

						<PDFWidget
							headingSize='heading-5'
							title={'Anti-corruption and sanctions compliance policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Policy on conflict of interest'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Policy on related party transactions'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Policy on dealings in securities'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Diversity, equity, and inclusion policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Board diversity policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Anti-sexual harassment policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Policy on child and forced labor'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Personal data privacy policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Health and safety policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Environment policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Freedom of association policy'}
							link={'/disclosures/inner'}
						/>
						<PDFWidget
							headingSize='heading-5'
							title={'Supplier code of conduct'}
							link={'/disclosures/inner'}
						/>
					</SimpleGrid>
				</div>
				<Column columnClasses={'full'}>
					<h2 className='heading-2'>Whistle-blowing policy</h2>
					<p>
						<strong>Whistleblower Relations Officer</strong>
						<br />
						Office number: (+632) 8632-3000
						<br />
						E-mail address:{' '}
						<a href='mailto:smcwhistleblower@sanmiguel.com.ph'>
							smcwhistleblower@sanmiguel.com.ph
						</a>
						<br />
						Address: 40 San Miguel Avenue Ortigas Center, Mandaluyong City 1550
						<br />
					</p>
				</Column>
				<Column>
					<PDFWidget
						headingSize='heading-5'
						title={'SMC Policy on Whistle Blowing.'}
						link={'/disclosures/inner'}
					/>
				</Column>
				<Column>
					<PDFWidget
						headingSize='heading-5'
						title={'Whistle-Blowing Form'}
						link={'/disclosures/inner'}
					/>
				</Column>
			</Section>
		</Fade>
	);
}
