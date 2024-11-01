import { InputIconTextProps } from '../../Types/types'
import style from './style.module.css'

const InputIconText = (props: InputIconTextProps) => {
  return (
    <section className={style.section}>
        <span className="cursiveText blueText">{props.title}</span>
        <div>
            <>{props.icon}</>
            <input 
                type={props.typeOperation} 
                placeholder={props.placeHolder}
                onChange={(e) => props.function!(e.target.value)}
            />
        </div>
    </section>
  )
}

export default InputIconText