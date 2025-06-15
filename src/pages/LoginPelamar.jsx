import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import Input from '../components/Input'
import Message from '../components/Message'

const LoginPelamar = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { loginPelamar } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      setMessage('Email dan password tidak boleh kosong.')
      setMessageType('error')
      return
    }

    setLoading(true)
    setMessage('')

    // Simulate API call
    setTimeout(() => {
      const savedPassword = localStorage.getItem(formData.email)
      
      if (savedPassword && savedPassword === formData.password) {
        setMessage('Login berhasil! Mengarahkan ke dashboard...')
        setMessageType('success')
        
        loginPelamar(formData.email)
        
        setTimeout(() => {
          navigate('/dashboard-pelamar')
        }, 1500)
      } else {
        setMessage('Email atau password salah.')
        setMessageType('error')
      }
      
      setLoading(false)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">HRhere.id</h2>
            <p className="text-gray-600 text-lg">Login Pelamar</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
              required
            />
            
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan password Anda"
              required
            />
            
            <div className="text-right">
              <Link to="#" className="text-primary hover:text-primary-dark text-sm font-medium">
                Lupa Password?
              </Link>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Login'}
            </Button>
            
            {message && (
              <Message type={messageType}>
                {message}
              </Message>
            )}
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Belum punya akun?{' '}
              <Link to="/signup-pelamar" className="text-primary hover:text-primary-dark font-semibold">
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPelamar