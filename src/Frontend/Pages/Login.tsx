import { FormEvent, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import style from './login.module.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Services/firebase'
import { useAuth } from '../Contexts/authContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [validEmail, setValidEmail] = useState<boolean>(true)
    const [validPassword, setValidPassword] = useState<boolean>(true)
    const [userLogin, setUserLogin] = useState<boolean>(true)
    const { userLoggedIn } = useAuth()

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

    async function handleCreateUser (e: FormEvent) {
        e.preventDefault()
        
        try {
          await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
          console.error({'error': error})
        }
    }

    async function handleLoginUser (e: FormEvent) {
        e.preventDefault()
        
        try {
          await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
          console.error({'error': error})
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
        {userLoggedIn && <Navigate to="/Tuors" replace={true} />}
        <Header />
        <section className={`${style.section}`}>
            <div className={`${style.apresentation} blueText`}>
                <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/Logo_Black.svg" alt="logo-image" />   
                <h1>Your journey starts here. <p className='redText'>Let's explore the world together.</p></h1>
                <h2>Ready to plan your next adventure?</h2>
            </div>

            <div className={style.formLogin}>
                <div className={style.texts}>
                    <h1>
                        { userLogin ? 'Sign In to find your perfect trip.' : 'Sign Up to find your perfect trip.'}
                    </h1>
                </div>

                <form onSubmit={userLogin ? handleLoginUser : handleCreateUser}>
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
                    
                    <div>
                        <button type='submit'>
                            <span>{userLogin ? 'Sign In' : 'Sign Up'}</span>
                        </button>

                        <span>
                            { userLogin ? 'Do not have a account?' : 'Do you have a account?'}
                            <p onClick={() => setUserLogin(!userLogin)}> 
                                {userLogin ? 'Sing Up!' : 'Sign In!'}
                            </p>
                        </span>
                    </div>
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
            </div>

        </section>
        <Footer />
    </main>
  )
}

export default Login