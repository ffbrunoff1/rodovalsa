import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Highway, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre', href: 'about' },
    { label: 'Serviços', href: 'services' },
    { label: 'Contato', href: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg`}>
              <Highway 
                className="w-7 h-7 text-white" 
                strokeWidth={2.5}
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-secondary-900' : 'text-secondary-900'
              }`}>
                Rodoval
              </span>
              <span className={`text-xs font-medium ${
                isScrolled ? 'text-primary-600' : 'text-primary-600'
              }`}>
                SA
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-secondary-900 hover:text-primary-600'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Fale Conosco
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-secondary-900' : 'text-secondary-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full btn-primary text-center"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}