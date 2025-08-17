import React from 'react'
import { motion } from 'framer-motion'
import { Highway, Shield, Wrench, BarChart3, Smartphone, Headphones, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Highway,
      title: "Gestão de Pedágios",
      description: "Sistema automatizado de cobrança com tecnologia de ponta, garantindo fluidez e eficiência no tráfego.",
      features: [
        "Cobrança automatizada 24/7",
        "Múltiplas formas de pagamento",
        "Sistema de tags eletrônicas",
        "Relatórios em tempo real"
      ],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Shield,
      title: "Segurança Viária",
      description: "Monitoramento contínuo das rodovias com sistemas de vigilância e atendimento de emergência.",
      features: [
        "Câmeras de monitoramento",
        "Central de emergência",
        "Patrulhamento rodoviário",
        "Atendimento médico móvel"
      ],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Wrench,
      title: "Manutenção de Rodovias",
      description: "Conservação preventiva e corretiva da infraestrutura rodoviária para máxima segurança.",
      features: [
        "Manutenção preventiva",
        "Reparo de pavimento",
        "Limpeza e conservação",
        "Sinalização atualizada"
      ],
      color: "from-primary-600 to-accent-500"
    },
    {
      icon: BarChart3,
      title: "Análise de Tráfego",
      description: "Monitoramento e análise de dados de tráfego para otimização do fluxo de veículos.",
      features: [
        "Contagem de veículos",
        "Análise de fluxo",
        "Relatórios estatísticos",
        "Previsão de demanda"
      ],
      color: "from-accent-600 to-primary-500"
    },
    {
      icon: Smartphone,
      title: "Tecnologia Mobile",
      description: "Aplicativos e soluções móveis para facilitar a experiência dos usuários das rodovias.",
      features: [
        "App de navegação",
        "Pagamento digital",
        "Alertas de tráfego",
        "Localização de serviços"
      ],
      color: "from-primary-500 to-accent-500"
    },
    {
      icon: Headphones,
      title: "Atendimento ao Cliente",
      description: "Suporte especializado e atendimento personalizado para todos os usuários.",
      features: [
        "Atendimento 24/7",
        "Múltiplos canais",
        "Suporte especializado",
        "Resolução rápida"
      ],
      color: "from-accent-500 to-primary-600"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
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
            🚀 Nossos Serviços
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Soluções Completas em
            <span className="gradient-text"> Gestão Rodoviária</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um ecossistema integrado de serviços para gestão de rodovias, 
            combinando tecnologia avançada, segurança e eficiência operacional.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.1), duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-secondary-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-6"
            >
              Pronto para Transformar sua Gestão Rodoviária?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            >
              Entre em contato conosco e descubra como nossas soluções podem 
              otimizar suas operações e elevar seus resultados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <span className="text-sm opacity-80">ou</span>
                <span className="text-sm font-medium">ligue para nosso atendimento 24/7</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏆</span>
            </div>
            <h4 className="text-xl font-bold text-secondary-900 mb-4">Excelência Reconhecida</h4>
            <p className="text-secondary-600">Prêmios e certificações que atestam nossa qualidade e compromisso com a excelência.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h4 className="text-xl font-bold text-secondary-900 mb-4">Segurança Garantida</h4>
            <p className="text-secondary-600">Protocolos rigorosos de segurança e conformidade com as mais altas normas do setor.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h4 className="text-xl font-bold text-secondary-900 mb-4">Inovação Constante</h4>
            <p className="text-secondary-600">Investimento contínuo em pesquisa e desenvolvimento de novas tecnologias.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}