import style from './style.module.css'

interface Props {
  title: string,
  score: number
}

const AverageReviews = (props: Props) => {
  const visualScore: number = props.score * 20
  return (
    <section className={style.section}>
        <p>{props.title}</p>
        <div className={style.box}>
          <div>
            <div style={{
              height: '100%', 
              width: `${visualScore}%`, 
              backgroundColor: '#FC5056'
            }}/>
          </div>
          <span>{props.score.toFixed(1)}</span>
        </div>
    </section>
  )
}

export default AverageReviews