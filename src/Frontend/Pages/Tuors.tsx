/* eslint-disable react-hooks/exhaustive-deps */
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BackgroundImage from '../Components/BackgroundImage'
import global from './global.module.css'
import style from './tuors.module.css'
import FormInputs from '../Components/FormInputs'
import { LuArrowDownAZ } from 'react-icons/lu'
import { useEffect, useState } from 'react'
import { averageProps, categoriesProps, tuorsProps } from '../../Backend/Types/bdTypes'
import api from '../Services/api'
import CardTuor from '../Components/CardTuor'
import CheckBox from '../Components/CheckBox'
import { IoSearch } from 'react-icons/io5'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import FormButton from '../Components/FormButton'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

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

interface FilterProps {
  title: string,
  price: number,
  categorie: string,
  destination: string,
  review: number
}

const Tuor = () => {
  const [qtdPages, setQtdPages] = useState<number>(0)

  const [offset, setOffset] = useState<number>(0)
  const [tuors, setTuors] = useState<tuorsProps[]>([])
  const [reviews, setReviews] = useState<averageProps[]> ([])
  const [categories, setCategories] = useState<categoriesProps[]> ([])

  const [filterTitle, setFilterTitle] = useState<string | null>(null)
  const [filterPrice, setFilterPrice] = useState<number | null>(null)
  const [filterCategorie, setFilterCategorie] = useState<string | null>(null)
  const [filterDestination, setFilterDestination] = useState<string | null>(null)
  const [filterReview, setFilterReview] = useState<number | null>(null)
  const [reqFilter, setReqFilter] = useState<boolean>(false)

  const objFilters: FilterProps = {
    title: filterTitle,
    price: filterPrice,
    categorie: filterCategorie,
    destination: filterDestination,
    review: filterReview,
  }

  const handleFilterPrice = (e: Event, newPrice: number) => {
    setFilterPrice(newPrice)
  }

  const handlePagination = (e: Event, value: number) => {
    if (value === 1 ) {
      setOffset(0)
    } else {
      setOffset((value-1)*9)
    }
    window.scrollTo(0, 0)
  }

  const iconSize: number = 20

  const vetReviews: string[] = [
    '5 Stars',
    '4 Stars & Up',
    '3 Stars & Up',
    '2 Stars & Up',
    '1 Stars & Up'
  ]

  const fetchTuors = async () => {
    if(reqFilter == false) {
      try {
        const response = await api.get<RequestProps>(`/tuors?offset=${offset}`)
        setTuors(response.data.objTuor)
        setReviews(response.data.objReviews)
        setCategories(response.data.objCategories)
        setQtdPages(Math.ceil((response.data.total)/9))
      } catch (err) {
        console.error("Erro to find tuors: "+err)
      }
    } else {
      try {
        const response = await api.get<RequestProps>(`/tuors/filter?title=${filterTitle}`)
        setTuors(response.data.objTuor)
        setReviews(response.data.objReviews)
        setCategories(response.data.objCategories)
        setQtdPages(Math.ceil((response.data.total)/9))
      } catch (err) {
        console.error("Erro to find tuors: "+err)
      }
    }
  }
  
  useEffect(() => {
    fetchTuors()
  }, [offset, reqFilter])

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

              <div className={style.box}>
                <p>Search</p>
                <div id={style.searchText}>
                  <input type="text" placeholder='Type anything...' onChange={(e) => setFilterTitle(e.target.value)}/>
                  <IoSearch size={iconSize} style={{cursor: 'pointer'}} onClick={() => console.log('apertou envio')}/>
                </div>
                
              </div>

              <div className={style.box}>
                <p>Filter By</p>
                <form className={style.slider}>
                  <Box sx={{ width: '100%', gap: '.1rem', display: 'flex', flexDirection: 'column' }}>
                    <Slider
                      size="medium"
                      defaultValue={filterPrice}
                      aria-label="Small"
                      min={0}
                      max={1000}
                      color='error'
                      onChange={handleFilterPrice}
                    />
                    <div id={style.prices}>
                      <span>$0.00</span>
                      <p className='blueText'>${filterPrice}.00</p>
                    </div>
                  </Box>
                  <FormButton title="Submit" type='submit'/>
                </form>
              </div>

              <div className={style.box}>
                <p>Categories</p>
                {categories.map((categorie, index) => (
                  <CheckBox 
                    key={index} 
                    text={categorie.categorie}
                  />
                ))}
              </div>

              <div className={style.box}>
                <p>Destinations</p>
                <span className='boldText'>Africa</span>
                  <CheckBox text='Morocco' />
                  <CheckBox text='Tanzania' />
                <span  className='boldText'>Americas</span>
                  <CheckBox text='Argentina' />
                  <CheckBox text='Canada' />
                  <CheckBox text='Colombia' />
                  <CheckBox text='Costa Rica' />
                  <CheckBox text='Brazil' />
                <span  className='boldText'>Asia</span>
                  <CheckBox text='Cambodia' />
                  <CheckBox text='Japan' />
                  <CheckBox text='Nepal' />
                  <CheckBox text='Thailand' />
                  <CheckBox text='Viet Nam' />
                <span  className='boldText'>Europe</span>
                  <CheckBox text='France' />
                  <CheckBox text='Greece' />
              </div>

              <div className={style.box}>
                <p>Reviews</p>
                {vetReviews.map((review, index) => (
                  <CheckBox 
                    key={index} 
                    text={review}
                  />
                ))}
              </div>
              
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
                    <option value="a fazer">Price</option>
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
                      id={tuor._id!}
                      location={tuor.location}
                      city={tuor.city}
                      title={tuor.title}
                      review={reviews[index].avg_average}
                      qtd_review={reviews[index].qtdReviews}
                      price={tuor.price_person}
                      time={tuor.time}
                    />
                  </div>
                ))}
              </section>
              <footer>
                <Stack spacing={2}>
                  <Pagination 
                    color='error' 
                    count={qtdPages} 
                    onChange={handlePagination}
                  />
                </Stack>
              </footer>
            </div>
          </div>
        </section>
        <Footer />
    </main>
  )
}

export default Tuor