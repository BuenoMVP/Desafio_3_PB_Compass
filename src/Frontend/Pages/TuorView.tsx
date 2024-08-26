import React, { useState } from 'react'
import Footer from '../Components/Footer'
import FormButton from '../Components/FormButton'
import Header from '../Components/Header'
import MapComponent from '../Components/MapComponent'
import global from './global.module.css'
import style from './tuorView.module.css'
import AverageReviews from '../Components/AverageReviews'
import { FaStar } from 'react-icons/fa'
import api from '../Services/api'

const TuorView = () => {
  const [nota_service, setServices] = useState<number>(1)
  const [nota_location, setLocation] = useState<number>(1)
  const [nota_amenities, setAmenities] = useState<number>(1)
  const [nota_prices, setPrices] = useState<number>(1)
  const [nota_food, setFood] = useState<number>(1)
  const [nota_confort, setConfort] = useState<number>(1)
  const [name, setName] = useState<string>('anonymous')
  const [email, setEmail] = useState<string>('standart@standart.com')
  const [description, setDescription] = useState<string>('No comment.')
  const tuorID: string = '66c7887d5277fe78a9645c0e'

  const lat: number = -23.187049672867087
  const lng: number = -50.65637960242221
  const avgScore: number = (nota_service + nota_location + nota_amenities + nota_prices + nota_confort + nota_food) / 6
  const iconSize: number = 20
  let avgQuality: string

  if(avgScore >= 4) {
    avgQuality = 'Excellent'
  }else if (avgScore <= 2) {
    avgQuality = 'Bad'
  }else{
    avgQuality = 'Medium'
  }

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newReview = {
        description,
        email,
        name,
        nota_service,
        nota_location,
        nota_amenities,
        nota_prices,
        nota_confort,
        nota_food,
        tuorID
      }

      await api.post("/reviews", newReview)
      console.log('fez o stringify')
    } catch (err) {
      console.log('Deu ruim no formulario: '+err)
    }
  }
  
  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <aside className={style.tuorBox}>
            Informaçoes do tuor
            <h2 className={`blueText`}>Overview</h2>
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
                <AverageReviews title='Services' score={nota_service}/>
                <AverageReviews title='Locations' score={nota_location}/>
                <AverageReviews title='Ameneties' score={nota_amenities}/>
              </div>
              <div className={style.averageGroup}>
                <AverageReviews title='Prices' score={nota_prices}/>
                <AverageReviews title='Food' score={nota_food}/>
                <AverageReviews title='Room confort and quality' score={nota_confort}/>
              </div>
            </div>

            <form onSubmit={handleForm}>
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
                onChange={(e) => setDescription(e.target.value)}
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