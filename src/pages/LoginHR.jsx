import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import Input from '../components/Input'
import Message from '../components/Message'

const LoginHR = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { loginHR } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      setMessage('Email dan password tidak boleh kosong.')
      setMessageType('error')
      return
    }

    setLoading(true)
    setMessage('Mengecek kredensial...')
    setMessageType('info')

    // Simulate API call
    setTimeout(() => {
      const userKey = 'hr_' + formData.email
      const userDataString = localStorage.getItem(userKey)
      
      if (userDataString) {
        const userData = JSON.parse(userDataString)
        
        if (userData.password === formData.password) {
          setMessage('Login berhasil! Mengarahkan ke dashboard...')
          setMessageType('success')
          
          loginHR(formData.email, userData.fullName)
          
          setTimeout(() => {
            navigate('/dashboard-hr')
          }, 1500)
        } else {
          setMessage('Password HR yang Anda masukkan salah.')
          setMessageType('error')
        }
      } else {
        setMessage('Tidak ada akun HR yang terdaftar dengan email ini.')
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
            <p className="text-gray-600 text-lg">Login Tim HR / Perusahaan</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Perusahaan"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email kerja Anda"
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
              Belum punya akun perusahaan?{' '}
              <Link to="/signup-hr" className="text-secondary hover:text-secondary-dark font-semibold">
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginHR