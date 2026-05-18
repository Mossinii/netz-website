import Navigation from '@/components/Navigation';
import { Shield, Camera, Wifi, Users, Zap, Clock, ChevronRight, ArrowRight, Lock, Gauge, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section com os 3 lemas */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decorativo com profundidade */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-blue-300 font-semibold text-sm mb-4 tracking-widest">SOLUÇÕES PROFISSIONAIS</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Segurança</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Desempenho</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-50">Inovação</span>
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
                  Infraestrutura de TI que protege seu negócio. Câmeras inteligentes, redes de alta performance e suporte especializado 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-500/50 inline-flex items-center justify-center gap-2 group">
                  Solicitar Orçamento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#solucoes" className="border-2 border-blue-400 text-blue-100 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors inline-flex items-center justify-center gap-2">
                  Nossas Soluções <ChevronRight size={20} />
                </a>
              </div>

              {/* Stats com mais profundidade */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400/20">
                <div className="group">
                  <p className="text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">24/7</p>
                  <p className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors">Monitoramento</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">100%</p>
                  <p className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors">Segurança</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">+500</p>
                  <p className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors">Clientes</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/hero-netz-modern-j6xdhRM2DDiKhVX5bvCXqr.webp"
                alt="Tecnologia de Segurança"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pilares - Segurança, Desempenho, Inovação */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm mb-4 tracking-widest">NOSSOS PILARES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Três Princípios que Guiam Nossa Empresa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pilar 1 - Segurança */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Proteção total do seu patrimônio com câmeras inteligentes, monitoramento 24/7 e sistemas de acesso avançados.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Câmeras 4K Ultra HD
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Visão Noturna Colorida
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Acesso Remoto 24/7
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilar 2 - Desempenho */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Gauge className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Desempenho</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Infraestrutura de TI robusta com redes de alta performance, backup em nuvem e uptime garantido.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Redes Wi-Fi Distribuídas
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Backup em Nuvem
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Uptime 99.9%
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilar 3 - Inovação */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inovação</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tecnologias de ponta com IA, reconhecimento facial e soluções inteligentes para o futuro.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    IA e Machine Learning
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Reconhecimento Facial
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Automação Inteligente
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Câmeras Detalhado */}
      <section id="cameras" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl -z-10"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/cameras-professional-E72wUBa8RfGdgwgkTLTPFP.webp"
                alt="Câmeras Inteligentes"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4 tracking-widest">VIGILÂNCIA INTELIGENTE</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Câmeras que Protegem Seu Patrimônio
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Sistemas CFTV de última geração com monitoramento em tempo real, gravação em nuvem e acesso remoto via smartphone. Proteção total para sua empresa ou residência.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Zap className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visão Noturna Colorida</h3>
                    <p className="text-gray-600">Captura detalhes em cores mesmo em ambientes com pouca luz</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Clock className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Monitoramento 24/7</h3>
                    <p className="text-gray-600">Acesso remoto em tempo real via smartphone ou computador</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Shield className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Reconhecimento Inteligente</h3>
                    <p className="text-gray-600">Detecção de movimento e alertas automáticos em tempo real</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 inline-flex items-center justify-center gap-2 w-full md:w-auto group">
                Solicitar Demonstração <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Suporte Section */}
      <section id="suporte" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4 tracking-widest">SUPORTE ESPECIALIZADO</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Equipe Pronta para Ajudar
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Nossa equipe de especialistas está disponível 24 horas por dia, 7 dias por semana para garantir que seus sistemas funcionem perfeitamente.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Resposta Rápida</h3>
                    <p className="text-gray-600 text-sm">Atendimento em até 1 hora para chamados críticos</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Suporte Remoto</h3>
                    <p className="text-gray-600 text-sm">Acesso remoto para resolver problemas rapidamente</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Manutenção Preventiva</h3>
                    <p className="text-gray-600 text-sm">Atualizações e monitoramento contínuo dos sistemas</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 inline-flex items-center justify-center gap-2 group">
                Falar com Especialista <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl -z-10"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/support-professionals-DZ6yNK4hN2AfkCwC75eU6Z.webp"
                alt="Suporte ao Usuário"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl -z-10"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/network-infrastructure-ZbYrLxSKQTsvC3FKDghSax.webp"
                alt="Infraestrutura de TI"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4 tracking-widest">INFRAESTRUTURA ROBUSTA</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Tecnologia que Não Para
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Soluções de TI profissionais para empresas que não podem parar. Redes de alta performance, segurança em nuvem e consultoria especializada.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Wifi className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Redes Wi-Fi Distribuídas</h3>
                    <p className="text-gray-600">Cobertura total com alta velocidade e estabilidade</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Shield className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Segurança em Nuvem</h3>
                    <p className="text-gray-600">Backup automático e proteção contra ameaças</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Users className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Consultoria MSP</h3>
                    <p className="text-gray-600">Gestão profissional de sua infraestrutura de TI</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/30 inline-flex items-center justify-center gap-2 w-full md:w-auto group">
                Agendar Consultoria <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos proteger e otimizar sua infraestrutura com segurança, desempenho e inovação.
          </p>
          <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all hover:shadow-2xl inline-flex items-center justify-center gap-2 text-lg group">
            Falar no WhatsApp <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <p className="font-semibold text-white mb-2">NETZ</p>
              <p className="text-sm">Segurança, Desempenho, Inovação</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Soluções</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#cameras" className="hover:text-white transition-colors">Câmeras</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Infraestrutura</a></li>
                <li><a href="#suporte" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Empresa</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#solucoes" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#solucoes" className="hover:text-white transition-colors">Serviços</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Contato</p>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+5554934949999" className="hover:text-white transition-colors">(54) 99349-4999</a></li>
                <li><a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 NETZ. Segurança, Desempenho, Inovação.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
