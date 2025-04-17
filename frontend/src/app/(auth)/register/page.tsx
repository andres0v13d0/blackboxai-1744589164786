'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';



export default function Register() {
  const frontendUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = `${formData.get('first-name')} ${formData.get('last-name')}`;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const res = await fetch(`${frontendUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error al registrar');
      }

      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-lora font-bold tracking-tight text-gray-900">
            Crea tu cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="font-medium text-rose-600 hover:text-rose-500">
              Inicia sesión
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            {/* Trial Info Banner */}
            <div className="mb-6 p-4 bg-rose-50 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-gift text-rose-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-rose-800">
                    Prueba gratuita de 7 días
                  </h3>
                  <p className="mt-1 text-sm text-rose-700">
                    Sin compromisos. Cancela cuando quieras.
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Apellido
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      required
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Acepto los{' '}
                  <Link href="/terms" className="text-rose-600 hover:text-rose-500">
                    términos y condiciones
                  </Link>
                </label>
              </div>

              <div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Registrando...' : 'Comenzar prueba gratuita'}
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">O regístrate con</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => signIn('google', {
                    callbackUrl: frontendUrl,
                  })}
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <i className="fab fa-google text-lg" />
                  Google
                </button>
                <button 
                  onClick={() => signIn('facebook',{
                    callbackUrl: frontendUrl,
                  })}
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <i className="fab fa-facebook text-lg" />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
