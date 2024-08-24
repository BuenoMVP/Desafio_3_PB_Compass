import style from './style.module.css'

interface Props {
    text: string, 
}

const CheckBox = (props: Props) => {
  return (
    <section className={style.section}>
        <input type='checkbox'  />
        <label htmlFor={props.text}>{props.text}</label>
    </section>
  )
}

export default CheckBox