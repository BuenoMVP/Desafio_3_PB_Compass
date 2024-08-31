import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import FormButton from '../Components/FormButton'
import Header from '../Components/Header'
import MapComponent from '../Components/MapComponent'
import global from './global.module.css'
import style from './tuorView.module.css'
import AverageReviews from '../Components/AverageReviews'
import { FaStar } from 'react-icons/fa'
import api from '../Services/api'
import StarReview from '../Components/StarReview'
import ShowReviews from '../Components/ShowReview'
import CalcPrice from '../Components/CalcPrice'
import { useParams } from 'react-router-dom'
import { averageProps, reviewsProps, tuorsProps } from '../../Backend/Types/bdTypes'

interface RequestProps {
  objTuor: tuorsProps,
  objAverage: averageProps,
  objReviews: reviewsProps[]
}

const TuorView = () => {
  const { id } = useParams()

  const [tuor, setTuor] = useState<tuorsProps>()
  const [average, setAverage] = useState<averageProps>()
  const [reviews, setReviews] = useState<reviewsProps[]>([])

  const [nota_service, setService] = useState<number>(1)
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
  const avgScore: number = Number(((nota_service + nota_location + nota_amenities + nota_prices + nota_confort + nota_food) / 6).toFixed(1))
  const iconSize: number = 20
  let avgQuality: string

  if(avgScore >= 4) {
    avgQuality = 'Excellent'
  }else if (avgScore <= 2) {
    avgQuality = 'Bad'
  }else{
    avgQuality = 'Medium'
  }

  const fetchReviews = async () => {
    try {
      const response = await api.get<RequestProps>(`/tuors/${id}`)
      setTuor(response.data.objTuor)
      setAverage(response.data.objAverage)
      setReviews(response.data.objReviews)
      console.log(tuor)
      console.log(average)
      console.log(reviews)
    } catch (err) {
      console.error("Erro to find reviews: "+err)
    }
  }
  
  useEffect(() => {
    fetchReviews()
  }, [])

  const handleForm = async () => {

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
      console.error('Deu ruim no formulario: '+err)
    }
  }
  
  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <aside className={style.tuorBox}>
            Informaçoes do tuor
            <h1>{tuor!.title}</h1>

            <div className={style.tuorGroup}>
              <h2 className={`blueText`}>Overview</h2>
              <span>epsuli</span>
            </div>

            <div className={style.tuorGroup}>
              <h2 className={`blueText`}>Map</h2>
              <MapComponent lat={lat} lng={lng}/>
            </div>

            <div className={style.tuorGroup}>
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
            </div>
           
            <div className={style.tuorGroup}>
              <h3>Showing {reviews.length} review</h3>
              {reviews.map((review, index) => ( 
                <div key={index}>
                  <ShowReviews 
                    key={review.tuorID}
                    name={review.name}
                    review={review.description}
                    date={review.date}
                    avgReview={5}
                    qtdReview={10}
                  />
                </div>
              ))}
            </div>
            
            <form onSubmit={handleForm}>
              <h3>Add a review</h3>
              <div className={style.starBox}>
                <StarReview title='Services' setRate={setService}/>
                <StarReview title='Locations' setRate={setLocation}/>
                <StarReview title='Amenities' setRate={setAmenities}/>
                <StarReview title='Prices' setRate={setPrices}/>
                <StarReview title='Room comfort and quality' setRate={setConfort}/>
                <StarReview title='Food' setRate={setFood}/>
              </div>
              
              <div className={style.inputBox}>
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
            
            <CalcPrice value={100}/>

          </aside>
        </section>
        <Footer />
    </main>
  )
}

export default TuorView