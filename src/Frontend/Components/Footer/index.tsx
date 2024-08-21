import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import styles from './styles.module.css'

const Footer = () => {
  const iconSize:number = 20

  return (
    <section className={styles.section}>
        <div className={styles.aboutBox}>
            <p className="logo logoTextFamily">Trisog</p>
            <br/>
            <span className='cursiveTextFamily'>Need any help?</span>
            <p>Call Us: (888)1234 5678</p>
            <br/>
            <span>Love Street, Muscat, Oman</span>
            <span>exaample@trisog.com</span>
            <br />
            <nav className={styles.navSocial}>
                <a href="https://www.facebook.com/" target='blanck'><FaFacebookSquare size={iconSize} /></a>
                <a href="https://x.com/" target='blanck'><FaTwitter size={iconSize} /></a>
                <a href="https://br.linkedin.com/" target='blanck'><FaLinkedinIn size={iconSize} /></a>
            </nav>
            
        </div>
        <div className={styles.informationBox}>
            <nav className={styles.navCompany}>
                <span className='cursiveTextFamily'>Company</span>
                <a href='/' >About Us</a>
                <a href='/' >Contact Us</a>
                <a href='/' >Travel Guides</a>
                <a href='/' >Data Police</a>
            </nav>
            <nav className={styles.navTopDestination}>
                <span className='cursiveTextFamily'>Top Destination</span>
                <div className={styles.table}>
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
        <div className={styles.contactBox}>
            <span className='cursiveTextFamily'>Sign up Newsletter</span>
            <p>@ 2023 Trisog All Right Reserved</p>
        </div>
    </section>
  )
}

export default Footer