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
import { IoSearch } from 'react-icons/io5'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import FormButton from '../Components/FormButton'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

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

const Tuor = () => {
  const [qtdPages, setQtdPages] = useState<number>(0)

  const [offset, setOffset] = useState<number>(0)
  const [tuors, setTuors] = useState<tuorsProps[]>([])
  const [reviews, setReviews] = useState<averageProps[]> ([])
  const [categories, setCategories] = useState<categoriesProps[]> ([])

  const [aux, setAux] = useState<boolean>(false)

  const [sort, setSort] = useState<string>('Title')
  const [order, setOrder] = useState<boolean>(false)

  const [filterTitle, setFilterTitle] = useState<string | null>(null)
  const [filterPrice, setFilterPrice] = useState<number | null>(null)
  const [filterCategorie, setFilterCategorie] = useState<string | null>(null)
  const [filterDestination, setFilterDestination] = useState<string | null>(null)
  const [filterReview, setFilterReview] = useState<string | null>(null)
  const [reqFilter, setReqFilter] = useState<boolean>(false)

  const handleFilter = () => {
    setAux(!aux)
    setReqFilter(true)
  }

  const handleFilterPrice = (e: Event, newPrice: number) => {
    setFilterPrice(newPrice)
  }

  const handleFilterCategorie = (e: Event) => {
    setFilterCategorie((e.target as HTMLInputElement).value)
    setAux(!aux)
    setReqFilter(true)
  }

  const handleFilterDestination = (e: Event) => {
    setFilterDestination((e.target as HTMLInputElement).value)
    setAux(!aux)
    setReqFilter(true)
  }

  const handleFilterReview = (e: Event) => {
    setFilterReview((e.target as HTMLInputElement).value)
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
        setQtdPages(response.data.total)
      } catch (err) {
        console.error("Erro to find tuors: "+err)
      }
    } else {
      try {
        const response = await api.get<RequestProps>(`/filter?title=${filterTitle}&price=${filterPrice}&categorie=${filterCategorie}&destination=${filterDestination}`)
        setTuors(response.data.objTuor)
        setReviews(response.data.objReviews)
        setCategories(response.data.objCategories)
        setQtdPages(response.data.total)
        setReqFilter(false)
      } catch (err) {
        console.error("Erro to find tuors: "+err)
      }
    }
  }

  const fetchSort = () => {
    if (sort == 'Title') {
      if (order) {
        setTuors(tuors.sort((a: tuorsProps, b: tuorsProps) => {
          if (a.title < b.title) {
            return -1
          } else {
            return true
          }
        }))
      } else {
        setTuors(tuors.sort((a: tuorsProps, b: tuorsProps) => {
          if (a.title > b.title) {
            return -1
          } else {
            return true
          }
        }))
      }
    } else {
      if (order) {
        setTuors(tuors.sort((a: tuorsProps, b: tuorsProps) => {
          if (a.price_person < b.price_person) {
            return -1
          } else {
            return true
          }
        }))
      } else {
        setTuors(tuors.sort((a: tuorsProps, b: tuorsProps) => {
          if (a.price_person > b.price_person) {
            return -1
          } else {
            return true
          }
        }))
      }
    }

  }
  
  useEffect(() => {
    fetchTuors()
  }, [offset, aux])

  useEffect(() => {
    fetchSort()
  }, [sort, order])

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
                  <IoSearch size={iconSize} style={{cursor: 'pointer'}} onClick={handleFilter}/>
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
                      <p className='blueText'>${filterPrice == null ? '0' : filterPrice}.00</p>
                    </div>
                  </Box>
                  <FormButton title="Submit" type='button' onClick={handleFilter}/>
                </form>
              </div>

              <div className={style.box}>
                <p>Categories</p>
                <FormControl >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={filterCategorie}
                    name="radio-buttons-group"
                    onChange={handleFilterCategorie}
                    >
                      {categories.map((item, index) => (
                        <FormControlLabel key={index} value={item.categorie} control={<Radio color="error" />} label={item.categorie} />
                      ))}
                  </RadioGroup>
                </FormControl>
              </div>

              <div className={style.box}>
                <p>Destinations</p>
                <FormControl >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={filterDestination}
                    name="radio-buttons-group"
                    onChange={handleFilterDestination}
                  >
                    <span className='boldText'>Africa</span>
                      <FormControlLabel value={'Morocco'} control={<Radio color="error" />} label='Morocco' />
                      <FormControlLabel value={'Tanzania'} control={<Radio color="error" />} label='Tanzania' />
                    <span className='boldText'>Americas</span>
                      <FormControlLabel value={'Argentina'} control={<Radio color="error" />} label='Argentina' />
                      <FormControlLabel value={'Canada'} control={<Radio color="error" />} label='Canada' />
                      <FormControlLabel value={'Colombia'} control={<Radio color="error" />} label='Colombia' />
                      <FormControlLabel value={'Costa Rica'} control={<Radio color="error" />} label='Costa Rica' />
                      <FormControlLabel value={'Brazil'} control={<Radio color="error" />} label='Brazil' />
                    <span className='boldText'>Asia</span>
                      <FormControlLabel value={'Cambodia'} control={<Radio color="error" />} label='Cambodia' />
                      <FormControlLabel value={'Japan'} control={<Radio color="error" />} label='Japan' />
                      <FormControlLabel value={'Nepal'} control={<Radio color="error" />} label='Nepal' />
                      <FormControlLabel value={'Thailand'} control={<Radio color="error" />} label='Thailand' />
                      <FormControlLabel value={'Viet Nam'} control={<Radio color="error" />} label='Viet Nam' />
                    <span className='boldText'>Europa</span>
                      <FormControlLabel value={'France'} control={<Radio color="error" />} label='France' />
                      <FormControlLabel value={'Greece'} control={<Radio color="error" />} label='Greece' />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className={style.box}>
                <p>Reviews</p>
                <FormControl >
                  <RadioGroup
                    value={filterReview}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleFilterReview}
                    >
                      {vetReviews.map((item, index) => (
                        <FormControlLabel key={index} value={item} control={<Radio color="error" />} label={item} />
                      ))}
                  </RadioGroup>
                </FormControl>
              </div>
              
            </div>
            <div className={style.tuors}>
              <header>
                <p>{qtdPages} tuors</p>
                <span>
                  <p>Sort by </p>
                  <div id={style.orderBox}>
                    <LuArrowDownAZ size={iconSize} onClick={() => setOrder(!order)}/>
                  </div>
                  <select 
                    name='Filter'
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="Title">Title</option>
                    <option value="Price">Price</option>
                  </select>
                </span>
              </header>
              <h1 
                style={{display: tuors.length == 0 ? 'block' : 'none'}}
                className={style.notFoudText}
              >
                Tuors not Found!
              </h1>
              <section className={style.cards}>
                
                {tuors.map((tuor, index) => (
                  <div 
                    className={style.cardTuorBox}
                    style={{display: tuors.length > 0 ? 'block' : 'none'}}
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
                    count={Math.ceil((qtdPages)/9)} 
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