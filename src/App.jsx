import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import Applicants from './pages/Applicants'
import Employees from './pages/Employees'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applicants" element={<Applicants />} />
        <Route path="employees" element={<Employees />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App