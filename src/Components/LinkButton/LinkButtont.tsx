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
    const variants: Variants = {
        crossLarge: `${css.btn} ${css.crossLarge}`
    }
    

	return (
        <div className={variants.crossLarge} >                       
            <Link to={route} >{children}</Link>
        </div>
		
	)
}

export default LinkButton