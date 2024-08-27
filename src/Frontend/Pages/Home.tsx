import BackgroundImage from '../Components/BackgroundImage'
import Footer from '../Components/Footer'
import FormInputs from '../Components/FormInputs'
import Header from '../Components/Header'
import SideScroll from '../Components/SideScroll'
import TitleSection from '../Components/TitleSection'
import style from './home.module.css'
import global from './global.module.css'
import StatsHome from '../Components/StatsHome'

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

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.sectionTuors}`}>

        <div className={style.formBox}>
          <FormInputs />
        </div>

        <TitleSection cursive='Tuors' title='Most Popular Tuors'/>
        <SideScroll />

        <div className={style.statsBox}>
          <StatsHome stats='120+' title='Total Destination'/>
          <StatsHome stats='500+' title='Travel Package'/>
          <StatsHome stats='12k+' title='Total Travelers'/>
          <StatsHome stats='7k+' title='Positive Reviews'/>
        </div>

      </section>

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.sectionAttractions} ${style.bkgColorGray}`}>

        <TitleSection cursive='Destination' title='Top Attractions Destinations'/>



      </section>

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.sectionExperiences}`}>
      <TitleSection cursive='Browse By Category' title='Pick a Tuor Type'/>

      </section>

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.sectionTravelers} ${style.bkgColorGray}`}>
        <aside>

        </aside>
        <aside>
          <TitleSection cursive='Testimonials' title='What Travelers Say'/>
        </aside>
      </section>

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.sectionGuide}`}>
      <TitleSection cursive='Updates' title='Latest Travel Guide'/>

      </section>
      <Footer />
    </main>
  )
}

export default Home