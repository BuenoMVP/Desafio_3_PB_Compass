import React, { useState } from 'react'
import Footer from '../Components/Footer'
import FormButton from '../Components/FormButton'
import Header from '../Components/Header'
import MapComponent from '../Components/MapComponent'
import global from './global.module.css'
import style from './tuorView.module.css'

const TuorView = () => {
  const [name, setName] = useState<string>('anonymous')
  const [email, setEmail] = useState<string>('')
  const [comment, setComment] = useState<string>('No comment.')

  const lat: number = -23.187049672867087
  const lng: number = -50.65637960242221

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