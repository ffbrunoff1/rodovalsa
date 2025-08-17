import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, MapPin, Clock, Zap } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Tecnologia de ponta em sistemas de segurança"
    },
    {
      icon: MapPin,
      title: "Cobertura",
      description: "Presença em principais rodovias do país"
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Monitoramento contínuo e suporte integral"
    },
    {
      icon: Zap,
      title: "Eficiência",
      description: "Gestão otimizada do fluxo de tráfego"
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-highway-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent-100 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary-200 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-6 py-2 rounded-full text-sm font-semibold">
                🛣️ Líder em Gestão Rodoviária
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-secondary-900 leading-tight"
              >
                Conectamos
                <span className="block gradient-text">Caminhos</span>
                <span className="block text-4xl lg:text-5xl font-semibold">
                  Impulsionamos o
                  <span className="gradient-text"> Progresso</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-secondary-600 leading-relaxed max-w-xl"
              >
                A Rodoval SA é líder nacional em gestão de pedágios e infraestrutura rodoviária. 
                Com tecnologia de ponta e compromisso com a excelência, transformamos a experiência 
                de mobilidade no Brasil.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossa História
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">25+</div>
                <div className="text-sm text-secondary-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1200+</div>
                <div className="text-sm text-secondary-600">KM de Rodovias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50M+</div>
                <div className="text-sm text-secondary-600">Usuários Atendidos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}