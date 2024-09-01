import style from './style.module.css'

interface Props {
    title: string,
    value: string | number,
    textBlue: boolean
}

const InfoTour = (props: Props) => {
  return (
    <section className={style.section}>
        <p>{props.title}</p>
        <span 
            style={{color: props.textBlue ? '#051036' : '#FC5056'}}
            className='boldText'
        >{props.value}</span>
    </section>
  )
}

export default InfoTour