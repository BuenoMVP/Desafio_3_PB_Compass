import { PiPaperPlaneTilt } from 'react-icons/pi'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import InputIconText from '../Components/InputIconText'

const Home = () => {
  return (
    <>
      <Header />
      <br/>
      <InputIconText 
        icon={<PiPaperPlaneTilt size={20} color='#A9AFBB' />} 
        title='Destination' 
        placeHolder='Destination' 
        typeOperation='text'
      />
      <br/>
      <h1>Home</h1>
      <img src='https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg' />
      <Footer />
    </>
  )
}

export default Home