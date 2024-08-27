import style from './style.module.css'

interface Props {
    stats: string,
    title: string
}

const StatsHome = (props: Props) => {
  return (
    <section className={style.section}>
        <span className='cursiveText'>{props.stats}</span>
        <p>{props.title}</p>
    </section>
  )
}

export default StatsHome