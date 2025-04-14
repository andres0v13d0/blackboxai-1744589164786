import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl text-rose-600" style={{ fontFamily: 'var(--font-lora)' }}>
                CorazónAI
              </span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium"
              >
                Sobre Nosotros
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium"
              >
                Preguntas Frecuentes
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium"
              >
                Precios
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/about" 
            className="block text-gray-700 hover:text-rose-600 px-3 py-2 text-base font-medium"
          >
            Sobre Nosotros
          </Link>
          <Link 
            href="/faq" 
            className="block text-gray-700 hover:text-rose-600 px-3 py-2 text-base font-medium"
          >
            Preguntas Frecuentes
          </Link>
          <Link 
            href="/pricing" 
            className="block text-gray-700 hover:text-rose-600 px-3 py-2 text-base font-medium"
          >
            Precios
          </Link>
        </div>
      </div>
    </nav>
  );
}
