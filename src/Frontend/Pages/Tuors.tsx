import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BackgroundImage from '../Components/BackgroundImage'
import global from './global.module.css'
import style from './tuors.module.css'
import FormInputs from '../Components/FormInputs'
import { LuArrowDownAZ } from 'react-icons/lu'

const Tuor = () => {
  const iconSize: number = 20

  return (
    <main>
        <Header />
        <BackgroundImage imgUrl='https://desafio-3-mvbp-bucket.s3.amazonaws.com/imgBkgPraia.png' imgHeight='40rem'/>
        <section className={global.contentSection}>
          <FormInputs />
          <div className={style.contentBox}>
            <div className={style.filters}>
              Filtros
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