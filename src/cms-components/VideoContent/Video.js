'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import { getColors } from '@/hooks/use-color';
import useAnim from '@/hooks/use-anim';
import { pageTranslate } from '@/hooks/pageAnim';
import { useRef } from 'react';

import { basePath } from '@/hooks/use-basepath';
import { CgPlayButtonO } from 'react-icons/cg';

export default function VideoContent({ src }) {
	return (
		<div className='video-content'>
			<video preload='auto' playsInline src={src}></video>
			<button
				className='video-play'
				onClick={(event) => {
					let video = event.target
						.closest('.video-content')
						.querySelector('video');
					video.play();
					if (video.requestFullscreen) {
						video.requestFullscreen();
					} else if (video.webkitRequestFullscreen) {
						/* Safari */
						video.webkitRequestFullscreen();
					} else if (video.msRequestFullscreen) {
						/* IE11 */
						video.msRequestFullscreen();
					}

					let fullScreenChanged = function (e) {
						if (!document.fullscreenElement) {
							video.pause();
						}
					};

					document.removeEventListener('fullscreenchange', fullScreenChanged);

					document.addEventListener('fullscreenchange', fullScreenChanged);
				}}>
				<CgPlayButtonO size={'7rem'} color='white' />
			</button>
		</div>
	);
}
