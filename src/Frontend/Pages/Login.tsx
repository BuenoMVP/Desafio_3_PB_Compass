import { useState } from 'react'
import Footer from '../Components/Footer'
import FormButton from '../Components/FormButton'
import Header from '../Components/Header'
import style from './login.module.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth } from '../Services/firebase'

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [validEmail, setValidEmail] = useState<boolean>(true);
    const [validPassword, setValidPassword] = useState<boolean>(true);

    const regex: RegExp = /^[^\s@]+@[^\s@]+\.(com|br)$/
    
    const iconSize: number = 20

    function validateEmail (value: string) {
        setEmail(value)
        if (regex.test(value)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
    }

    function validatePassword (value: string) {
        setPassword(value)
        if (password.length >= 5) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }

    function handleGoogle () {
        const googleProvider = new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider)
            .then(res => console.log(res))
            .catch(err =>console.log(err))
    }

    function handleFacebook () {
        const faceProvider = new FacebookAuthProvider()

        console.log(faceProvider)

        signInWithPopup(auth, faceProvider)
            .then(res => console.log(res))
            .catch(err =>console.log(err))
    }

  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${style.section}`}>
            <div className={`${style.apresentation} blueText`}>
                <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/Logo_Black.svg" alt="logo-image" />   
                <h1>Your journey starts here. <p className='redText'>Let's explore the world together.</p></h1>
                <h2>Ready to plan your next adventure?</h2>
            </div>

            <div className={style.formLogin}>
                <div className={style.texts}>
                    <h1>Log in to find your perfect trip.</h1>
                </div>

                <form action="POST">
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder='Enter your email' onChange={(e) => validateEmail(e.target.value)}/>
                        {!validEmail && <p className={style.errorText}>Invalid Email</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='Enter your passowrd' onChange={(e) => validatePassword(e.target.value)}/>
                        {!validPassword && <p className={style.errorText}>Min 6 characters</p>}
                    </div>
                    <FormButton title='Login' type='submit' />
                </form>
                <h2>OR</h2>
                <div className={style.social}>
                    <button id={style.google} onClick={handleGoogle}>
                        <FaGoogle size={iconSize}/>
                        Google
                    </button>
                    <button id={style.facebook} onClick={handleFacebook}>
                        <FaFacebook size={iconSize}  />
                        Facebook
                    </button>
                </div>

                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>

        </section>
        <Footer />
    </main>
  )
}

export default Login