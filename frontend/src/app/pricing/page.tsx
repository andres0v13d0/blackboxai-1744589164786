import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-lora font-bold text-gray-900 mb-4">
            Planes Diseñados para Tu Crecimiento
          </h1>
          <p className="text-xl text-gray-600">
            Comienza con una prueba gratuita de 7 días. Sin compromisos.
            Cancela en cualquier momento.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Plan Básico */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Básico</h2>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-500 ml-2">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Acceso a chat de texto ilimitado</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Seguimiento de estado emocional</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Recursos básicos de relación</span>
                </li>
              </ul>
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  Comenzar Prueba Gratuita
                </Button>
              </Link>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-rose-500 text-white px-4 py-1 rounded-bl-lg">
              Popular
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium</h2>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-gray-500 ml-2">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Todo lo del plan Básico</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Chat de voz ilimitado</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Sesiones para parejas</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Recursos premium personalizados</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full">
                  Comenzar Prueba Gratuita
                </Button>
              </Link>
            </div>
          </div>

          {/* Plan Familiar */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Familiar</h2>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">$29.99</span>
                <span className="text-gray-500 ml-2">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Todo lo del plan Premium</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Hasta 5 perfiles familiares</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Sesiones familiares grupales</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3" />
                  <span>Recursos para toda la familia</span>
                </li>
              </ul>
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  Comenzar Prueba Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-lora font-bold text-center text-gray-900 mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Cómo funciona la prueba gratuita?
              </h3>
              <p className="text-gray-600">
                Tienes acceso completo a todas las funciones durante 7 días. 
                No necesitas tarjeta de crédito para comenzar.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Puedo cancelar en cualquier momento?
              </h3>
              <p className="text-gray-600">
                Sí, puedes cancelar tu suscripción en cualquier momento sin 
                compromisos ni cargos adicionales.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Es segura mi información?
              </h3>
              <p className="text-gray-600">
                Tu privacidad es nuestra prioridad. Toda la información está 
                encriptada y nunca compartimos tus datos personales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
