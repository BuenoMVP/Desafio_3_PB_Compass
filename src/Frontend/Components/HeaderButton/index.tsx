import styles from './style.module.css'

interface Props {
    title: string,
}

const HeaderButton = (props:Props) => {
  return (
    <button className={styles.button}>
        <p>{props.title}</p>
    </button>
  )
}

export default HeaderButton