const useAnim = (variants) => {
	return {
		variants,
		initial: 'initial',
		animate: 'enter',
		exit: 'exit',
	};
};

export default useAnim;
