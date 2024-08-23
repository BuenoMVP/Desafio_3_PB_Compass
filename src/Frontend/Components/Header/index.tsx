import { FiMapPin, FiUser } from 'react-icons/fi'
import HeaderButton from '../HeaderButton'
import styles from './style.module.css'
import { IoSearch } from 'react-icons/io5'

const Header = () => {
  const iconSize:number = 20

  return (
    <section className={styles.section}>
        <div className={styles.div}>
            <button className={styles.button}>
                <FiMapPin size={iconSize}/>
                <p className={styles.logoText}>Trisog</p>
            </button>
            <ul className={styles.ul}>
                <li><HeaderButton title='Home' goTo='/'/></li>
                <li><HeaderButton title='About' goTo='/'/></li>
                <li><HeaderButton title='Tours' goTo='/Tuor'/></li>
                <li><HeaderButton title='Destination' goTo='/'/></li>
                <li><HeaderButton title='Blog' goTo='/'/></li>
                <li><HeaderButton title='Pages' goTo='/'/></li>
                <li><HeaderButton title='Contact' goTo='/'/></li>
            </ul>
        </div>
        <div className={styles.div}>
            <button className={styles.button}>
                <IoSearch size={iconSize}/>
                <FiUser size={iconSize}/>
                <p>Login/Signup</p>
            </button>
        </div>
    </section>
  )
}

export default Header