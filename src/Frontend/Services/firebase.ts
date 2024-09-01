
import { initializeApp } from "firebase/app"
import { getAuth, Auth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBwzhcjIeftEpO5XcWtivqMuoZsbbVzmdU",
  authDomain: "desafio-3-compass.firebaseapp.com",
  projectId: "desafio-3-compass",
  storageBucket: "desafio-3-compass.appspot.com",
  messagingSenderId: "981166458559",
  appId: "1:981166458559:web:0c16a61448c422afcaa80a",
  measurementId: "G-989H3D35KS"
}

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app)

// const app = firebase.initializeApp(firebaseConfig)

// const auth = firebaseAuth.initializeAuth(app)
// firebaseAuth.signInWithEmailAndPassword(auth, "admin@admin.com", "123456")
//   .then(user => console.log(user))
//   .catch(error => console.log('error na auth: '+error))