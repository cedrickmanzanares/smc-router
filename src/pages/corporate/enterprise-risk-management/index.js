import Head from 'next/head';
import Curve from '@/components/Layout/Curve';

import PageTitle from '@/cms-components/PageTitle/PageTitle';

import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import VideoContent from '@/cms-components/VideoContent/Video';
import Section from '@/cms-components/Section/Section';
export default function SMCPrivacy() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Curve>
				<PageBanner title={'Enterprise Risk Management'} direction='center' />

				<Section columnCount={3}>
					<div className='column text-content'>
						<p>
							Section 2.2.1.3.2. of the Company’s Manual on Corporate
							Governance, adopted on May 10, 2017, contains the Company’s policy
							on Enterprise Risk Management. The Board of Directors of the
							Company shall oversee that a sound enterprise risk management
							(&quot;ERM&quot;) framework is in place to effectively identify,
							monitor, assess and manage key business risks, which will guide
							the Board in identifying units/business lines and enterprise-level
							risk exposures, as well as the effectiveness of risk management
							strategies.
						</p>
						<p>
							Risk management policies are established to identify and analyze
							the risks faced by the Company, to set appropriate risk limits and
							controls, and to monitor risks and adherence to limits. Risk
							management policies, processes, and practices are continuously
							reviewed to reflect changes in the Company’s activities and market
							conditions. The Company, through its training and management
							standards and procedures, aims to develop a disciplined and
							constructive control environment in which all employees understand
							their roles and obligations.
						</p>
						<p>
							Risk management functions are performed at the management
							committee level of each operating subsidiary of the Company.
							Managers and those responsible for risk reporting are tasked to
							ensure compliance with all operational and financial controls
							within their areas of responsibility and to implement internal
							controls as part of the total system to achieve the goals of the
							Company. Managers conduct regular evaluation of existing policies,
							systems and procedures to ensure that these remain relevant and
							effective to the current operating environment. Management also
							gives prompt and cooperative consideration to the recommended
							improvement measures made by independent internal or external
							audit groups.
						</p>
						<p>
							In 2017, the Company’s Board of Directors reorganized the Audit
							Committee to become the Audit and Risk Oversight Committee
							additional function toe to be responsible for the oversight of the
							Company&apos;s enterprise risk management (ERM) system to ensure
							its functionality and effectiveness. In addition, the Audit and
							Risk Oversight Committee is assisted in its oversight role by the
							Group Internal Audit which oversees the internal audit functions
							of the Company’s subsidiaries. The respective Internal Audit
							Groups of the Company’s subsidiaries undertake both regular and ad
							hoc reviews of the risk management controls and procedures of
							these subsidiaries, the results of which are reported to the Audit
							and Risk Oversight Committee.
						</p>
						<p>
							The ERM functions of the Board of Directors are exercised by the
							Audit and Risk Oversight Committee whose charter was adopted on
							August 10, 2017 whose functions include the identification,
							assessment and monitoring of key risk exposures, corresponding to
							its size, risk profile and complexity of operations. These are as
							follows:
						</p>
						<ol type='a'>
							<li>Defining a risk management strategy;</li>
							<li>
								Identifying and analyzing key risks exposure relating to
								economic, environmental, social and governance factors and the
								achievement of the organization&apos;s strategic objectives;
							</li>
							<li>
								Evaluating and categorizing each identified risk using the
								Corporation&apos;s predefined risk categories and parameters;
							</li>
							<li>
								Establishing a risk register with clearly defined, prioritized
								and residual risks;
							</li>
							<li>
								Developing a risk mitigation plan for the most important risks
								to the Corporation, as defined by the risk management strategy;
							</li>
							<li>
								Communicating and reporting significant risk exposures including
								business risks (i.e., strategic, compliance, operational,
								financial and reputational risks), control issues and risk
								mitigation plan to the Board Risk Oversight Committee; and
							</li>
							<li>
								Monitoring and evaluating the effectiveness of the
								organization&apos;s risk management processes.
							</li>
						</ol>
						<p>
							The Audit and Risk Oversight Committee Charter provides that the
							development of a formal ERM plan should contain the following
							elements:
						</p>

						<ol type='i'>
							<li>common language or register of risks;</li>
							<li>
								well-defined risk management goals, objectives and oversight;
							</li>
							<li>
								uniform processes of assessing risks and developing strategies
								to manage prioritized risks;
							</li>
							<li>
								designing and implementing risk management strategies; and
							</li>
							<li>
								continuing assessments to improve risk strategies, processes and
								measures;
							</li>
						</ol>

						<p>The Audit and Risk Oversight Committee are also tasked to:</p>
						<ol type='a'>
							<li>
								oversee the implementation of the ERM plan, conduct regular
								discussions on the Corporation’s prioritized and residual risk
								exposures based on regular risk management reports, and assess
								how the concerned units or offices are addressing and managing
								these risks; and
							</li>
							<li>
								evaluate the risk management plan to ensure its continued
								relevance, comprehensiveness and effectiveness, revisit defined
								risk management strategies, look for emerging or changing
								material exposures, and stay abreast of significant developments
								that seriously impact the likelihood of harm or loss
							</li>
						</ol>
					</div>
				</Section>
			</Curve>
		</>
	);
}
