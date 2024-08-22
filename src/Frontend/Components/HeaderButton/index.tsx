import { HeaderButtonProps } from '../../Types/types'
import styles from './style.module.css'

const HeaderButton = (props:HeaderButtonProps) => {
  return (
    <button className={styles.button}>
        <p>{props.title}</p>
    </button>
  )
}

export default HeaderButton