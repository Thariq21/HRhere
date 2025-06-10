import React from 'react'
import { Eye, Calendar, X } from 'lucide-react'

const ApplicantsTable = ({ applicants }) => {
  const getStatusConfig = (score) => {
    if (score >= 85) {
      return {
        text: 'Skor Tinggi (Jadwal Interview Otomatis)',
        className: 'status-high'
      }
    } else if (score >= 60) {
      return {
        text: 'Skor Cukup (Menunggu Psikotes)',
        className: 'status-pending'
      }
    } else {
      return {
        text: 'Skor Rendah (Disarankan Ditolak)',
        className: 'status-low'
      }
    }
  }

  const handleViewCV = (applicantName) => {
    alert(`Melihat CV ${applicantName}`)
  }

  const handleScheduleInterview = (applicantName) => {
    alert(`Menjadwalkan interview untuk ${applicantName}`)
  }

  const handleReject = (applicantName) => {
    if (confirm(`Apakah Anda yakin ingin menolak ${applicantName}?`)) {
      alert(`${applicantName} telah ditolak`)
    }
  }

  if (applicants.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-8 text-center text-gray-500">
          Tidak ada data pelamar yang ditemukan.
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nama Pelamar
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Jabatan Dilamar
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tanggal Lamaran
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Skor AI (%)
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applicants.map((applicant, index) => {
              const statusConfig = getStatusConfig(applicant.aiScore)
              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{applicant.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {applicant.job}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {new Date(applicant.date).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-bold text-gray-900">{applicant.aiScore}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`status-badge ${statusConfig.className}`}>
                      {statusConfig.text}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewCV(applicant.name)}
                        className="action-btn btn-view flex items-center gap-1"
                      >
                        <Eye size={14} />
                        Lihat CV
                      </button>
                      {applicant.aiScore >= 85 && (
                        <button
                          onClick={() => handleScheduleInterview(applicant.name)}
                          className="action-btn btn-schedule flex items-center gap-1"
                        >
                          <Calendar size={14} />
                          Jadwal
                        </button>
                      )}
                      <button
                        onClick={() => handleReject(applicant.name)}
                        className="action-btn btn-reject flex items-center gap-1"
                      >
                        <X size={14} />
                        Tolak
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApplicantsTable