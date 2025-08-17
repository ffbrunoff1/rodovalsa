import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false, isSuccess: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: '', isError: false, isSuccess: false })

    try {
      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        isError: false,
        isSuccess: true
      })
      
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente.',
        isError: true,
        isSuccess: false
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 4000-8000",
      description: "Atendimento 24 horas"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@rodoval.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "São Paulo - SP",
      description: "Matriz e filiais"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "24/7",
      description: "Operação contínua"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            📞 Entre em Contato
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Vamos Conversar sobre
            <span className="gradient-text"> Seu Projeto</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe está pronta para desenvolver soluções personalizadas 
            para suas necessidades em gestão rodoviária. Entre em contato conosco!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white"
                    placeholder="seu@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Empresa/Organização
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white"
                  placeholder="Nome da sua empresa"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 resize-none bg-white"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                ></textarea>
              </motion.div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex items-center space-x-3 p-4 rounded-xl ${
                    status.isSuccess 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {status.isSuccess ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Nossa equipe especializada está sempre disponível para atendê-lo. 
                Escolha o canal de comunicação que for mais conveniente para você.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">{item.title}</h4>
                      <p className="text-lg font-medium text-primary-600 mb-1">{item.info}</p>
                      <p className="text-sm text-secondary-600">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Precisa de Atendimento Urgente?</h4>
              <p className="mb-6 opacity-90">
                Nossa central de atendimento funciona 24/7 para emergências 
                e suporte técnico imediato.
              </p>
              <motion.a
                href="tel:1140008000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-accent-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 4000-8000</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}