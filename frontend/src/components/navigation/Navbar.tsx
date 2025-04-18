'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { FaUser, FaSignOutAlt, FaCrown, FaBars, FaTimes } from 'react-icons/fa';

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/auth/me`, {
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Error al obtener usuario:', err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch(`${backendUrl}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
    window.location.href = '/login';
  };

  const getShortName = () => {
    if (!user?.name) return '';
    const firstName = user.name.split(' ')[0];
    return firstName.length > 10 ? `${firstName.slice(0, 10)}...` : firstName;
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            {/* 🔥 Botón menú hamburguesa (móvil) + logo */}
            <div className="flex items-center gap-3">
              {/* Botón hamburguesa solo en móvil */}
              <div className="sm:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-gray-600 hover:text-rose-600"
                >
                  <FaBars size={20} />
                </button>
              </div>

              {/* Logo */}
              <Link href="/" className="text-3xl font-poetsen font-normal not-italic text-rose-600">
                CorazónAI
              </Link>
            </div>

            {/* Menú horizontal desktop */}
            <div className="hidden sm:flex sm:space-x-6">
              <Link href="/about" className="text-gray-700 hover:text-rose-600 text-sm font-medium">
                Sobre Nosotros
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-rose-600 text-sm font-medium">
                Preguntas Frecuentes
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-rose-600 text-sm font-medium">
                Precios
              </Link>
            </div>

            {/* Usuario o login */}
            <div className="relative flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-sm font-medium text-white bg-rose-600 rounded-md p-2 border-spacing-px hover:text-rose-600 hover:bg-white hover:border-rose-600 hover:border-2"
                  >
                    {getShortName()}
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                      <Link href="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                        <FaUser className="mr-2" /> Perfil
                      </Link>
                      <Link href="/pricing" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                        <FaCrown className="mr-2" /> Actualizar Plan
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-sm text-left hover:bg-gray-100"
                      >
                        <FaSignOutAlt className="mr-2" /> Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login">
                  <Button variant="outline" size="sm">Iniciar Sesión</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Menú lateral izquierdo mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-semibold text-rose-600">Menú</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <Link href="/about" className="block text-gray-700 hover:text-rose-600">Sobre Nosotros</Link>
          <Link href="/faq" className="block text-gray-700 hover:text-rose-600">Preguntas Frecuentes</Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-rose-600">Precios</Link>
        </div>
      </div>
    </>
  );
}
