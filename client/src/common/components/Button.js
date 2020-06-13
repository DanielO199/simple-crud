import React from 'react';

const Button = ({
	inverse,
	danger,
	fullWidth,
	onClick,
	disabled,
	children
}) => {
	return (
		<button
			className={`button ${inverse && 'button--inverse'} ${
				danger && 'button--danger'
			} ${fullWidth && 'button-fullWidth'}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
