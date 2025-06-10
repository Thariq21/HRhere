import React from 'react'

const FilterSection = ({ selectedJob, onJobChange }) => {
  const jobOptions = [
    { value: 'semua', label: 'Semua Lowongan' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
  ]

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center gap-3">
        <label htmlFor="jobFilter" className="font-medium text-gray-700">
          Filter berdasarkan Lowongan:
        </label>
        <select
          id="jobFilter"
          value={selectedJob}
          onChange={(e) => onJobChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {jobOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterSection