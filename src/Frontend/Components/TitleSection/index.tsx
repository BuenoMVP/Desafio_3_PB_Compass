import style from './style.module.css'

interface Props {
    cursive: string,
    title: string
}

const TitleSection = (props: Props) => {
  return (
    <section className={`${style.section}`}>
        <div>
            <div className={style.line}/>
            <span className='cursiveText redText boldText'>{props.cursive}</span>
            <div className={style.line}/>
        </div>
        <p className='boldText'>{props.title}</p>
    </section>
  )
}

export default TitleSection