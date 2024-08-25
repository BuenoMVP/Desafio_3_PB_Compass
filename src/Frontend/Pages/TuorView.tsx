import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MapComponent from '../Components/MapComponent'
import global from './global.module.css'
import style from './tuorView.module.css'

const TuorView = () => {
  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <aside className={style.tuorBox}>
            Informaçoes do tuor
            <MapComponent lat={-23.187049672867087} lng={-50.65637960242221}/>
          </aside>
          <aside className={style.priceBox}>
            informações do preço
          </aside>
        </section>
        <Footer />
    </main>
  )
}

export default TuorView