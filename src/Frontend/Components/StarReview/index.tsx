import { useState } from 'react'
import Star from './star'
import style from './style.module.css'

const star: number[] = [...new Array(5).keys()]

interface Props {
  title: string,
  setRate(arg:number): void
}

const StarReview = (props: Props) => {
  const [active, setActive] = useState<number>(0)

  const onClickStar = (index: number) => {
    setActive(index)
    props.setRate(index+1)
  }

  return (
    <section className={style.section}>
      <p>{props.title}</p>
      <div>
        {star.map((index) => (
          <Star onClick={() => onClickStar(index)} key={index} isActive={index <= active! } />
        ))}
      </div>
    </section>
  )
}

export default StarReview