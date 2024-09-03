import style from './style.module.css'
import { categoriesProps } from '../../../Backend/Types/bdTypes'
import { useEffect, useState } from 'react'
import api from '../../Services/api'

import { TbBeach } from "react-icons/tb"

const CategorieScroll = () => {
    const [categories, setCategories] = useState<categoriesProps[]> ([])
  
    const fetchTuors = async () => {
      try {
        const response = await api.get<categoriesProps[]>(`/cat`)
        setCategories(response.data)
      } catch (err) {
        console.error("Erro to find categories: "+err)
      }
    }
    
    useEffect(() => {
      fetchTuors()
    }, [])
  
    return (
      <section className={style.section}>
            {categories.map((categorie, index) => (      
                <div key={index}>
                    <div id={style.redBall}/>
                    <TbBeach size={40} color='#051036'/>
                    <article>
                        <h1>{categorie.categorie}</h1>
                        <span>10 Tuors +</span>
                    </article>
                    <p>
                        From 
                        <span className='boldText redText' id={style.price}>$250</span>
                    </p>
                </div>
            ))}
      </section>
    )
}

export default CategorieScroll