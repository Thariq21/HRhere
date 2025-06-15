import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import Select from '../components/Select'

const DashboardHR = () => {
  const [applicants, setApplicants] = useState([])
  const [filteredApplicants, setFilteredApplicants] = useState([])
  const [selectedJob, setSelectedJob] = useState('semua')
  const { user, userType, logout } = useAuth()
  const navigate = useNavigate()

  // Dummy data for applicants
  const dummyApplicants = [
    { name: 'Budi Hartono', job: 'Software Engineer', date: '2025-01-15' },
    { name: 'Citra Lestari', job: 'UI/UX Designer', date: '2025-01-16' },
    { name: 'Agus Wijaya', job: 'Software Engineer', date: '2025-01-16' },
    { name: 'Sari Dewi', job: 'Digital Marketing', date: '2025-01-17' },
    { name: 'Rudi Santoso', job: 'UI/UX Designer', date: '2025-01-18' },
    { name: 'Maya Putri', job: 'Software Engineer', date: '2025-01-19' }
  ]

  const jobOptions = [
    { value: 'semua', label: 'Semua Lowongan' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' }
  ]

  useEffect(() => {
    if (!user || userType !== 'hr') {
      navigate('/login-hr')
      return
    }

    // Process dummy applicants with AI scores and status
    const processedApplicants = dummyApplicants.map(applicant => {
      const aiScore = Math.floor(Math.random() * (98 - 40 + 1)) + 40
      let status = '', statusClass = ''
      
      if (aiScore >= 85) {
        status = 'Skor Tinggi (Jadwal Interview Otomatis)'
        statusClass = 'bg-green-100 text-green-800'
      } else if (aiScore >= 60) {
        status = 'Skor Cukup (Menunggu Psikotes)'
        statusClass = 'bg-blue-100 text-blue-800'
      } else {
        status = 'Skor Rendah (Disarankan Ditolak)'
        statusClass = 'bg-yellow-100 text-yellow-800'
      }
      
      return { ...applicant, aiScore, status, statusClass }
    })

    setApplicants(processedApplicants)
    setFilteredApplicants(processedApplicants)
  }, [user, userType, navigate])

  useEffect(() => {
    if (selectedJob === 'semua') {
      setFilteredApplicants(applicants)
    } else {
      setFilteredApplicants(applicants.filter(app => app.job === selectedJob))
    }
  }, [selectedJob, applicants])

  const handleLogout = () => {
    logout()
    navigate('/login-hr')
  }

  if (!user || userType !== 'hr') {
    return null
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 text-center border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">HRhere.id</h2>
        </div>
        <nav className="flex-1 py-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-colors bg-primary text-white border-r-4 border-yellow-400">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                Lowongan
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                Pelamar
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                Karyawan
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                Pengaturan
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Manajemen Pelamar</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="font-semibold text-gray-800">{user.name || 'Admin HR'}</div>
              <div className="text-sm text-gray-600">{user.email}</div>
            </div>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </header>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-card mb-8">
          <div className="flex items-center space-x-4">
            <label className="font-medium text-gray-700">Filter berdasarkan Lowongan:</label>
            <div className="w-64">
              <Select
                options={jobOptions}
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                placeholder="Pilih lowongan..."
              />
            </div>
          </div>
        </div>

        {/* Applicants Table */}
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Nama Pelamar
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Jabatan Dilamar
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Tanggal Lamaran
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Skor AI (%)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredApplicants.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                      Tidak ada data.
                    </td>
                  </tr>
                ) : (
                  filteredApplicants.map((applicant, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {applicant.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {applicant.job}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(applicant.date).toLocaleDateString('id-ID')}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">
                        {applicant.aiScore}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${applicant.statusClass}`}>
                          {applicant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button size="sm" className="mr-2">
                          Lihat CV
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardHR