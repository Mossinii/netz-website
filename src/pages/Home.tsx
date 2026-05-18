import Navigation from '@/components/Navigation';
import { Shield, Camera, Wifi, Users, Zap, Clock, ChevronRight, ArrowRight } from 'lucide-react';
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4">INFRAESTRUTURA DE TI QUE PROTEGE</p>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Tecnologia que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Transforma</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Soluções profissionais em segurança eletrônica, câmeras inteligentes e infraestrutura de TI para empresas que não podem parar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2">
                  Solicitar Orçamento <ArrowRight size={20} />
                </a>
                <a href="#solucoes" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2">
                  Nossas Soluções <ChevronRight size={20} />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-sm text-gray-600">Monitoramento</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-gray-600">Segurança</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">+500</p>
                  <p className="text-sm text-gray-600">Clientes</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/hero-tech-security-YYDtBGrRtMwbAzTCKxH2yY.webp"
                alt="Tecnologia de Segurança"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Section */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm mb-4">NOSSAS SOLUÇÕES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tudo que você precisa para proteger seu negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções integradas de segurança eletrônica, infraestrutura de TI e suporte especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Câmeras */}
            <div className="netz-card p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="netz-feature-icon mb-6">
                <Camera size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Câmeras Inteligentes</h3>
              <p className="text-gray-600 mb-6">
                Sistemas CFTV 4K com visão noturna colorida, monitoramento em tempo real via smartphone e armazenamento em nuvem.
              </p>
              <ul className="space-y-3 mb-6">
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
              <a href="#cameras" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                Saiba Mais <ChevronRight size={18} />
              </a>
            </div>

            {/* Card 2 - Infraestrutura */}
            <div className="netz-card p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="netz-feature-icon mb-6">
                <Wifi size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infraestrutura de TI</h3>
              <p className="text-gray-600 mb-6">
                Redes Wi-Fi de alta performance, consultoria MSP, gerenciamento de servidores e soluções em nuvem.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Redes Robustas
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Consultoria MSP
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Backup em Nuvem
                </li>
              </ul>
              <a href="#sobre" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                Saiba Mais <ChevronRight size={18} />
              </a>
            </div>

            {/* Card 3 - Suporte */}
            <div className="netz-card p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="netz-feature-icon mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suporte 24/7</h3>
              <p className="text-gray-600 mb-6">
                Equipe especializada disponível 24 horas por dia, 7 dias por semana para resolver seus problemas rapidamente.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Resposta Rápida
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Suporte Remoto
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Manutenção Preventiva
                </li>
              </ul>
              <a href="#suporte" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                Saiba Mais <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Câmeras Detalhado */}
      <section id="cameras" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/cameras-surveillance-Z6VFRvmXVeSFpYiaC9yata.webp"
                alt="Câmeras Inteligentes"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4">VIGILÂNCIA INTELIGENTE</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Câmeras que Protegem Seu Patrimônio
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Nossos sistemas de câmeras inteligentes oferecem monitoramento em tempo real, gravação em nuvem e acesso remoto via smartphone. Proteção total para sua empresa ou residência.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visão Noturna Colorida</h3>
                    <p className="text-gray-600">Captura detalhes em cores mesmo em ambientes com pouca luz</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Monitoramento 24/7</h3>
                    <p className="text-gray-600">Acesso remoto em tempo real via smartphone ou computador</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Reconhecimento Inteligente</h3>
                    <p className="text-gray-600">Detecção de movimento e alertas automáticos em tempo real</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2 w-full md:w-auto">
                Solicitar Demonstração <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Suporte Section */}
      <section id="suporte" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4">SUPORTE ESPECIALIZADO</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Equipe Pronta para Ajudar
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Nossa equipe de especialistas está disponível 24 horas por dia, 7 dias por semana para garantir que seus sistemas funcionem perfeitamente.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Resposta Rápida</h3>
                    <p className="text-gray-600 text-sm">Atendimento em até 1 hora para chamados críticos</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Suporte Remoto</h3>
                    <p className="text-gray-600 text-sm">Acesso remoto para resolver problemas rapidamente</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Manutenção Preventiva</h3>
                    <p className="text-gray-600 text-sm">Atualizações e monitoramento contínuo dos sistemas</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2">
                Falar com Especialista <ArrowRight size={20} />
              </a>
            </div>

            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/support-team-DZ6yNK4hN2AfkCwC75eU6Z.webp"
                alt="Suporte ao Usuário"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663279985770/Jcyk9Lf3um6LFeDc5EtWTY/it-infrastructure-Rn9nLXLK89ioESLWwdVF9Y.webp"
                alt="Infraestrutura de TI"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-semibold text-sm mb-4">INFRAESTRUTURA ROBUSTA</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Tecnologia que Não Para
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Soluções de TI profissionais para empresas que não podem parar. Redes de alta performance, segurança em nuvem e consultoria especializada.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Wifi className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Redes Wi-Fi Distribuídas</h3>
                    <p className="text-gray-600">Cobertura total com alta velocidade e estabilidade</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Segurança em Nuvem</h3>
                    <p className="text-gray-600">Backup automático e proteção contra ameaças</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Consultoria MSP</h3>
                    <p className="text-gray-600">Gestão profissional de sua infraestrutura de TI</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2 w-full md:w-auto">
                Agendar Consultoria <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos proteger e otimizar sua infraestrutura.
          </p>
          <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2 text-lg">
            Falar no WhatsApp <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">N</span>
              </div>
              <p className="font-semibold text-white mb-2">NETZ Tecnologia</p>
              <p className="text-sm">Soluções inteligentes em segurança e TI</p>
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
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
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
            <p>&copy; 2026 NETZ Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
