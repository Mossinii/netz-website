import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 shadow-sm backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#solucoes" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            Soluções
          </Link>
          <Link href="#cameras" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            Câmeras
          </Link>
          <Link href="#suporte" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            Suporte
          </Link>
          <Link href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            Sobre
          </Link>
          <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg text-sm">
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link href="#solucoes" className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">
              Soluções
            </Link>
            <Link href="#cameras" className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">
              Câmeras
            </Link>
            <Link href="#suporte" className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">
              Suporte
            </Link>
            <Link href="#sobre" className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">
              Sobre
            </Link>
            <a href="https://wa.me/5554934949999" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
