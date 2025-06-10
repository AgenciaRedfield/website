import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Users, 
  Building, 
  Star,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 300 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white cursor-pointer"
            >
              Redfield
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                href="#servicos" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Serviços
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                href="#portfolio" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Portfólio
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                href="#sobre" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Sobre
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                href="#contato" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Contato
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25">
                  Orçamento Grátis
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors">Serviços</a>
                <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfólio</a>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors">Sobre</a>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-fit">
                  Orçamento Grátis
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Desenvolvemos soluções
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block"
            >
              digitais únicas
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Transformamos suas ideias em realidade digital com desenvolvimento web, 
            aplicativos móveis e sistemas personalizados que impulsionam seus resultados.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25">
                Ver Nossos Projetos
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                Falar com Especialista
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pilares da Empresa */}
      <section id="servicos" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Nossos Pilares</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Especializados em três áreas fundamentais para o sucesso digital da sua empresa
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Web Development */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group h-full">
                <CardHeader className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit"
                  >
                    <Globe className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-white text-2xl">Desenvolvimento Web</CardTitle>
                  <CardDescription className="text-white/70">
                    Sites modernos, responsivos e otimizados para conversão
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    {[
                      "Landing Pages de Alta Conversão",
                      "E-commerce Completo", 
                      "Sites Institucionais",
                      "Portais Corporativos"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* App Development */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group h-full">
                <CardHeader className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit"
                  >
                    <Smartphone className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-white text-2xl">Aplicativos Móveis</CardTitle>
                  <CardDescription className="text-white/70">
                    Apps nativos e híbridos para iOS e Android
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    {[
                      "Apps Nativos iOS/Android",
                      "Progressive Web Apps",
                      "Apps Corporativos", 
                      "Integração com APIs"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Systems Development */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group h-full">
                <CardHeader className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-4 p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-fit"
                  >
                    <Database className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-white text-2xl">Sistemas Personalizados</CardTitle>
                  <CardDescription className="text-white/70">
                    Soluções sob medida para otimizar seus processos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/80">
                    {[
                      "ERP Personalizado",
                      "CRM Sob Medida",
                      "Automação de Processos",
                      "Integração de Sistemas"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Produto Destaque */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                Oferta Especial
              </Badge>
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Site Institucional Profissional
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Tenha presença digital profissional com nosso pacote completo de site institucional
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto shadow-2xl hover:shadow-purple-500/20">
                <CardHeader className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    R$ 99,90
                    <span className="text-lg font-normal text-white/70">/mês</span>
                  </motion.div>
                  <CardDescription className="text-white/80">
                    Tudo que você precisa para começar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Design Responsivo",
                    "Hospedagem Inclusa", 
                    "SSL Certificado",
                    "Suporte Técnico",
                    "SEO Básico"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-white/90"
                    >
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                      {feature}
                    </motion.div>
                  ))}
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="pt-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25">
                      Contratar Agora
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Portfólio */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Nosso Portfólio</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "E-commerce TechStore",
                category: "Desenvolvimento Web",
                description: "Plataforma completa de e-commerce com sistema de pagamento integrado e painel administrativo.",
                tech: ["React", "Node.js", "MongoDB"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "App Delivery Express",
                category: "Aplicativo Móvel",
                description: "Aplicativo de delivery com geolocalização, pagamento online e sistema de avaliações.",
                tech: ["React Native", "Firebase", "Maps API"],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Sistema ERP Municipal",
                category: "Sistema Personalizado",
                description: "Sistema de gestão completo para prefeitura com módulos de RH, financeiro e transparência.",
                tech: ["Laravel", "Vue.js", "PostgreSQL"],
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Portal Transparência SP",
                category: "Setor Público",
                description: "Portal de transparência conforme LAI com dashboards interativos e relatórios automatizados.",
                tech: ["React", "Chart.js", "API REST"],
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Landing Page MedCorp",
                category: "Desenvolvimento Web",
                description: "Landing page de alta conversão para clínica médica com agendamento online integrado.",
                tech: ["Next.js", "Tailwind", "Framer Motion"],
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                title: "App Gestão Escolar",
                category: "Aplicativo Móvel",
                description: "Aplicativo para gestão escolar com comunicação entre pais, professores e alunos.",
                tech: ["Flutter", "Firebase", "Push Notifications"],
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full group overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-black/20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <Code className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-white/70 text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="mt-4"
                    >
                      <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">
                        Ver Detalhes
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projetos para Órgãos Públicos */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-600">
                Setor Público
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">
                Soluções para Órgãos Públicos
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Desenvolvemos sistemas e portais especializados para o setor público, 
                seguindo todas as diretrizes de acessibilidade e transparência.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Building,
                    title: "Portais de Transparência",
                    description: "Conforme Lei de Acesso à Informação"
                  },
                  {
                    icon: Users,
                    title: "Sistemas de Gestão", 
                    description: "ERP para prefeituras e órgãos públicos"
                  },
                  {
                    icon: Globe,
                    title: "Sites Institucionais",
                    description: "Acessíveis e responsivos"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-6 w-6 text-blue-400 mr-3 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25">
                  Saiba Mais sobre Projetos Públicos
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Experiência Comprovada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Projetos Entregues", value: "50+" },
                    { label: "Órgãos Atendidos", value: "25+" },
                    { label: "Anos de Experiência", value: "8+" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-white/80">{stat.label}</span>
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl font-bold text-white"
                      >
                        {stat.value}
                      </motion.span>
                    </motion.div>
                  ))}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center mt-4"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-white/80 ml-2">Avaliação dos clientes</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solicite seu Orçamento
            </h2>
            <p className="text-white/80 text-lg">
              Conte-nos sobre seu projeto e receba uma proposta personalizada
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="nome" className="text-white">Nome Completo</Label>
                      <Input 
                        id="nome" 
                        placeholder="Seu nome completo"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-white">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="telefone" className="text-white">Telefone / WhatsApp</Label>
                      <Input 
                        id="telefone" 
                        placeholder="(00) 99999-9999"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="investimento" className="text-white">Quanto pretende investir?</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-purple-400 transition-colors">
                          <SelectValue placeholder="Selecionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                          <SelectItem value="5k-15k">R$ 5.000 a R$ 15.000</SelectItem>
                          <SelectItem value="15k-30k">R$ 15.000 a R$ 30.000</SelectItem>
                          <SelectItem value="30k-plus">Acima de R$ 30.000</SelectItem>
                          <SelectItem value="nao-sei">Não sei responder</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="projeto" className="text-white">Conte sobre seu projeto</Label>
                    <Textarea 
                      id="projeto"
                      placeholder="Descreva seu projeto, objetivos e necessidades..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px] focus:border-purple-400 transition-colors"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6 shadow-lg hover:shadow-purple-500/25">
                      Enviar Solicitação de Orçamento
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <div>
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white mb-4 cursor-pointer"
              >
                Redfield
              </motion.h3>
              <p className="text-white/70 mb-4">
                Transformando ideias em soluções digitais inovadoras.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-white/70"
              >
                <Mail className="h-4 w-4 mr-2" />
                contato@redfield.com.br
              </motion.div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-white/70">
                {["Desenvolvimento Web", "Aplicativos Móveis", "Sistemas Personalizados", "Consultoria Digital"].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/70">
                {["Sobre Nós", "Portfólio", "Depoimentos", "Blog"].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-white/70">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center cursor-pointer"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 99999-9999
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center cursor-pointer"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contato@redfield.com.br
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center cursor-pointer"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  São Paulo, SP
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 mt-8 pt-8 text-center text-white/70"
          >
            <p>&copy; 2024 Agência Redfield. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App

