import CardTuor from '../Components/CardTuor'
import Footer from '../Components/Footer'
import FormInputs from '../Components/FormInputs'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <FormInputs />
      <CardTuor 
        location='Budapes, Hungary'
        title='Wonders of the West Coast & Kimberly'
        review={4.8}
        qtd_review={10}
        time={5}
        price={520}
      />
      <h1>Home</h1>
      <img src='https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg' />
      <Footer />
    </>
  )
}

export default Home