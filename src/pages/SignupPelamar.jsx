import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Message from '../components/Message'

const SignupPelamar = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage('Semua kolom wajib diisi.')
      setMessageType('error')
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      setMessage('Password dan konfirmasi password tidak cocok.')
      setMessageType('error')
      return
    }

    setLoading(true)
    setMessage('')

    // Simulate API call
    setTimeout(() => {
      if (localStorage.getItem(formData.email)) {
        setMessage('Email ini sudah terdaftar. Silakan gunakan email lain.')
        setMessageType('error')
        setLoading(false)
        return
      }
      
      localStorage.setItem(formData.email, formData.password)
      
      setMessage('Pendaftaran berhasil! Anda akan diarahkan ke halaman login.')
      setMessageType('success')
      
      setTimeout(() => {
        navigate('/login-pelamar')
      }, 2000)
      
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
            <p className="text-gray-600 text-lg">Buat Akun Pelamar Baru</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Nama Lengkap"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap Anda"
              required
            />
            
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email aktif Anda"
              required
            />
            
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Buat password Anda"
              required
            />
            
            <Input
              label="Konfirmasi Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Ulangi password Anda"
              required
            />
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Mendaftar...' : 'Daftar Akun'}
            </Button>
            
            {message && (
              <Message type={messageType}>
                {message}
              </Message>
            )}
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Sudah punya akun?{' '}
              <Link to="/login-pelamar" className="text-primary hover:text-primary-dark font-semibold">
                Login di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPelamar