import { ThemeContext } from '@/pages/_app';
import { useContext, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useCycle } from 'framer-motion';
import { motion } from 'framer-motion';
import { getColors } from '@/hooks/use-color';

import { useRouter } from 'next/router';

export default function Search() {
	const router = useRouter();

	const { red, blue, yellow } = getColors;

	const smcTheme = useContext(ThemeContext);
	const [searchOpen, toggleSearch] = useState(false);
	const searchInput = useRef();
	const searchForm = useRef();

	const search_variants = {
		'smc-red': {
			backgroundColor: red,
		},
		'smc-blue': {
			backgroundColor: blue,
		},
		'smc-yellow': {
			backgroundColor: yellow,
		},
	};

	return (
		<motion.div className={`nav-search ${smcTheme}`} animate={smcTheme}>
			<motion.form
				ref={searchForm}
				className='nav-input'
				method='get'
				action='/search'
				style={{
					display: searchOpen ? 'block' : 'none',
				}}
				variants={search_variants}
				onSubmit={(event) => {
					event.preventDefault();
					toggleSearch(false);
					router.push('/search');
				}}
				onBlur={() => {
					toggleSearch(false);
				}}>
				<input type='text' ref={searchInput} />
			</motion.form>
			<button className='nav-icon'>
				<IoIosSearch
					onClick={() => {
						if (searchOpen) {
							// console.log('Submit');
							// router.push('/search');
						} else {
							setTimeout(() => {
								searchInput.current.focus();
							}, 100);

							toggleSearch(true);
							console.log('Open search');
						}
					}}
					size={'1.75rem'}
				/>
			</button>
		</motion.div>
	);
}
