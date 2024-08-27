import React from 'react'
import MediaReview from '../MediaReview'
import style from './style.module.css'

interface Props {
    date?: Date,
    name: string,
    avgReview: number,
    qtdReview: number,
    review: string
}

const ShowReviews: React.FC<Props>  = (props) => {
  const img: string = props.name.toUpperCase().substring(0, 2)
  let date: string = props.date ? props.date.toString() : '0000-00-00'

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  if (props.date) {
    date = props.date.toString()
    date = formatDate(date);
  } else {
    date = 'Error_'
  }

  return (
    <section className={style.section}>
        <aside className={style.photo}>
            <h1>{img}</h1>
        </aside>
        <div className={style.information}>
            <span>{date}</span>
            <h2>{props.name}</h2>
            <MediaReview review={props.avgReview} qtd_review={props.qtdReview}/>
            <p>{props.review}</p>
        </div>
    </section>
  )
}

export default ShowReviews