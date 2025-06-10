import React from 'react'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Technology',
      location: 'Jakarta',
      type: 'Full-time',
      status: 'Active',
      applicants: 15,
      posted: '2025-01-10'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Jakarta',
      type: 'Full-time',
      status: 'Active',
      applicants: 8,
      posted: '2025-01-12'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      department: 'Marketing',
      location: 'Jakarta',
      type: 'Full-time',
      status: 'Draft',
      applicants: 0,
      posted: '2025-01-14'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Manajemen Lowongan</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus size={20} />
          Tambah Lowongan
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Posisi
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Departemen
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Lokasi
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tipe
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Pelamar
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{job.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {job.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`status-badge ${job.status === 'Active' ? 'status-high' : 'status-low'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-900">{job.applicants}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button className="action-btn btn-view flex items-center gap-1">
                        <Eye size={14} />
                        Lihat
                      </button>
                      <button className="action-btn btn-schedule flex items-center gap-1">
                        <Edit size={14} />
                        Edit
                      </button>
                      <button className="action-btn btn-reject flex items-center gap-1">
                        <Trash2 size={14} />
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Jobs