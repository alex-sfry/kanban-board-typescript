import css from './LinkButton.module.css';
import { Link } from 'react-router-dom'

interface LinkButtonProps {
    children: any, 
    route: string,
    variant: string,
}

interface Variants {
    crossLarge: string
}


const LinkButton = ({ children, route, variant }: LinkButtonProps) => {
    type T = keyof typeof variants;

    const variants = {
        crossLarge: `${css.btn} ${css.crossLarge}`
    }


	return (
        <div className={variants[variant as keyof typeof variants]} >                       
            <Link to={route} >{children}</Link>
        </div>
		
	)
}

export default LinkButton