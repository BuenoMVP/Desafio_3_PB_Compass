import style from './style.module.css'

type button = 'button' | 'submit' | 'reset'

interface Props {
  title: string,
  type: button,
  onClick?():void
}

const FormButton = (props: Props) => {
  return (
    <button type={props.type} className={style.button} onClick={props.onClick}>
        {props.title}
    </button>
  )
}

export default FormButton