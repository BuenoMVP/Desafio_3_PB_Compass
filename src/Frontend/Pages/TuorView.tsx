import Footer from '../Components/Footer'
import Header from '../Components/Header'
import global from './global.module.css'
import style from './tuorView.module.css'

const TuorView = () => {
  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${global.contentSection} ${global.lastContentSection} ${style.section}`}>
          <aside className={style.tuorBox}>
            Informaçoes do tuor
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