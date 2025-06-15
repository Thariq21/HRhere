import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Message from '../components/Message'

const UploadPelamar = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    cv: null
  })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { user, userType } = useAuth()
  const navigate = useNavigate()

  const jobOptions = [
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Secretary', label: 'Secretary' },
    { value: 'Accounting', label: 'Accounting' },
    { value: 'Customer Service', label: 'Customer Service' }
  ]

  useEffect(() => {
    if (!user || userType !== 'pelamar') {
      navigate('/login-pelamar')
      return
    }
  }, [user, userType, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.jobTitle || !formData.cv) {
      setMessage('Harap pilih jabatan dan unggah CV Anda.')
      setMessageType('error')
      return
    }

    if (formData.cv.type !== "application/pdf") {
      setMessage('Format CV harus PDF.')
      setMessageType('error')
      return
    }

    setLoading(true)
    setMessage('Memproses lamaran...')
    setMessageType('info')

    // Simulate backend processing and AI evaluation
    setTimeout(() => {
      const aiScore = Math.floor(Math.random() * (98 - 40 + 1)) + 40
      let status = '', statusClass = '', statusCode = ''

      if (aiScore >= 80) {
        status = 'Selamat! Anda Diundang Wawancara'
        statusClass = 'status-high'
        statusCode = 'high'
      } else {
        status = 'Langkah Selanjutnya: Psikotes Online'
        statusClass = 'status-low'
        statusCode = 'low'
      }

      const newApplication = {
        jobTitle: formData.jobTitle,
        date: new Date().toISOString(),
        status: status,
        statusClass: statusClass,
        statusCode: statusCode
      }

      // Get existing applications, add new one, save back
      const applications = JSON.parse(localStorage.getItem(user.email)) || []
      applications.push(newApplication)
      localStorage.setItem(user.email, JSON.stringify(applications))

      // Redirect back to dashboard to see latest status
      navigate('/dashboard-pelamar')
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  if (!user || userType !== 'pelamar') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Lamar Pekerjaan!</h2>
            <p className="text-gray-600">Silahkan isi dengan data yang sesuai.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Perusahaan Tujuan"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Contoh: PT Teknologi Maju"
            />
            
            <Select
              label="Jabatan yang Dilamar"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              options={jobOptions}
              placeholder="Pilih Jabatan"
              required
            />
            
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Unggah CV Anda (Format: PDF)
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Kirim Lamaran'}
            </Button>
            
            {message && (
              <Message type={messageType}>
                {message}
              </Message>
            )}
          </form>
          
          <div className="mt-6 text-center">
            <Link to="/dashboard-pelamar" className="text-primary hover:text-primary-dark font-medium">
              ← Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadPelamar