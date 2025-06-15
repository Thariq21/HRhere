import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'

const DashboardPelamar = () => {
  const [applications, setApplications] = useState([])
  const { user, userType, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || userType !== 'pelamar') {
      navigate('/login-pelamar')
      return
    }

    // Load applications from localStorage
    const userApplications = JSON.parse(localStorage.getItem(user.email)) || []
    setApplications(userApplications)
  }, [user, userType, navigate])

  const handleLogout = () => {
    logout()
    navigate('/login-pelamar')
  }

  const startPsychoTest = (jobTitle) => {
    alert(`Memulai psikotes digital untuk posisi ${jobTitle}... (Ini adalah simulasi)`)
  }

  if (!user || userType !== 'pelamar') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center pb-6 border-b border-gray-200 mb-8">
          <h1 className="text-3xl font-bold text-primary">Dashboard Pelamar</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Selamat Datang, {user.email}!</span>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </header>

        {/* Apply Action Card */}
        <div className="bg-white p-8 rounded-xl shadow-card text-center mb-8">
          <p className="text-lg text-gray-600 mb-6">
            Siap untuk tantangan baru? Lamar pekerjaan impian Anda sekarang.
          </p>
          <Link to="/upload-pelamar">
            <Button size="lg" className="inline-flex items-center">
              Lamar Pekerjaan Baru 
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>

        {/* Application History */}
        <section className="bg-white rounded-xl shadow-card">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Riwayat & Status Lamaran Anda</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Jabatan
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Tanggal Melamar
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Status Lamaran
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Tindakan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                      Anda belum mengirim lamaran apapun.
                    </td>
                  </tr>
                ) : (
                  applications.map((app, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {app.jobTitle}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(app.date).toLocaleDateString('id-ID')}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          app.statusCode === 'high' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {app.statusCode === 'low' ? (
                          <Button 
                            size="sm" 
                            onClick={() => startPsychoTest(app.jobTitle)}
                          >
                            Mulai Psikotes
                          </Button>
                        ) : (
                          <span className="text-sm text-gray-500">Menunggu Jadwal</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardPelamar