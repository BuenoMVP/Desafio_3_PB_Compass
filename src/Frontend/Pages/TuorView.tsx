import React, { useState } from 'react'
import Footer from '../Components/Footer'
import FormButton from '../Components/FormButton'
import Header from '../Components/Header'
import MapComponent from '../Components/MapComponent'
import global from './global.module.css'
import style from './tuorView.module.css'
import AverageReviews from '../Components/AverageReviews'
import { FaStar } from 'react-icons/fa'

const TuorView = () => {
  const [services, setServices] = useState<number>(5)
  const [location, setLocation] = useState<number>(5)
  const [amenities, setAmenities] = useState<number>(5)
  const [prices, setPrices] = useState<number>(4)
  const [food, setFood] = useState<number>(3)
  const [quality, setQuality] = useState<number>(5)
  const [name, setName] = useState<string>('anonymous')
  const [email, setEmail] = useState<string>('')
  const [comment, setComment] = useState<string>('No comment.')

  const lat: number = -23.187049672867087
  const lng: number = -50.65637960242221
  const avgScore: number = (services + location + amenities + prices + quality) / 5
  const iconSize: number = 20
  let avgQuality: string

  if(avgScore >= 4) {
    avgQuality = 'Excellent'
  }else if (avgScore <= 2) {
    avgQuality = 'Bad'
  }else{
    avgQuality = 'Medium'
  }

  function mostraReview (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Nome: '+name, ' -- email: '+email, '-- Comentario: '+comment)
  }
  
  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <aside className={style.tuorBox}>
            Informaçoes do tuor
            <h2 className={`blueText`} >Overview</h2>
            <span>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, 
              offers an enchanting blend of cultures, sights, and experiences that captivate every traveler’s heart.
               As Turkey’s cultural and economic hub. Instabul seamlesly fuses its rich heritage with modernity, 
               creating an unforgettable journey for visitors.</span>

            <h2 className={`blueText`}>Map</h2>
            <MapComponent lat={lat} lng={lng}/>

            <h2 className={`blueText`}>Average Reviews</h2>
            <div className={style.averageBox}>
              <div className={style.averageScore}>
                <p className='boldText'>{avgScore}</p>
                <span>
                  <FaStar color='#fff' size={iconSize}/>
                  {avgQuality}
                </span>
              </div>
              <div className={style.averageGroup}>
                <AverageReviews title='Services' score={services}/>
                <AverageReviews title='Locations' score={location}/>
                <AverageReviews title='Ameneties' score={amenities}/>
              </div>
              <div className={style.averageGroup}>
                <AverageReviews title='Prices' score={prices}/>
                <AverageReviews title='Food' score={food}/>
                <AverageReviews title='Room confort and quality' score={quality}/>
              </div>
            </div>

            <form onSubmit={mostraReview}>
              <h3>Add a review</h3>
              
              <div>
                <input 
                  type="text" 
                  name='name'
                  placeholder='Your name'
                  onChange={(e) => setName(e.target.value)}
                />
                <input 
                  type="text" 
                  name='email'
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <textarea 
                placeholder='Write your comment.' 
                name='comment'
                onChange={(e) => setComment(e.target.value)}
              />

              <FormButton title='Submit Review' type='submit' />
            </form>

          </aside>
          <aside className={style.priceBox}>
            informações do preço
          </aside>
        </section>
        <Footer />
    </main>
  )
}

export default TuorView