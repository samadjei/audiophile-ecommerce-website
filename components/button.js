const STYLES = ['btn--primary', 'btn--secondary', 'btn--tertiary'];

const SIZES = ['btn--desktop', 'btn--tablet', 'btn--mobile'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	// checks to see if the value we have passed in is in the styles array
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

	// checks to see if the value we have passed in is in the sizes array
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};
