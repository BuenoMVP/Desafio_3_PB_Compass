import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BackgroundImage from '../Components/BackgroundImage'
import global from './global.module.css'
import style from './tuors.module.css'
import FormInputs from '../Components/FormInputs'
import { LuArrowDownAZ } from 'react-icons/lu'
import FiltersComponent from '../Components/FiltersComponent'

const Tuor = () => {
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

  return (
    <main>
        <Header />
        <BackgroundImage imgUrl='https://desafio-3-mvbp-bucket.s3.amazonaws.com/imgBkgPraia.png' imgHeight='40rem'/>
        <section className={`${global.contentSection} ${global.lastContentSection}`}>
          <FormInputs />
          <div className={style.contentBox}>
            <div className={style.filters}>
              <FiltersComponent title='Sumary' args={vetCategories}/>
              <FiltersComponent title='Sumary' args={vetCategories}/>
              <FiltersComponent title='Reviews' args={vetReviews}/>
            </div>
            <div className={style.tuors}>
              <header>
                <p>15 tuors</p>
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
              tuors
            </div>
          </div>
        </section>
        <Footer />
    </main>
  )
}

export default Tuor