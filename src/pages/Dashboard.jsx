import React, { useState, useEffect } from 'react'
import FilterSection from '../components/FilterSection'
import ApplicantsTable from '../components/ApplicantsTable'

const Dashboard = () => {
  const [selectedJob, setSelectedJob] = useState('semua')
  const [applicants, setApplicants] = useState([])
  const [filteredApplicants, setFilteredApplicants] = useState([])

  // Dummy data untuk simulasi
  const dummyApplicants = [
    { name: 'Budi Hartono', job: 'Software Engineer', date: '2025-01-15' },
    { name: 'Citra Lestari', job: 'UI/UX Designer', date: '2025-01-14' },
    { name: 'Agus Wijaya', job: 'Software Engineer', date: '2025-01-13' },
    { name: 'Sari Dewi', job: 'Digital Marketing', date: '2025-01-12' },
    { name: 'Rudi Santoso', job: 'Software Engineer', date: '2025-01-11' },
    { name: 'Maya Putri', job: 'UI/UX Designer', date: '2025-01-10' },
    { name: 'Andi Pratama', job: 'Digital Marketing', date: '2025-01-09' },
    { name: 'Lisa Handayani', job: 'Software Engineer', date: '2025-01-08' },
  ]

  // Proses data pelamar dengan AI score
  const processApplicants = (applicantList) => {
    return applicantList.map(applicant => ({
      ...applicant,
      aiScore: Math.floor(Math.random() * (98 - 40 + 1)) + 40
    }))
  }

  useEffect(() => {
    const processedData = processApplicants(dummyApplicants)
    setApplicants(processedData)
    setFilteredApplicants(processedData)
  }, [])

  useEffect(() => {
    if (selectedJob === 'semua') {
      setFilteredApplicants(applicants)
    } else {
      setFilteredApplicants(applicants.filter(app => app.job === selectedJob))
    }
  }, [selectedJob, applicants])

  return (
    <div className="space-y-6">
      <FilterSection 
        selectedJob={selectedJob} 
        onJobChange={setSelectedJob} 
      />
      
      <ApplicantsTable applicants={filteredApplicants} />
    </div>
  )
}

export default Dashboard