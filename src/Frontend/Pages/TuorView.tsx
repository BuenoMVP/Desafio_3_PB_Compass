/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { averageProps, locationProps, reviewsProps, tuorsProps } from '../../Backend/Types/bdTypes'
import InfoTour from '../Components/InfoTuor'
import { IoStar } from 'react-icons/io5'
// import { GoShareAndroid } from 'react-icons/go'
// import { CiHeart } from 'react-icons/ci'

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

  const [addReview, setAddReview] = useState<number>(0)

  const [nota_service, setService] = useState<number>(1)
  const [nota_location, setLocation] = useState<number>(1)
  const [nota_amenities, setAmenities] = useState<number>(1)
  const [nota_prices, setPrices] = useState<number>(1)
  const [nota_food, setFood] = useState<number>(1)
  const [nota_confort, setConfort] = useState<number>(1)
  const [name, setName] = useState<string>('anonymous')
  const [email, setEmail] = useState<string>('standart@standart.com')
  const [description, setDescription] = useState<string>('No comment.')
  const tuorID: string | undefined= tuor?._id?.toString()

  const location: string = `${tuor?.location?.country} ${tuor?.location?.city}`
  const avgScore: number = Number(average?.avg_average.toFixed(1))
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
      setAddReview(0)
      console.log(tuor)
      console.log(average)
      console.log(reviews)
    } catch (err) {
      console.error("Erro to find reviews: "+err)
    }
  }
  
  useEffect(() => {
    fetchReviews()
  }, [addReview])

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
      setAddReview(1)
    } catch (err) {
      console.error('Deu ruim no formulario: '+err)
    }
  }
  
  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <aside className={style.tuorBox}>
          <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg" alt="photo" />

            <div className={style.locationStats}>
              <div>
                {location}
              </div>

              <div>
                {/* <><GoShareAndroid size={iconSize} color='#000'/></> 
                <CiHeart size={iconSize} color='#000'/> */}
              </div>
            </div>

            <h1 className={`${style.titleDetail} blueText`}>{tuor?.title}</h1>

            <div className={style.tuorInfo}>
              <InfoTour title='From' value={`$${tuor?.price_person}`} textBlue={false}/> 
              <InfoTour title='Duration' value={`${tuor?.time} days`} textBlue={true}/>
              <InfoTour title='Max People' value={`${tuor?.max_person}`} textBlue={true}/>
              <InfoTour title='Min Age' value={`${tuor?.min_age}+`} textBlue={true}/>
              <InfoTour title='Tuor Type' value={`${tuor?.categories}`} textBlue={true}/> 
              <div>
                <p>Reviews</p>
                <span>
                  <IoStar size={15} color='#FD5056'/>
                  <p className='boldText blueText'>{avgScore}</p>  
                  <article>({average?.qtdReviews} reviews)</article> 
                </span>
              </div>
            </div>

            <div className={style.tuorGroup}>
              <h2 className={`blueText`}>Overview</h2>
              <span>{tuor?.overview}</span>
            </div>

            <div className={style.tuorGroup}>
              <h2 className={`blueText`}>Map</h2>
              <MapComponent location={location}/>
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
                  <AverageReviews title='Services' score={average?.avg_service!}/>
                  <AverageReviews title='Locations' score={average?.avg_location!}/>
                  <AverageReviews title='Ameneties' score={average?.avg_amenities!}/>
                </div>
                <div className={style.averageGroup}>
                  <AverageReviews title='Prices' score={average?.avg_prices!}/>
                  <AverageReviews title='Food' score={average?.avg_food!}/>
                  <AverageReviews title='Room confort and quality' score={average?.avg_confort!}/>
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
                    avgReview={review.nota_average}
                    qtdReview={15}
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
            
            <CalcPrice value={tuor?.price_person!}/>

          </aside>
        </section>
        <Footer />
    </main>
  )
}

export default TuorView