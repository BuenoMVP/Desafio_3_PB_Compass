import style from './style.module.css'

type button = 'button' | 'submit' | 'reset'

interface Props {
  title: string,
  type: button
}

const FormButton = (props: Props) => {
  return (
    <button type={props.type} className={style.button}>
        {props.title}
    </button>
  )
}

export default FormButton