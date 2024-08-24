import BackgroundImage from '../Components/BackgroundImage'
import Footer from '../Components/Footer'
import FormInputs from '../Components/FormInputs'
import Header from '../Components/Header'
import SideScroll from '../Components/SideScroll'
import TitleSection from '../Components/TitleSection'
import style from './home.module.css'
import global from './global.module.css'

const Home = () => {
  return (
    <main className={style.pageContent}>
      <Header />
      <BackgroundImage imgUrl='https://desafio-3-mvbp-bucket.s3.amazonaws.com/imgBkgBaloes.png' imgHeight='40rem'/>
      <div className={style.imageText}>
        <span className='cursiveText redText'>Save 15% off in worldwide</span>
        <h1>Travel & Adventures</h1>
        <p>Find awesome hotel, tuor, car and activities in London</p>
      </div>
      <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
        <div className={style.formBox}>
          <FormInputs />
        </div>
        <TitleSection cursive='Tuors' title='Most Popular Tuors'/>
        <SideScroll />

        <TitleSection cursive='Destination' title='Top Attractions Destinations'/>

        <TitleSection cursive='Browse By Category' title='Most Popular Tuors'/>

        <TitleSection cursive='Updates' title='Latest Travel Guide'/>
      </section>
      <Footer />
    </main>
  )
}

export default Home