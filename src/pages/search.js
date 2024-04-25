import Head from 'next/head';
import Fade from '@/components/Layout/Fade';

import PageTitle from '@/cms-components/PageTitle/PageTitle';

import FullPageBanner from '@/cms-components/FullPageBanner/fullpagebanner';

import { basePath } from '@/hooks/use-basepath';
import PageBanner from '@/cms-components/PageBanner/PageBanner';
import VideoContent from '@/cms-components/VideoContent/Video';
import Section from '@/cms-components/Section/Section';

import {
	Flex,
	FormControl,
	Input,
	Select,
	Tag,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { getColors } from '@/hooks/use-color';
import { IoIosSearch } from 'react-icons/io';

export default function Search() {
	return (
		<>
			<Head>
				<title>San Miguel Corporation</title>
				<meta name='description' content='Generated by create next app' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<meta
					http-equiv='Content-Security-Policy'
					content='frame-src youtube.com www.youtube.com'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Fade>
				<PageBanner title={'Search'} direction='center'>
					<Flex gap={5} mt={5}>
						<FormControl bg={'white'}>
							<InputGroup h={'4rem'}>
								<InputLeftElement pointerEvents='none' h={'4rem'} pl={1.5}>
									<IoIosSearch size={'1.25rem'} />
								</InputLeftElement>
								<Input type='text' placeholder='Enter keyword ' />
							</InputGroup>
						</FormControl>
					</Flex>
				</PageBanner>
				<Section>
					<div className='column'>
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</Section>
			</Fade>
		</>
	);
}

function SearchItem() {
	const { red } = getColors;
	return (
		<div className='search-item'>
			<div className='link-cover'></div>
			<Tag size='sm' color={'white'} bgColor={red}>
				Search Tag
			</Tag>
			<div className='search-title heading-5'>
				On World Water Day: SMC reports 41 B liters of water saved; river
				cleanups clear 5.5 M tons of silt and waste
			</div>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta est
				a nisl condimentum vestibulum. Mauris in ultricies lacus. Nulla euismod
				quis quam at commodo. Proin faucibus lorem in rhoncus cursus. Vestibulum
				porttitor facilisis turpis, eu blandit tellus fringilla ut.
			</p>
		</div>
	);
}
