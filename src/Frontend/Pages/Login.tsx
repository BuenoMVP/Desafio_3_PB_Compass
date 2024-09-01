import { useState } from 'react'
import Footer from '../Components/Footer'
import FormButton from '../Components/FormButton'
import Header from '../Components/Header'
import style from './login.module.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Services/firebase'

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const iconSize: number = 20

    function handleGoogle () {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then(res => console.log(res))
            .catch(err =>console.log(err))
    }

  return (
    <main className={style.pageContent}>
        <Header />
        <section className={`${style.section}`}>

            <div className={style.formLogin}>
                <h1>Wellcome!</h1>

                <form action="POST">
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
                        {!email && <p>Invalid Email</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='Enter your passowrd' onChange={(e) => setPassword(e.target.value)}/>
                        {password}
                    </div>
                    <FormButton title='Login' type='submit' />
                </form>
                <h2>OR</h2>
                <div className={style.social}>
                    <button id={style.google} onClick={handleGoogle}>
                        <FaGoogle size={iconSize}/>
                        Google
                    </button>
                    <button id={style.facebook}>
                        <FaFacebook size={iconSize} />
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