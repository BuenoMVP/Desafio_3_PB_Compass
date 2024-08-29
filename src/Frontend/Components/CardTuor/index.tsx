import { CiClock2, CiHeart } from 'react-icons/ci'
import { CardTourProps } from '../../Types/types'
import MediaReview from '../MediaReview'
import style from './style.module.css'

const CardTuor = (props: CardTourProps) => {
  return (
    <button className={style.button}>
        <img src='https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg' alt="Card Image" />
        <div className={style.informationBox}>
            <span>{props.location}</span>
            <p className={style.title}>{props.title}</p>
            <div className={style.dataBox}>
                <div className={style.box}>
                    <MediaReview review={props.review} qtd_review={props.qtd_review}/>
                    <div>
                        <CiClock2 size={20} color='#A9AFBB'/>
                        {props.time}days
                    </div>
                </div>
                <div className={style.box} id={style.priceBox}>
                    <p>Starting From</p>
                    <span className="cursiveText" id={style.priceText}>${props.price}</span>
                </div>
            </div>
        </div>
        <div className={style.like}>
            <CiHeart color='#091142' size={20}/>
        </div>
    </button>
  )
}

export default CardTuor