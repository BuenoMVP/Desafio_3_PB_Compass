import style from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardTuor from '../CardTuor/index'

import '@splidejs/react-splide/css';


const SideScroll = () => {
  return (
    <section className={style.section} role='group'>
        <Splide options={{type: 'loop', MdPadding: '30rem'}}>
                    <SplideSlide className={style.sliderItem}>
                        <CardTuor 
                            location='Budapes, Hungary'
                            title='Wonders of the West Coast & Kimberly'
                            review={4.8}
                            qtd_review={10}
                            time={5}
                            price={520}
                        />
                    </SplideSlide>
                    <SplideSlide className={style.sliderItem}>
                        <CardTuor 
                            location='CP'
                            title='Wonders of the West Coast & Kimberly'
                            review={4.8}
                            qtd_review={10}
                            time={5}
                            price={520}
                        />
                    </SplideSlide>
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