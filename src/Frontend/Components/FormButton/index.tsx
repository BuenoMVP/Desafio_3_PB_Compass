import { HeaderButtonProps } from '../../Types/types'
import style from './style.module.css'

const FormButton = (props: HeaderButtonProps) => {
  return (
    <button className={style.button}>
        {props.title}
    </button>
  )
}

export default FormButton