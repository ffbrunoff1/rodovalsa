import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Globe, TrendingUp, Target, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excelência Operacional",
      description: "Comprometidos com os mais altos padrões de qualidade em todos os nossos serviços de gestão rodoviária."
    },
    {
      icon: Heart,
      title: "Compromisso Social",
      description: "Contribuímos para o desenvolvimento sustentável das comunidades onde atuamos."
    },
    {
      icon: Globe,
      title: "Visão de Futuro",
      description: "Investimos continuamente em tecnologias inovadoras para o futuro da mobilidade."
    }
  ]

  const achievements = [
    {
      icon: Award,
      number: "25+",
      title: "Anos de Liderança",
      description: "Mais de duas décadas transformando a infraestrutura rodoviária brasileira"
    },
    {
      icon: Users,
      number: "5000+",
      title: "Colaboradores",
      description: "Equipe especializada dedicada à excelência em gestão rodoviária"
    },
    {
      icon: TrendingUp,
      number: "98%",
      title: "Satisfação",
      description: "Índice de satisfação dos usuários com nossos serviços"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
            🏢 Nossa História
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Construindo o
            <span className="gradient-text"> Futuro da Mobilidade</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Desde nossa fundação, a Rodoval SA tem sido pioneira em soluções inovadoras 
            para gestão de pedágios e infraestrutura rodoviária, conectando pessoas e 
            impulsionando o progresso nacional.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary-900">
              Uma Jornada de
              <span className="gradient-text"> Inovação e Crescimento</span>
            </h3>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Fundada com a visão de revolucionar o setor rodoviário brasileiro, 
              a Rodoval SA emergiu como líder nacional em gestão de pedágios. 
              Nossa trajetória é marcada por investimentos contínuos em tecnologia, 
              sustentabilidade e desenvolvimento das comunidades onde atuamos.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Hoje, gerenciamos mais de 1.200 quilômetros de rodovias em todo o país, 
              atendendo milhões de usuários com excelência operacional e compromisso 
              com a segurança viária. Nossa missão vai além da cobrança de pedágios: 
              somos facilitadores da mobilidade e catalisadores do desenvolvimento econômico.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                Gestão de Pedágios
              </span>
              <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                Manutenção Rodoviária
              </span>
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                Tecnologia Avançada
              </span>
              <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                Sustentabilidade
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-bold">Missão</h4>
                <p className="text-lg leading-relaxed opacity-90">
                  Proporcionar mobilidade segura, eficiente e sustentável através da 
                  gestão excelente de infraestrutura rodoviária, contribuindo para 
                  o desenvolvimento econômico e social do Brasil.
                </p>
                
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-2xl font-bold mb-4">Visão</h4>
                  <p className="text-lg leading-relaxed opacity-90">
                    Ser reconhecida como a empresa mais inovadora e confiável em 
                    gestão rodoviária da América Latina, referência em tecnologia 
                    e sustentabilidade.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Nossos <span className="gradient-text">Valores</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-4">{value.title}</h4>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Nossos <span className="gradient-text">Resultados</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{achievement.number}</div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-4">{achievement.title}</h4>
                  <p className="text-secondary-600 leading-relaxed">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}