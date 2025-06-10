import React, { useState, useEffect } from 'react'
import FilterSection from '../components/FilterSection'
import ApplicantsTable from '../components/ApplicantsTable'

const Applicants = () => {
  const [selectedJob, setSelectedJob] = useState('semua')
  const [applicants, setApplicants] = useState([])
  const [filteredApplicants, setFilteredApplicants] = useState([])

  // Extended dummy data untuk halaman pelamar
  const dummyApplicants = [
    { name: 'Budi Hartono', job: 'Software Engineer', date: '2025-01-15' },
    { name: 'Citra Lestari', job: 'UI/UX Designer', date: '2025-01-14' },
    { name: 'Agus Wijaya', job: 'Software Engineer', date: '2025-01-13' },
    { name: 'Sari Dewi', job: 'Digital Marketing', date: '2025-01-12' },
    { name: 'Rudi Santoso', job: 'Software Engineer', date: '2025-01-11' },
    { name: 'Maya Putri', job: 'UI/UX Designer', date: '2025-01-10' },
    { name: 'Andi Pratama', job: 'Digital Marketing', date: '2025-01-09' },
    { name: 'Lisa Handayani', job: 'Software Engineer', date: '2025-01-08' },
    { name: 'Doni Setiawan', job: 'UI/UX Designer', date: '2025-01-07' },
    { name: 'Rina Sari', job: 'Digital Marketing', date: '2025-01-06' },
    { name: 'Fajar Nugroho', job: 'Software Engineer', date: '2025-01-05' },
    { name: 'Indah Permata', job: 'UI/UX Designer', date: '2025-01-04' },
  ]

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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Semua Pelamar</h2>
        <div className="text-sm text-gray-600">
          Total: {filteredApplicants.length} pelamar
        </div>
      </div>

      <FilterSection 
        selectedJob={selectedJob} 
        onJobChange={setSelectedJob} 
      />
      
      <ApplicantsTable applicants={filteredApplicants} />
    </div>
  )
}

export default Applicants