import style from './style.module.css'

interface Props {
    title: string,
    setValue(arg:number): void
    value: number
}

const CalcValue = (props: Props) => {
    const value: number = props.value

    const onMinus = (index: number) => {
        if (index > 0) 
            props.setValue(value-1)
        else
            props.setValue(0)
    }

  return (
    <section className={style.section}>
        <span className='blueText'>{props.title}</span>
        <div id={style.content}>
            <button 
                className={style.box}
                onClick={() => onMinus(value)}
            >
                -
            </button>
            <p className={style.box}>
                {props.value}
            </p>
            <button 
                className={style.box}
                onClick={() => props.setValue(value+1)}
            >
                +
            </button>

        </div>
    </section>
  )
}

export default CalcValue