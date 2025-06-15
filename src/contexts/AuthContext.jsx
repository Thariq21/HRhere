import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState(null) // 'pelamar' or 'hr'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail')
    const loggedInHREmail = sessionStorage.getItem('loggedInHREmail')
    const loggedInHRName = sessionStorage.getItem('loggedInHRName')

    if (loggedInUserEmail) {
      setUser({ email: loggedInUserEmail })
      setUserType('pelamar')
    } else if (loggedInHREmail) {
      setUser({ email: loggedInHREmail, name: loggedInHRName })
      setUserType('hr')
    }
    
    setLoading(false)
  }, [])

  const loginPelamar = (email) => {
    sessionStorage.setItem('loggedInUserEmail', email)
    setUser({ email })
    setUserType('pelamar')
  }

  const loginHR = (email, name) => {
    sessionStorage.setItem('loggedInHREmail', email)
    sessionStorage.setItem('loggedInHRName', name)
    setUser({ email, name })
    setUserType('hr')
  }

  const logout = () => {
    sessionStorage.removeItem('loggedInUserEmail')
    sessionStorage.removeItem('loggedInHREmail')
    sessionStorage.removeItem('loggedInHRName')
    setUser(null)
    setUserType(null)
  }

  const value = {
    user,
    userType,
    loading,
    loginPelamar,
    loginHR,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}