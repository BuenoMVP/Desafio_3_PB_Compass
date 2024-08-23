import Footer from '../Components/Footer'
import FormInputs from '../Components/FormInputs'
import Header from '../Components/Header'
import SideScroll from '../Components/SideScroll'

const Home = () => {
  return (
    <>
      <Header />
      <FormInputs />
      <SideScroll />
      <h1>Home</h1>
      <img src='https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg' />
      <Footer />
    </>
  )
}

export default Home