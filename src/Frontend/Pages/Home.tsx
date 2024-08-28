import BackgroundImage from '../Components/BackgroundImage'
import Footer from '../Components/Footer'
import FormInputs from '../Components/FormInputs'
import Header from '../Components/Header'
import SideScroll from '../Components/SideScroll'
import TitleSection from '../Components/TitleSection'
import style from './home.module.css'
import global from './global.module.css'
import StatsHome from '../Components/StatsHome'
import { PiQuotes } from 'react-icons/pi'
import DestinationImage from '../Components/DestinationsImage'

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

        <div className={style.attractionBox}>
          <aside className={style.left}>
            <section className={style.top}>
              <DestinationImage  width='270px' height='198px'/>
              <DestinationImage  width='270px' height='198px'/>
              <DestinationImage  width='270px' height='198px'/>
            </section>
            <section className={style.bottom}>
              <DestinationImage  width='368px' height='198px'/>
              <DestinationImage  width='474px' height='198px'/>
            </section>
          </aside>
          <aside className={style.righ}>
            <DestinationImage  width='270px' height='428px'/>
          </aside>
        </div>

      </section>

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.sectionExperiences}`}>
      <TitleSection cursive='Browse By Category' title='Pick a Tuor Type'/>

      </section>

      <section className={`${global.contentSection} ${global.lastContentSection} ${style.bkgColorGray}`} id={style.sectionTravelers}>
        <aside>
          <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/PhotoDump.png" alt="photoDump" />
        </aside>
        <aside className={style.travelersComments}>
          <TitleSection cursive='Testimonials' title='What Travelers Say'/>
          <div className={style.commentsBox}>
            <PiQuotes color='#FC5056' size={32} />
            <p className='boldText'>
              “The UI designs he crafted are top-notch, 
              and the design system he integrated allows for straight forward fixes 
              and bulk updates throughout almost every area of the app.” 
            </p>
            <span className='greyText'>-By Molie Rosa, Photographer</span>
          </div>
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