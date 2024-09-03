import style from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import CardTuor from '../CardTuor/index'
import api from '../../Services/api'

import '@splidejs/react-splide/css'
import { averageProps, categoriesProps, tuorsProps } from '../../../Backend/Types/bdTypes'
import { useEffect, useState } from 'react'

interface RequestProps {
  nextURL: string,
  previousURL: string,
  limit: number,
  offset: number,
  total: number,
  objTuor: tuorsProps[],
  objReviews: averageProps[],
  objCategories: categoriesProps[]
}

const SideScroll = () => {
  const [tuors, setTuors] = useState<tuorsProps[]>([])
  const [reviews, setReviews] = useState<averageProps[]> ([])

  const settings = {
    type: 'loop',
    arrows: false,
    perPage: 4,
    perMove: 1
  }

  const fetchTuors = async () => {
    try {
      const response = await api.get<RequestProps>(`/tuors`)
      setTuors(response.data.objTuor)
      setReviews(response.data.objReviews)
    } catch (err) {
      console.error("Erro to find tuors: "+err)
    }
  }
  
  useEffect(() => {
    fetchTuors()
  }, [])

  return (
    <section className={style.section}>
        <Splide options={settings} className={style.slider}>
          {tuors.map((tuor, index) => (      
            <SplideSlide 
              className={style.sliderItem}
              key={index}
            >
              <CardTuor 
                id={tuor._id!}
                location={tuor.location}
                city={tuor.city}
                title={tuor.title}
                review={reviews[index].avg_average}
                qtd_review={reviews[index].qtdReviews}
                price={tuor.price_person}
                time={tuor.time}
              />
            </SplideSlide>
          ))}
        </Splide> 
    </section>
  )
}

export default SideScroll