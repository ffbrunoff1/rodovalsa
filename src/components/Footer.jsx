import React from 'react'
import { motion } from 'framer-motion'
import { Highway, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: 'about' },
      { name: 'Nossa História', href: 'about' },
      { name: 'Missão e Visão', href: 'about' },
      { name: 'Valores', href: 'about' }
    ],
    servicos: [
      { name: 'Gestão de Pedágios', href: 'services' },
      { name: 'Segurança Viária', href: 'services' },
      { name: 'Manutenção', href: 'services' },
      { name: 'Tecnologia', href: 'services' }
    ],
    contato: [
      { name: 'Fale Conosco', href: 'contact' },
      { name: 'Atendimento 24h', href: 'contact' },
      { name: 'Suporte Técnico', href: 'contact' },
      { name: 'Emergências', href: 'contact' }
    ]
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <Highway 
                    className="w-7 h-7 text-white" 
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">
                    Rodoval
                  </span>
                  <span className="text-xs font-medium text-primary-400">
                    SA
                  </span>
                </div>
              </motion.div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Líder nacional em gestão de pedágios e infraestrutura rodoviária, 
                conectando caminhos e impulsionando o progresso.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">(11) 4000-8000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">contato@rodoval.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">São Paulo - SP</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
              <ul className="space-y-3">
                {footerLinks.contato.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Proposta
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Rodoval SA. Todos os direitos reservados.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              Criado com{' '}
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                <em>Papum</em>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}