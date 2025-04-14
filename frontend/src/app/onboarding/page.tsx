import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Onboarding() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-rose-600">Paso 1</p>
                  <p className="text-sm text-gray-500">Situación Actual</p>
                </div>
              </div>
              <div className="hidden sm:block w-24 border-t border-gray-200" />
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                  2
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Paso 2</p>
                  <p className="text-sm text-gray-500">Objetivos</p>
                </div>
              </div>
              <div className="hidden sm:block w-24 border-t border-gray-200" />
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                  3
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Paso 3</p>
                  <p className="text-sm text-gray-500">Estado Emocional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Question Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-lora font-bold text-gray-900 mb-4">
                ¿Estás aquí solo o con tu pareja?
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors">
                  <i className="fas fa-user text-3xl text-rose-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">Solo</h3>
                  <p className="text-sm text-gray-500">
                    Busco orientación personal para mi relación
                  </p>
                </button>
                <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors">
                  <i className="fas fa-user-friends text-3xl text-rose-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">En Pareja</h3>
                  <p className="text-sm text-gray-500">
                    Queremos trabajar juntos en nuestra relación
                  </p>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-lora font-bold text-gray-900 mb-4">
                ¿Cuál es el principal desafío en tu relación actualmente?
              </h2>
              <div className="space-y-4">
                {[
                  'Comunicación',
                  'Confianza',
                  'Intimidad',
                  'Tiempo juntos',
                  'Diferencias de valores',
                  'Otro'
                ].map((challenge) => (
                  <button
                    key={challenge}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors"
                  >
                    {challenge}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Link href="/">
                <Button variant="outline">
                  <i className="fas fa-arrow-left mr-2" />
                  Atrás
                </Button>
              </Link>
              <Button>
                Siguiente
                <i className="fas fa-arrow-right ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
