import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'features', 'role-selection', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <Link to="/" className="text-3xl font-bold text-primary">
          HRhere.id
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-medium py-1 relative transition-colors ${
                activeSection === 'hero' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
              {activeSection === 'hero' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium py-1 relative transition-colors ${
                activeSection === 'about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Tentang Kami
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('features')}
              className={`font-medium py-1 relative transition-colors ${
                activeSection === 'features' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Fitur
              {activeSection === 'features' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('role-selection')}
              className={`font-medium py-1 relative transition-colors ${
                activeSection === 'role-selection' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Bergabung
              {activeSection === 'role-selection' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium py-1 relative transition-colors ${
                activeSection === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Kontak
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header