import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import style from './styles.module.css'
import InputIconText from '../InputIconText'
import { PiPaperPlaneTilt } from 'react-icons/pi'
import FormButton from '../FormButton'
import { useState } from 'react'

const Footer = () => {
  const [validEmail, setValidEmail] = useState<boolean>(true)

  const iconSize:number = 20

  const regex: RegExp = /^[^\s@]+@[^\s@]+\.(com|br)$/

  function validateEmail (value: string) {
    if (regex.test(value)) {
        setValidEmail(true)
    } else {
        setValidEmail(false)
    }
}

  return (
    <section className={style.section}>
        <div className={style.aboutBox}>
            <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/Logo_Wite.svg" alt="logo image" />
            <br/>
            <span className='cursiveText textSizeSmall'>Need any help?</span>
            <p className='boldText'>
                <span>Call Us: </span>
                <span className='redText'>(888)1234 5678</span>
            </p>
            <br/>
            <span>Love Street, Muscat, Oman</span>
            <span>exaample@trisog.com</span>
            <br />
            <nav className={style.navSocial}>
                <a href="https://www.facebook.com/" target='blanck'><FaFacebookSquare size={iconSize} /></a>
                <a href="https://x.com/" target='blanck'><FaTwitter size={iconSize} /></a>
                <a href="https://br.linkedin.com/" target='blanck'><FaLinkedinIn size={iconSize} /></a>
            </nav>
            
        </div>
        <div className={style.informationBox}>
            <nav className={style.navCompany}>
                <span className='cursiveText textSizeSmall'>Company</span>
                <a href='/' >About Us</a>
                <a href='/' >Contact Us</a>
                <a href='/' >Travel Guides</a>
                <a href='/' >Data Police</a>
            </nav>
            <nav className={style.navTopDestination}>
                <span className='cursiveText textSizeSmall'>Top Destination</span>
                <div className={style.table}>
                    <a href='/' >Las Vegas</a>
                    <a href='/' >Tokyo</a>
                    <a href='/' >New York City</a>
                    <a href='/' >Sydney</a>
                    <a href='/' >San Francisco</a>
                    <a href='/' >Melbourne</a>
                    <a href='/' >Hawaii</a>
                    <a href='/' >Dubai</a>
                </div>
            </nav>
        </div>
        <div className={style.contactBox}>
            <span className='cursiveText textSizeSmall'>Sign up Newsletter</span>
            <form action="" className={style.emailForm}>
                <InputIconText 
                    title=''
                    placeHolder='Enter email...'
                    typeOperation='text'
                    icon={<PiPaperPlaneTilt size={20} color='#A9AFBB'/>}
                    function={validateEmail}
                />
                <p 
                    style={{
                        color: validEmail ? 'transparent' : '#ff0000', 
                        paddingBottom: '.5rem'
                    }}
                >
                    {validEmail ? 'Valid Email' : 'Invalid Email'}
                </p>
                <FormButton 
                    title='Submit'
                    type='button'
                />
            </form>
            <p>@ 2023 Trisog All Right Reserved</p>
        </div>
    </section>
  )
}

export default Footer