import { FaRegStar } from 'react-icons/fa'
import { MediaReviewProps } from '../../Types/types'
import style from './style.module.css'

const MediaReview = (props: MediaReviewProps) => {
  return (
    <section className={style.section}>
        <div>
            <><FaRegStar size={15} color='#fff'/></>
            {props.review.toFixed(1)}
        </div>
        <p>{props.qtd_review} reviews</p>
    </section>
  )
}

export default MediaReview