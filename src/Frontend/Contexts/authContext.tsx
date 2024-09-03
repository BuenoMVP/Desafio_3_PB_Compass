import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { auth } from "../Services/firebase"
import { onAuthStateChanged, User } from "firebase/auth"

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
    currentUser: User | null
    userLoggedIn: boolean
    loading: boolean
    token: string | null
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const doSignOut = (): Promise<void> => {
  return auth.signOut();
} 
  
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken()
        setCurrentUser(user)
        setUserLoggedIn(true)
        setToken(idToken)
        localStorage.setItem("token", idToken)
      } else {
        setCurrentUser(null)
        setUserLoggedIn(false)
        setToken(null)
        localStorage.removeItem("token")
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, loading, token }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}