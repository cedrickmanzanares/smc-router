import { useContext, useEffect, useState } from 'react';
import { MenuContext, ThemeContext, TokenContext } from '@/pages/_app';

import { env } from '/next.config';
import { useRouter } from 'next/router.js';
import { getColors } from '@/hooks/use-color';
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

export const useGetMenu = () => {
	const [menu, setMenu] = useState([]);
	const token = useContext(TokenContext);

	useEffect(() => {
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
				});
		}
	}, []);

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
