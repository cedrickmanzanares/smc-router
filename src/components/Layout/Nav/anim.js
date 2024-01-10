import { getColors } from '@/hooks/use-color';
const { red } = getColors;

const ease = [0.76, 0, 0.24, 1];

export const toggleSettings = {
	size: 70,
	gap: 8,
	edge: 10,
	padding: 10,
	hover: 15,
};

export const transitionSettings = {
	duration: 0.5,
	ease: [0.76, 0, 0.24, 1],
};

// main nav
export const navContainer_variants = {
	open: {
		opacity: 1,
		y: '0%',
		transition: toggleSettings,
	},

	closed: {
		opacity: 0,
		y: '-100%',
		transition: toggleSettings,
	},
};

export const hover_animation = {
	open: {
		opacity: 1,
		scale: 1,
		y: 0,
		pointerEvents: 'all',
		transition: { ...transitionSettings, duration: 0.15 },
	},
	closed: {
		opacity: 0,
		scale: 0.9,
		x: '-50%',
		y: 10,
		pointerEvents: 'none',
		transition: { ...transitionSettings, duration: 0.15 },
	},
};

// toggle nav

export const floatingNavContent_variants = {
	open: {
		display: 'flex',
		transition: {
			staggerChildren: 0.035,
			// delayChildren: 0.5,
		},
	},
	initial: {
		display: 'none',

		transition: {
			delay: 0.4,
			// delayChildren: 0.5,
		},
	},
};

export const navItem_variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: transitionSettings,
	},
	initial: {
		y: 50,
		opacity: 0,
		transition: transitionSettings,
	},
};

export const path1_variants = {
	hovered: {
		d: `M${
			toggleSettings.size -
			toggleSettings.edge -
			toggleSettings.padding -
			toggleSettings.hover
		}  ${toggleSettings.size / 2 - toggleSettings.gap} L${
			toggleSettings.size - toggleSettings.edge - toggleSettings.padding
		} ${toggleSettings.size / 2 - toggleSettings.gap}`,
		transition: transitionSettings,
	},
	initial: {
		y: '0px',
		rotate: '0deg',
		d: `M${toggleSettings.edge + toggleSettings.padding} ${
			toggleSettings.size / 2 - toggleSettings.gap
		} L${toggleSettings.size - toggleSettings.edge - toggleSettings.padding} ${
			toggleSettings.size / 2 - toggleSettings.gap
		}`,
		transition: transitionSettings,
	},
	open: {
		y: '7px',
		rotate: '135deg',
		transition: transitionSettings,
	},
};

export const path2_variants = {
	hovered: {
		d: `M${toggleSettings.edge + toggleSettings.padding} ${
			toggleSettings.size / 2
		} L${toggleSettings.size - toggleSettings.edge - toggleSettings.padding} ${
			toggleSettings.size / 2
		}`,
		transition: transitionSettings,
	},
	initial: {
		scaleX: 1,
		d: `M${toggleSettings.edge + toggleSettings.padding} ${
			toggleSettings.size / 2
		} L${toggleSettings.size - toggleSettings.edge - toggleSettings.padding} ${
			toggleSettings.size / 2
		}`,
		transition: transitionSettings,
	},
	open: {
		scaleX: 0,
		transition: transitionSettings,
	},
};

export const path3_variants = {
	hovered: {
		d: `M${toggleSettings.edge + toggleSettings.padding} ${
			toggleSettings.size / 2 + toggleSettings.gap
		} L${toggleSettings.edge + toggleSettings.padding + toggleSettings.hover} ${
			toggleSettings.size / 2 + toggleSettings.gap
		}`,
		transition: transitionSettings,
	},
	initial: {
		y: '0px',
		rotate: '0deg',
		d: `M${toggleSettings.edge + toggleSettings.padding}  ${
			toggleSettings.size / 2 + toggleSettings.gap
		} L${toggleSettings.size - toggleSettings.edge - toggleSettings.padding} ${
			toggleSettings.size / 2 + toggleSettings.gap
		}`,
		transition: transitionSettings,
	},
	open: {
		y: '-8px',
		rotate: '225deg',
		transition: transitionSettings,
	},
};

export const circle_variants = {
	initial: {
		cx: toggleSettings.size / 2,
		cy: toggleSettings.size / 2,
		r: 30,
		fill: red,
		transition: transitionSettings,
	},
};
