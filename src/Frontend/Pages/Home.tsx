import BackgroundImage from '../Components/BackgroundImage'
import Footer from '../Components/Footer'
import FormInputs from '../Components/FormInputs'
import Header from '../Components/Header'
import SideScroll from '../Components/SideScroll'
import TitleSection from '../Components/TitleSection'
// import style from './home.module.css'
import global from './global.module.css'

const Home = () => {
  return (
    <main>
      <Header />
      <BackgroundImage imgUrl='https://desafio-3-mvbp-bucket.s3.amazonaws.com/imgBkgBaloes.png' imgHeight='40rem'/>
      <section className={`${global.contentSection} ${global.lastContentSection}`}>
        <FormInputs />
        <TitleSection cursive='Tuors' title='Most Popular Tuors'/>
        <SideScroll />
      </section>
      <Footer />
    </main>
  )
}

export default Home