import style from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardTuor from '../CardTuor/index'

import '@splidejs/react-splide/css';

const SideScroll = () => {
  const settings = {
    type: 'loop',
    arrows: false,
    perPage: 4,
    perMove: 1
  }

  return (
    <section className={style.section}>
        <Splide options={settings} className={style.slider}>
            <SplideSlide className={style.sliderItem}>
                <CardTuor 
                    location='Londres'
                    title='Wonders of the West Coast & Kimberly'
                    review={4.8}
                    qtd_review={10}
                    time={5}
                    price={520}
                />
            </SplideSlide>
        </Splide> 
    </section>
  )
}

export default SideScroll