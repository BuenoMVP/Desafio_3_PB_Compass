import { Link } from 'react-router-dom'
import { HeaderButtonProps } from '../../Types/types'
import styles from './style.module.css'

const HeaderButton = (props:HeaderButtonProps) => {
  return (
    <Link className={styles.button} to={props.goTo}>
        <p>{props.title}</p>
    </Link>
  )
}

export default HeaderButton