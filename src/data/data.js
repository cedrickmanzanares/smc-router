import { useContext, useEffect, useState } from 'react';
import {
	MenuContext,
	PreloadContext,
	ThemeContext,
	TokenContext,
} from '@/pages/_app';

import { env } from '/next.config';
import { useRouter } from 'next/router.js';
import { getColors } from '@/hooks/use-color';
import { basePath } from '@/hooks/use-basepath';
const { api_url, api_uname, api_pass } = env;
export const useInitializeToken = async () => {
	let request_data = new FormData();
	request_data.append('email', api_uname);
	request_data.append('password', api_pass);

	let request = await fetch(`${api_url}/request`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: api_uname,
			password: api_pass,
		}),
	});

	let response = await request.json();

	return response;
};

export const useGetMenu = (token, setFakePreload) => {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		if (token) {
			setFakePreload(false);
			if (!menu.length) {
				fetch(`${api_url}/menu`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						let filteredMenu = data.filter((item) => item.hidden != 0);
						setMenu((prev) => (prev = filteredMenu));
						setFakePreload(true);
					});
			}
		}
	}, [token, setFakePreload]);

	return { menu };
};

export const useGetTheme = (menu) => {
	const [smcTheme, setsmcTheme] = useState('smc-default');
	const [smcThemeDelayed, setsmcThemeDelayed] = useState('smc-default');
	const router = useRouter();

	const getTheme = (index, setter) => {
		switch (index) {
			case 0:
			case -1:
				setter('smc-red');
				break;
			case 1:
				setter('smc-null');
				break;
			case 2:
				setter('smc-blue');
				break;
			case 3:
				setter('smc-yellow');
				break;
			default:
				setter('smc-default');
		}
	};
	useEffect(() => {
		// if (router.route.split('/')[0] === )
		let parentLinks = menu.map((item) => item.page[0].slug);

		let index = parentLinks.indexOf(router.route.split('/')[1]);
		if (router.route === '/') index = -2;
		getTheme(index, setsmcTheme);
		setTimeout(() => {
			getTheme(index, setsmcThemeDelayed);
		}, 500);
	}, [router, menu]);

	return { smcTheme, smcThemeDelayed };
};

export const useGetToggleFill = () => {
	const { red, blue, yellow } = getColors;
	const [toggleFill, setToggleFill] = useState(red);

	const { smcTheme } = useContext(ThemeContext);

	useEffect(() => {
		if (smcTheme === 'smc-red') setToggleFill(red);
		if (smcTheme === 'smc-blue') setToggleFill(blue);
		else if (smcTheme === 'smc-yellow') setToggleFill(yellow);
		else setToggleFill(red);
	}, [smcTheme]);

	return { toggleFill };
};

export const useGetButtonColor = () => {
	const { red, blue, yellow, baseBlack } = getColors;
	const [buttonColor, setButtonColor] = useState(baseBlack);
	const { smcTheme } = useContext(ThemeContext);

	useEffect(() => {
		if (smcTheme === 'smc-red') setButtonColor(red);
		else if (smcTheme === 'smc-blue') setButtonColor(blue);
		else if (smcTheme === 'smc-yellow') setButtonColor(baseBlack);
		else setButtonColor(baseBlack);
	}, [smcTheme]);

	return { buttonColor };
};

export const useGetBannerData = () => {
	const today = new Date();
	const { baseBlack } = getColors;
	const images = [
		{
			video: `${basePath}/images/Homepage-1/NewBanner/banner_morning.mp4`,
			images: [],
			start: '5:00',
			end: '6:59',
			bg: ['#dcb994', '#eccda2'],
		},
		{
			images: [
				`${basePath}/images/Homepage-1/NewBanner/7am-11am-1.png`,
				`${basePath}/images/Homepage-1/NewBanner/7am-11am-2.png`,
				`${basePath}/images/Homepage-1/NewBanner/7am-11am-3.png`,
				`${basePath}/images/Homepage-1/NewBanner/7am-11am-4.png`,
			],
			start: '7:00',
			end: '10:59',
			bg: ['#bac1c9', '#6ba7cc'],
			color: baseBlack,
		},
		{
			images: [
				`${basePath}/images/Homepage-1/NewBanner/11am-4pm-1.png`,
				`${basePath}/images/Homepage-1/NewBanner/11am-4pm-2.png`,
				`${basePath}/images/Homepage-1/NewBanner/11am-4pm-3.png`,
				`${basePath}/images/Homepage-1/NewBanner/11am-4pm-4.png`,
			],
			start: '11:00',
			end: '15:59',
			bg: ['#bac1c9', '#6ba7cc'],
			color: baseBlack,
		},
		{
			images: [
				`${basePath}/images/Homepage-1/NewBanner/4pm-6pm-1.png`,
				`${basePath}/images/Homepage-1/NewBanner/4pm-6pm-2.png`,
				`${basePath}/images/Homepage-1/NewBanner/4pm-6pm-3.png`,
				`${basePath}/images/Homepage-1/NewBanner/4pm-6pm-4.png`,
			],
			start: '16:00',
			end: '17:59',
			bg: ['#6ba7cc', '#bac1c9'],
			color: baseBlack,
		},
		{
			video: `${basePath}/images/Homepage-1/NewBanner/banner_night.mp4`,
			images: `${basePath}/images/Homepage-1/NewBanner/D.jpg`,
			start: '18:00',
			end: '5:00',
			bg: ['#8da6bd', '#b5c3ce'],
		},
	];

	let banner_data = {};
	images.map((image, index) => {
		let imageTimeStart = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate(),
			image.start.split(':')[0],
			image.start.split(':')[1]
		);
		let imageTimeEnd = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate(),
			image.end.split(':')[0],
			image.end.split(':')[1]
		);

		if (today >= imageTimeStart && today <= imageTimeEnd) {
			banner_data.images = image.images;
			banner_data.video = image.video;
			banner_data.bg = image.bg;
			banner_data.color = image.color;
		}
		if (index === 4) {
			if (imageTimeEnd >= today || today >= imageTimeStart) {
				banner_data.images = image.images;
				banner_data.video = image.video;
				banner_data.bg = image.bg;
				banner_data.color = image.color;
			}
		}
	});

	return { ...banner_data };
};
