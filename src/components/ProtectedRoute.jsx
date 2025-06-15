import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({ children, requiredUserType, redirectTo }) => {
  const { user, userType, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading) {
      if (!user || (requiredUserType && userType !== requiredUserType)) {
        navigate(redirectTo)
      }
    }
  }, [user, userType, loading, navigate, requiredUserType, redirectTo])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user || (requiredUserType && userType !== requiredUserType)) {
    return null
  }

  return children
}

export default ProtectedRoute