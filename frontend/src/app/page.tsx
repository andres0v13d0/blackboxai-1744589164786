import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 mb-6 font-poetsen not-italic">
            Tu Guía Personal para una
            <span className="text-rose-600"> Relación más Fuerte</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Encuentra apoyo, orientación y comprensión a través de conversaciones significativas con nuestro asistente AI empático.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button size="lg">
                Comienza Gratis <i className="fas fa-arrow-right ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Conoce Más <i className="fas fa-heart ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-lora font-bold text-center text-gray-900 mb-16">
            ¿Por qué elegir nuestra guía de relaciones?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-comments text-2xl text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conversaciones Significativas</h3>
              <p className="text-gray-600">
                Dialoga con un AI que entiende tus emociones y te ayuda a explorar tus sentimientos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-friends text-2xl text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Para Individuos y Parejas</h3>
              <p className="text-gray-600">
                Ya sea solo o con tu pareja, encuentra el apoyo que necesitas para crecer juntos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lock text-2xl text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Privacidad Garantizada</h3>
              <p className="text-gray-600">
                Tus conversaciones son privadas y seguras, manteniéndote en control de tu información.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-lora font-bold text-gray-900 mb-6">
            Comienza tu viaje hacia una relación más saludable
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            7 días de prueba gratuita. Sin compromisos. Cancela cuando quieras.
          </p>
          <Link href="/register">
            <Button size="lg">
              Prueba Gratis por 7 Días <i className="fas fa-heart ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
