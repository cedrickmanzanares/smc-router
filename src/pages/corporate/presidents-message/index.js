import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import PageTitle from '@/cms-components/PageTitle/PageTitle';

import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import VideoContent from '@/cms-components/VideoContent/Video';
import Section from '@/cms-components/Section/Section';
export default function PresidentsMessage() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={"President's Message"} direction='center' />

				<Section columnCount={3}>
					<div className='column text-content'>
						<div class='float float-left'>
							<div class='img-container'>
								<img
									src={`${basePath}/images/Corporate/RSA.jpg`}
									data-filename='SMC President and CAO Ramon S Ang.jpg'
								/>
							</div>
							<div class='caption' style={{ textAlign: 'center' }}>
								<p style={{ margin: '1rem 0 0 0' }}>
									<b>Ramon S. Ang</b>&nbsp;
								</p>
								<p className='small-text' style={{ marginTop: '0' }}>
									<i>President and Chief Operating Officer</i>
								</p>
							</div>
						</div>

						<h2>
							<b>WE DO WHAT IT TAKES</b>
						</h2>
						<h4>
							<b>Message from our President and CEO</b>
							<br />
						</h4>
						<p>
							In our recent history, no period has been more challenging than
							these last three years. Like the rest of the world, we have been
							dealing with multiple challenges: the aftermath of COVID‑19, its
							impact on business and supply chains, the economic fallout from
							the war in Ukraine, particularly its knock‑on effect on energy
							prices and inflationary pressures. And yet, in true San Miguel
							fashion, we emerged more resilient and determined than ever to
							deliver on our major plans that will help protect our company and
							our country from such future shocks. In 2022, we crossed the
							trillion‑peso revenue threshold and passed our pre‑pandemic, full
							year 2019 performance in just nine months. We closed the year with
							P1.5 trillion in consolidated revenues, 60% higher than the
							previous year, and 48% better than in 2019.
						</p>
						<p>
							Our continuing efforts to manage costs and mitigate marked
							increases in raw material prices, supply shortages, and higher
							inflation resulted in a 10% improvement in our operating income,
							which reached P134.5 billion. However, extraordinary conditions
							triggered by the Russia‑Ukraine war, including higher forex
							volatility, weighed down our bottom line. While our consolidated
							core net income ended at P43.2 billion, unrealized losses on the
							revaluation of our foreign currency‑denominated obligations
							resulted in a reported net income of P26.8 billion. Today, our
							main goal is to help build not just a stronger, more resilient
							economy, but one keenly focused on meeting current needs and the
							demands of tomorrow.
						</p>
						<p>
							Our decades of experience serving Filipino consumers and building
							infrastructure that drive our vital industries, have taught us
							that helping our country move forward requires taking the long
							view. We can be proud that we have consistently shown our
							willingness to do what it takes to help solve our country’s
							problems. We equate doing what it takes to San Miguel’s culture of
							malasakit, which makes it standard practice for us to go beyond
							expectations, and to give even more in times of great need. Doing
							what it takes means we go beyond our immediate business concerns,
							and ensure that underlying problems in our areas of operations are
							addressed, so our projects can benefit as many as possible. For
							us, it is better to invest all we can in our country today,
							because this will make us more sustainably profitable for the
							longer term.
						</p>
						<p>
							<b>Food security—the continued growth of our core businesses. </b>
							<br />
						</p>
						<p>
							With demand for food and beverages already outpacing current local
							capacities, we have seen the need to take greater control of
							critical aspects of our businesses. Over the last few years, we
							have been working to fully integrate key business activities. At
							San Miguel Food and Beverage, Inc. (SMFB), this enables us to
							invest in state‑of‑the‑art technologies and processes to improve
							our businesses’ capability to serve the evolving needs of their
							growing customer base.
						</p>
						<p>
							Fellow stockholders, in our recent history, no period has been
							more challenging than these last three years. Like the rest of the
							world, we have been dealing with multiple challenges: the
							aftermath of COVID‑19, its impact on business and supply chains,
							the economic fallout from the war in Ukraine, particularly its
							knock‑on effect on energy prices and inflationary pressures. And
							yet, in true San Miguel fashion, we emerged more resilient and
							determined than ever to deliver on our major plans that will help
							protect our company and our country from such future shocks. In
							2022, we crossed the trillion‑peso revenue threshold and passed
							our pre‑pandemic, full year 2019 performance in just nine months.
							We closed the year with P1.5 trillion in consolidated revenues,
							60% higher than the previous year, and 48% better than in 2019.
							Our continuing efforts to manage costs and mitigate marked
							increases in raw material prices, supply shortages, and higher
							inflation resulted in a 10% improvement in our operating income,
							which reached P134.5 billion. However, extraordinary conditions
							triggered by the Russia‑Ukraine war, including higher forex
							volatility, weighed down our bottom line. While our consolidated
							core net income ended at P43.2 billion, unrealized losses on the
							revaluation of our foreign currency‑denominated obligations
							resulted in a reported net income of P26.8 billion. Today, our
							main goal is to help build not just a stronger, more resilient
							economy, but one keenly focused on meeting current needs and the
							demands of tomorrow.
						</p>
						<p>
							With this, we will be better positioned to overcome the many
							challenges to achieving food security while delivering on our
							promise of quality and affordability. Similarly, an integrated
							supply and value chain will support SMFB’s ability to open up
							economic opportunities in key regions. In 2022, San Miguel Foods
							began construction on our San Miguel Food Complex in Davao, which
							will have grains storage, feed mill, flour mill, processed meat,
							and poultry facilities, including a broiler and breeder farm and
							hatchery. We plan to build several mega poultry plants in
							strategic locations nationwide over the next 10 years. This will
							bring down logistical costs, making food products more affordable
							for consumers. Our expansion efforts in the poultry segment will
							help safeguard against supply shortages and provide more stable
							pricing. With modern processes and technologies, we can also
							ensure higher levels of safety and quality, and better animal
							health and protection. This is part of our larger push to boost
							food security nationwide, which started with the expansion of our
							beer, feeds, value‑added meats, ready‑to‑eat, and logistics
							businesses in the last couple of years.
						</p>
						<p>
							San Miguel Brewery Inc. (SMB), whose domestic and international
							businesses took a significant hit due to pandemic restrictions,
							has retained its strong pull among consumers. Having released new
							products that have strengthened and diversified its product
							portfolio, SMB has reliably delivered strong revenue, profit, and
							volume growth. Ginebra San Miguel, Inc. (GSMI) bucked the trend,
							delivering record revenues, volumes, and profits year after year
							despite the pandemic. Its strong flagship brands, multi‑category
							portfolio, and loyal following among consumers in key markets,
							help ensure GSMI will continue to widen its reach and grow its
							market share. Among our businesses, SMB and GSMI have had the
							longest and strongest connections with Filipino consumers, being
							part of life’s celebrations. We are glad that through our beverage
							products, we have helped revive flagging downstream industries in
							the three years of the pandemic.
						</p>
						<p>
							<b>Energy and fuel security and sustainability</b>
							<br />
						</p>
						<p>
							Regional development has always been a key part of our overall
							strategy. As we move forward with our next‑stage projects, we’re
							focusing more and more on major investments in our provinces, not
							just in agriculture and manufacturing but, more crucially, in
							power. The lack of sufficient and stable power is a significant
							barrier to regional growth.
						</p>
						<p>
							San Miguel Global Power (SMGP) aims to provide access to stable,
							reliable energy, while also taking on the challenge of
							decarbonization. Given our 2050 net zero goal—outlined in our 2022
							Sustainability Report—our strategy starts with increased
							investments in transition technologies and reconfiguring our coal
							facilities to accommodate alternative fuels. SMGP will invest in
							and deliver on these transition capacities in the next five years.
							By the end of 2023, we will complete 610 MW of the total 1,000 MW
							target capacity of our nationwide Battery Energy Storage System
							(BESS), with the remainder to be completed in 2024. BESS will
							ensure a balanced distribution of power across the national grid.
							This translates to significant economic potential for unserved and
							underserved areas. BESS can also aggregate, store, and dispatch
							supply from small‑ to medium‑scale renewable solar or wind
							facilities. With BESS in place, our plans to expand our renewable
							capacities will now advance. Our first‑ever solar power project is
							already in the pipeline, targeted for completion in the next few
							years. Expanding our Liquefied Natural Gas (LNG) capacities is
							also critical to our transition strategy. It aligns with the
							government’s direction and supports our efforts to strengthen
							energy security. We’ve already made significant progress in
							ramping up our LNG capacity. Construction of our 1,313.1‑MW
							Batangas Combined Cycle Power Plant is ongoing and is set for
							completion by 2024.
						</p>
						<p>
							Meanwhile, our fuels subsidiary, Petron Corporation, which
							operates our country’s only remaining refinery, also plays a
							critical role in fuel supply security. And like power, our fuel
							business is a main driver of our economy, vital to industries like
							transportation, aviation, manufacturing, and others. The
							resumption of economic activity, which fueled Petron’s recovery
							for the second straight year, also highlights its importance to a
							developed Philippines. Maximizing the capabilities of our
							world‑class refinery is part of Petron’s overall strategy. This
							includes resuming operations of our petrochemical plant and
							constructing a new coco‑methyl ester (CME) facility. The CME plant
							will enable us to source raw materials from our farmers, boosting
							local economies and helping us attain higher margins for diesel.
						</p>
						<p>
							<b>Connecting economic growth centers </b>
							<br />
						</p>
						<p>
							With our substantial investments in food, energy, and fuel
							security, the next major challenge is improving connectivity among
							our country’s regional growth centers. More specifically, we want
							to advance trade, transportation, and tourism for highly‑urbanized
							regions and areas that have fallen behind growth and development.
							At the center of our push to transform the Philippines into a
							regional hub and major tourist destination are our New Manila
							International Airport (NMIA) project and its interconnecting
							infrastructure network. The past year has been significant for
							NMIA, with 55.33% of land development now complete.
						</p>
						<p>
							With a strong emphasis on mitigating environmental and social
							impacts, the project continuously meets stringent international
							performance standards, ensuring it will be a model for sustainable
							development. We expect substantial completion of the land platform
							by December 2024, and we are looking to jumpstart other work
							streams, such as the terminal and runways, by early next year.
						</p>
						<p>
							Among the things that will truly set the NMIA project apart is its
							accessibility and connectivity— with planned infrastructure
							projects designed to provide direct access to the airport and
							seamless interconnectivity between provinces. The Toll Regulatory
							Board approved Supplemental Toll Operating Agreements for two
							major connections: the Northern Access Link (NALEX) and Southern
							Access Link (SALEX) expressways. NALEX will start from Skyway
							Stage 3 in Balintawak and traverse various municipalities in
							Bulacan, connect to the NMIA, and continue on to the
							Tarlac‑Pangasinan‑La Union Expressway (TPLEX). The SALEX project,
							on the other hand, is seen to decongest EDSA and other major
							roads, and will provide a direct connection to the NMIA from
							Manila, Makati, and Quezon City, complementing the existing Skyway
							system. Meanwhile, our other ongoing infrastructure
							projects—MRT‑7, South Luzon Expressway Toll Road 4 (SLEX‑TR4), and
							the SLEX‑TR5 are progressing well, underscoring the importance we
							place on regional development.
						</p>
						<p>
							<b>Adapting to change </b>
							<br />
						</p>
						<p>
							If there’s anything we know about our company, it’s that we
							embrace and thrive on change. While many of the projects that will
							define the San Miguel of the future are now in place, we’re also
							very much aware that we live in a time of rapid change. While we
							may have a solid long‑term strategy, disruption can always happen.
							Given all that has happened the last three years and taking into
							full consideration the changed world we’ve all woken up to, 2022
							was the opportune time for us to take stock of where we are, what
							we’ve accomplished, and how we intend to navigate the challenges
							of the future. The more we work to address critical issues
							confronting Filipinos, the more we see how large of an impact we
							can truly make, and how urgent it is to embrace the practice of
							sustainability in San Miguel.
						</p>
						<p>
							<b>Our sustainability agenda and new vision and purpose</b>
							<br />
						</p>
						<p>
							In 2022, we took significant steps to advance our sustainability
							journey. With the help of PricewaterhouseCoopers (PwC), SMC and
							our subsidiaries underwent a comprehensive process that raised our
							sustainability agenda to global standards. This process has
							resulted in a series of important initiatives that
							institutionalize and further strengthen the practice of
							sustainability across the entire San Miguel Group.
						</p>
						<p>
							First, we established the Corporate Sustainability Office (CSO) at
							the parent level, under the Office of the President and CEO. The
							CSO now leads our Group‑wide Sustainability Working Team,
							comprised of champions across our businesses. Second, we
							identified four major sustainability targets our businesses have
							since committed to. The goals, which comprise emissions, supply
							chain, social upliftment, and circular economy targets, are
							outlined in the latter part of this report and are discussed in
							our Sustainability Report (SR). This year’s SR references Global
							Reporting Index (GRI) standards and a good part of the
							Sustainability Accounting Standards Board’s (SASB) standards.
						</p>
						<p>
							Finally, our new Vision and Purpose statements show who we are
							today and how we show up in this changed world. Articulated in the
							succeeding pages, they reflect how we are driven by our
							aspirations for our company, and our ambition for our country—on
							whose stability, growth, and prosperity our success ultimately
							lies. Taken together with our sustainability roadmap, it’s a
							growth plan rooted in our purpose to help build a better
							Philippines. For this reason and much more, I am proud and excited
							to lead us into the next chapter of San Miguel’s history.
						</p>
						<p>
							<b>
								RAMON S. ANG
								<br />
								President and CEO
							</b>
							<br />
						</p>
					</div>
				</Section>
			</Curve>
		</>
	);
}
