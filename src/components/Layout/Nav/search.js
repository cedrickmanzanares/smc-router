import { ThemeContext } from '@/pages/_app';
import { useContext, useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useCycle } from 'framer-motion';

export default function Search() {
	const smcTheme = useContext(ThemeContext);
	const [searchOpen, toggleSearch] = useCycle(false);
	const searchInput = useRef();
	return (
		<div className={`nav-search ${smcTheme}`}>
			{/* <form className='nav-input' method='get' action='/search'>
				<input type='text' ref={searchInput} />
			</form> */}
			<button className='nav-icon'>
				<IoIosSearch
					onClick={() => {
						searchInput.current.focus();
					}}
					size={'1.75rem'}
				/>
			</button>
		</div>
	);
}
