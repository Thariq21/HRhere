import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPelamar from './pages/LoginPelamar'
import LoginHR from './pages/LoginHR'
import SignupPelamar from './pages/SignupPelamar'
import SignupHR from './pages/SignupHR'
import DashboardPelamar from './pages/DashboardPelamar'
import DashboardHR from './pages/DashboardHR'
import UploadPelamar from './pages/UploadPelamar'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-pelamar" element={<LoginPelamar />} />
          <Route path="/login-hr" element={<LoginHR />} />
          <Route path="/signup-pelamar" element={<SignupPelamar />} />
          <Route path="/signup-hr" element={<SignupHR />} />
          <Route path="/dashboard-pelamar" element={<DashboardPelamar />} />
          <Route path="/dashboard-hr" element={<DashboardHR />} />
          <Route path="/upload-pelamar" element={<UploadPelamar />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App