import { ThemeContext } from '@/pages/_app';
import { useContext, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useCycle } from 'framer-motion';
import { motion } from 'framer-motion';
import { getColors } from '@/hooks/use-color';

import { useRouter } from 'next/router';
import { IoCloseOutline } from 'react-icons/io5';
export default function Search({ preload_variants }) {
	const router = useRouter();

	const { red, blue, yellow } = getColors;

	const { smcTheme } = useContext(ThemeContext);
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
		<motion.div
			className={`nav-search ${smcTheme}`}
			variants={preload_variants}>
			<motion.form
				ref={searchForm}
				className='nav-input'
				method='get'
				action='/search'
				style={{
					display: searchOpen ? 'flex' : 'none',
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
				<input type='text' ref={searchInput} placeholder='Enter keyword' />
				<button
					onClick={() => {
						toggleSearch(false);
					}}>
					<IoCloseOutline size={'2rem'} />
				</button>
			</motion.form>
			<button className='nav-icon'>
				<IoIosSearch
					onClick={() => {
						if (searchOpen) {
							// router.push('/search');
						} else {
							setTimeout(() => {
								searchInput.current.focus();
							}, 100);

							toggleSearch(true);
						}
					}}
					size={'1.75rem'}
				/>
			</button>
		</motion.div>
	);
}
