export function createButton({
	text = 'Button',
	size = 'md',
	variant = 'default',
} = {}) {
	const btn = document.createElement('button');
	btn.textContent = text;

	const base = {
		border: 'none',
		textAlign: 'center',
		fontWeight: '400',
		cursor: 'pointer',
	};

	const sizes = {
		lg: {
			padding: '18.5px 33px',
			fontSize: '20px',
			width: '180px',
			height: '60px',
			borderRadius: '4px',
		},
		md: {
			padding: '17px 40px',
			fontSize: '18px',
			width: '139px',
			height: '54px',
			borderRadius: '4px',
		},
		sm: {
			padding: '7px 24.5px',
			fontSize: '14px',
			width: '85px',
			height: '30px',
			borderRadius: '8px',
		},
	};

	const variants = {
		default: { backgroundColor: '#24556C', color: '#fff' },
		cancel: { backgroundColor: '#C4C4C4', color: '#000' },
	};

	btn.classList.add('button');
	if (variant === 'cancel') btn.classList.add('button__cancel');

	Object.assign(
		btn.style,
		base,
		sizes[size] || sizes.md,
		variants[variant] || variants.default,
	);

	return btn;
}
