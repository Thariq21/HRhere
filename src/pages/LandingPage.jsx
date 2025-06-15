import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'

const LandingPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [contactMessage, setContactMessage] = useState('')
  const [contactMessageType, setContactMessageType] = useState('')

  const handleContactSubmit = (e) => {
    e.preventDefault()
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactMessage('Semua kolom harus diisi.')
      setContactMessageType('error')
      return
    }

    setContactMessage('Mengirim pesan Anda...')
    setContactMessageType('info')

    setTimeout(() => {
      setContactMessage('Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.')
      setContactMessageType('success')
      setContactForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[85vh] flex items-center justify-center text-white text-center bg-gradient-to-br from-primary to-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-45 from-primary/75 to-primary-dark/85 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Platform Digital Terintegrasi untuk HR dan Pencari Kerja
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 font-light max-w-3xl mx-auto">
              Permudah proses rekrutmen, temukan peluang karir terbaik, dan kelola talenta secara efisien bersama HRhere.id.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary-dark"
              onClick={() => scrollToSection('role-selection')}
            >
              Mulai Sekarang <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </section>

        {/* Role Selection Section */}
        <section id="role-selection" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Bergabung Sebagai
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* HR Card */}
              <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Perusahaan (HR)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimalkan rekrutmen, kelola talenta, dan dapatkan insight berbasis data untuk pertumbuhan perusahaan Anda.
                </p>
                <div className="space-y-3">
                  <Link to="/login-hr" className="block">
                    <Button variant="secondary" className="w-full">Login HR</Button>
                  </Link>
                  <Link to="/signup-hr" className="block">
                    <Button variant="outline" className="w-full">Daftar HR</Button>
                  </Link>
                </div>
              </div>

              {/* Pelamar Card */}
              <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Pencari Kerja (Pelamar)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Temukan pekerjaan impian, lamar dengan mudah, dan tunjukkan potensi terbaik Anda kepada perusahaan ternama.
                </p>
                <div className="space-y-3">
                  <Link to="/login-pelamar" className="block">
                    <Button variant="secondary" className="w-full">Login Pelamar</Button>
                  </Link>
                  <Link to="/signup-pelamar" className="block">
                    <Button variant="outline" className="w-full">Daftar Pelamar</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Apa itu HRhere.id?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  HRhere.id adalah sebuah platform digital inovatif yang dirancang untuk merevolusi cara perusahaan mengelola sumber daya manusia dan cara para profesional menemukan peluang karir.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami menyediakan serangkaian alat canggih untuk membantu HRD dalam proses perekrutan, mulai dari pemindaian resume berbasis AI hingga analitik karyawan yang mendalam, serta memfasilitasi pelamar untuk menemukan pekerjaan yang paling sesuai dengan kualifikasi dan aspirasi mereka.
                </p>
              </div>
              <div className="text-center">
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Fitur Unggulan Kami
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI Scanner Resume',
                  description: 'Filter resume kandidat secara otomatis dan akurat sesuai kebutuhan pekerjaan.',
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  )
                },
                {
                  title: 'Psychology Test Online',
                  description: 'Nilai karakter dan potensi pelamar dengan tes psikologi singkat sebelum wawancara.',
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  )
                },
                {
                  title: 'Analitik HR & Data Insights',
                  description: 'Monitor berbagai metrik HR seperti turnover, engagement, dan produktivitas karyawan.',
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                  )
                },
                {
                  title: 'Manajemen Gaji',
                  description: 'Kelola data gaji karyawan dan proses pengajuan terkait dengan lebih efisien.',
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
              Hubungi Kami
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi tim kami.
            </p>
            
            <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-xl shadow-card">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap Anda"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Alamat Email Anda"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  rows="5"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Kirim Pesan
              </Button>
              
              {contactMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  contactMessageType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
                  contactMessageType === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
                  'bg-blue-50 text-blue-800 border border-blue-200'
                }`}>
                  {contactMessage}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-10">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} HRhere.id - Digital HR Project by Kelompok 5. All rights reserved.
          </p>
          <p className="text-sm opacity-70">
            Platform Inovatif untuk Manajemen SDM dan Pencarian Karir
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage