import Fade from '@/components/Layout/Fade';

import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	ButtonGroup,
	useDisclosure,
} from '@chakra-ui/react';

export default function About() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Curve backgroundColor={'#BCF366'}>
			<div
				style={{
					marginTop: '20rem',
				}}>
				<Button onClick={onOpen} className='btn btn-bordered'>
					Open Modal
				</Button>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent pb={4}>
						<ModalHeader className='heading-5'>Subsidiary Websites</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<p>
								<a
									href='https://www.bankcom.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Bank of Commerce
								</a>
								<br />
								<a
									href='https://www.eaglecement.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Eagle Cement
								</a>
								<br />
								<a
									href='https://www.petron.com/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Petron Corp.
								</a>
								<br />
								<a
									href='https://www.ginebrasanmiguel.com/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Ginebra San Miguel
								</a>
								<br />
								<a
									href='https://www.sanmiguelproperties.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Properties, Inc
								</a>
								<br />
								<a
									href='https://www.sanmiguelfoods.com/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Foods
								</a>
								<br />
								<a
									href='https://greatfoodsolutions.com/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Great Food Solutions
								</a>
								<br />
								<a
									href='https://homefoodie.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Home Foodie
								</a>
								<br />
								<a
									href='https://magnoliachicken.com/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Magnolia Chicken
								</a>
								<br />
								<a
									href='https://www.monterey.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Monterey Foods Corp.
								</a>
								<br />
								<a
									href='https://www.ncc.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Northern Cement
								</a>
								<br />
								<a
									href='https://petrogen.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Petrogen Insurance Corporation
								</a>
								<br />
								<a
									href='https://www.sanmiguelbrewery.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Brewery Inc.
								</a>
								<br />
								<a
									href='https://www.smfb.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Food and Beverage
								</a>
								<br />
								<a
									href='https://www.facebook.com/redhorsebeer/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									Red Horse Beer
								</a>
								<br />
								<a
									href='https://www.facebook.com/sanmiguel.hk'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Brewery Hong Kong
								</a>
								<br />
								<a
									href='https://sanmiguelbrewery.com'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Brewing International Ltd.
								</a>
								<br />
								<a
									href='https://www.sanmiguelmart.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Mart
								</a>
								<br />
								<a
									href='https://www.facebook.com/SanMiguelPalePilsen/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Pale Pilsen
								</a>
								<br />
								<a
									href='https://www.facebook.com/sanmiglightph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Mig Light
								</a>
								<br />
								<a
									href='https://www.facebook.com/sanmiguelsuperdrybeer/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									San Miguel Super Dry
								</a>
								<br />
								<a
									href='https://smcstocktransfer.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									SMC Stock Transfer Service Corporation
								</a>
								<br />
								<a
									href='https://www.smcglobalpower.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									SMC Global Power Holdings Corp
								</a>
								<br />
								<a
									href='https://www.sltc.com.ph/'
									target='_blank'
									without='true'
									rel='noreferrer'>
									South Luzon Tollway Corporation
								</a>
								<br />
							</p>
						</ModalBody>

						{/* <ModalFooter>
								<Button colorScheme='blue' mr={3} onClick={onClose}>
									Close
								</Button>
								<Button variant='ghost'>Secondary Action</Button>
							</ModalFooter> */}
					</ModalContent>
				</Modal>

				<h1>About</h1>
				<div className='body'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						imperdiet nibh sit amet velit dignissim, non tempus nisl
						pellentesque. Praesent sagittis magna sit amet ex blandit, id
						pharetra lectus feugiat. Praesent sit amet congue ipsum, in ultrices
						neque. In dapibus in purus vitae dignissim. Quisque molestie
						ullamcorper elementum. Sed sodales erat augue. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Duis aliquet quis lectus vitae
						venenatis. Aliquam erat volutpat. Nulla maximus sodales nibh dapibus
						congue. Integer nec pharetra felis, quis commodo elit. Fusce et
						aliquet neque. Vivamus leo diam, pharetra ut lorem eu, suscipit
						egestas ipsum. Aenean mauris ligula, laoreet ut volutpat sit amet,
						convallis et turpis.
					</p>
					<p>
						Quisque molestie ullamcorper elementum. Sed sodales erat augue.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
						aliquet quis lectus vitae venenatis. Aliquam erat volutpat. Nulla
						maximus sodales nibh dapibus congue. Integer nec pharetra felis,
						quis commodo elit. Fusce et aliquet neque. Vivamus leo diam,
						pharetra ut lorem eu, suscipit egestas ipsum. Aenean mauris ligula,
						laoreet ut volutpat sit amet, convallis et turpis.
					</p>
				</div>
			</div>
		</Fade>
	);
}
