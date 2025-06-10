import React from 'react'
import { UserPlus, Mail, Phone } from 'lucide-react'

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      position: 'Senior Software Engineer',
      department: 'Technology',
      email: 'ahmad.rizki@company.com',
      phone: '+62 812-3456-7890',
      joinDate: '2023-03-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sinta Maharani',
      position: 'UI/UX Designer',
      department: 'Design',
      email: 'sinta.maharani@company.com',
      phone: '+62 813-4567-8901',
      joinDate: '2023-06-20',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Bayu Pratama',
      position: 'Digital Marketing Manager',
      department: 'Marketing',
      email: 'bayu.pratama@company.com',
      phone: '+62 814-5678-9012',
      joinDate: '2023-01-10',
      status: 'Active'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Manajemen Karyawan</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <UserPlus size={20} />
          Tambah Karyawan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-lg">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="status-badge status-high">
                {employee.status}
              </span>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-1">{employee.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{employee.position}</p>
            <p className="text-sm text-gray-500 mb-4">{employee.department}</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={14} />
                <span className="truncate">{employee.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={14} />
                <span>{employee.phone}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Bergabung: {new Date(employee.joinDate).toLocaleDateString('id-ID')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Employees