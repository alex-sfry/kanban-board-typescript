import css from './Button.module.css';
import withCloseCross from '../withCloseCross';

interface ButtonProps {
    children: any, 
    btnClass: any,
    disabled: any, 
    handleClick?: () => void, 
    type: any /* "button" | "submit" | "reset" | undefined */
}

export const Button = ({ children, btnClass, disabled, handleClick, type }: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${css.btn} ${css[btnClass]}`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}

const ButtonCloseWindow = ({ children }: any) => {
	return (
		<button className={css.btnClose}>
			{children}
		</button>
	)
}

export const Close = withCloseCross(ButtonCloseWindow)

