import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  UserCheck, 
  Settings 
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/jobs', icon: Briefcase, label: 'Lowongan' },
    { path: '/applicants', icon: Users, label: 'Pelamar' },
    { path: '/employees', icon: UserCheck, label: 'Karyawan' },
    { path: '/settings', icon: Settings, label: 'Pengaturan' },
  ]

  return (
    <aside className="w-64 bg-sidebar-bg text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-center">HRhere.id</h2>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar