import React from 'react'
import { LogOut } from 'lucide-react'

const Header = () => {
  const handleLogout = () => {
    // Implementasi logout
    alert('Logout functionality will be implemented')
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Manajemen Pelamar
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="font-medium text-gray-900">Admin HR</div>
            <div className="text-sm text-gray-500">Perusahaan ABC</div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header