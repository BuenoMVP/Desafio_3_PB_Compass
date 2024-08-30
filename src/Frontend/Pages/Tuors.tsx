import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BackgroundImage from '../Components/BackgroundImage'
import global from './global.module.css'
import style from './tuors.module.css'
import FormInputs from '../Components/FormInputs'
import { LuArrowDownAZ } from 'react-icons/lu'
import FiltersComponent from '../Components/FiltersComponent'
import { useEffect, useState } from 'react'
import { tuorsProps } from '../../Backend/Types/bdTypes'
import api from '../Services/api'
import CardTuor from '../Components/CardTuor'

interface RequestProps {
  nextURL: string,
  previousURL: string,
  limit: number,
  offset: number,
  total: number,
  objTuor?: tuorsProps[]
}

const Tuor = () => {
  // const [nextURL, setNextURL] = useState<string>('null')
  // const [previousURL, setPreviousURL] = useState<string>('null')

  const [offset, setOffset] = useState<number>(0)
  const [tuors, setTuors] = useState<tuorsProps[]>([])

  const iconSize: number = 20

  const vetCategories: string[] = [
   "Action",
   "Shooter",
   "Fighting",
   "Puzzle",
   "Survival Horror",
   "Platform",
   "Sports",
   "Metroidvania",
   "Adventure" 
  ]

  const vetReviews: string[] = [
    '5 Stars',
    '4 Stars & Up',
    '3 Stars & Up',
    '2 Stars & Up',
    '1 Stars & Up'
  ]

  const fetchTuors = async () => {
    try {
      const response = await api.get<RequestProps>(`/tuors?offset=${offset}`)
      console.log(response.data)
      // setNextURL(response.data.nextURL)
      // setPreviousURL(response.data.previousURL)
      setOffset(response.data.offset)
      setTuors(response.data.objTuor!)
      console.log('offset: '+offset)
      console.log(tuors)
    } catch (err) {
      console.error("Erro to find reviews: "+err)
      // setNextURL('null')
      // setPreviousURL('null')
      setOffset(0)
    }
  }
  
  useEffect(() => {
    fetchTuors()
  }, [offset])

  return (
    <main className={style.pageContent}>
        <Header />
        <BackgroundImage imgUrl='https://desafio-3-mvbp-bucket.s3.amazonaws.com/imgBkgPraia.png' imgHeight='40rem'/>
        <div className={style.imageText}>
          <h1>Tuor Package</h1>
          <p>Home / <span className='redText'>Tuor Package</span></p>
        </div>
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <div className={style.formBox}>
            <FormInputs />
          </div>
          <div className={style.contentBox}>
            <div className={style.filters}>
              <FiltersComponent title='Sumary' args={vetCategories}/>
              <FiltersComponent title='Sumary' args={vetCategories}/>
              <FiltersComponent title='Reviews' args={vetReviews}/>
            </div>
            <div className={style.tuors}>
              <header>
                <p>{tuors.length} tuors</p>
                <span>
                  <p>Sort by </p>
                  <div id={style.orderBox}>
                    <LuArrowDownAZ size={iconSize} />
                  </div>
                  <select 
                    name='Filter'
                  >
                    <option value="a fazer">Defalut</option>
                    <option value="a fazer">Title</option>
                    <option value="a fazer">Time</option>
                    <option value="a fazer">Location</option>
                  </select>
                </span>
              </header>
              <section className={style.cards}>
                {tuors.map((tuor, index) => (
                  <div 
                    className={style.cardTuorBox}
                    key={index}
                  >
                    <CardTuor 
                      location={tuor.location}
                      title={tuor.title}
                      review={3.1}
                      qtd_review={3.666}
                      price={tuor.price_person}
                      time={tuor.time}
                    />
                  </div>
                ))}
              </section>
              <footer>
              <button onClick={() => setOffset(offset-9)}>
                  anterior
                </button>
                <button onClick={() => setOffset(offset+9)}>
                  proximo
                </button>
              </footer>
            </div>
          </div>
        </section>
        <Footer />
    </main>
  )
}

export default Tuor