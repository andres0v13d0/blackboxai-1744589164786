import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-lora font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Nuestra Misión
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Transformar la manera en que las parejas abordan sus desafíos, 
              proporcionando orientación empática y accesible a través de la 
              tecnología AI.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-lora font-bold text-center text-gray-900 mb-16">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-2xl text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Empatía</h3>
              <p className="text-gray-600">
                Creemos en escuchar sin juzgar y proporcionar apoyo comprensivo 
                en cada interacción.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lock text-2xl text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Privacidad</h3>
              <p className="text-gray-600">
                Tu confianza es fundamental. Protegemos tu privacidad con los 
                más altos estándares de seguridad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-2xl text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovación</h3>
              <p className="text-gray-600">
                Utilizamos tecnología avanzada para proporcionar orientación 
                personalizada y efectiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-lora font-bold text-gray-900 mb-8">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nacimos de la visión de hacer el asesoramiento de relaciones más 
              accesible y menos intimidante. Entendemos que cada relación es única 
              y merece atención personalizada.
            </p>
            <p className="text-lg text-gray-600">
              Hoy, estamos orgullosos de ayudar a miles de parejas a fortalecer 
              sus relaciones a través de nuestra plataforma innovadora.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-lora font-bold text-center text-gray-900 mb-16">
            Nuestro Equipo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6">
                <img
                  src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
                  alt="Equipo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Dr. Ana Martínez</h3>
              <p className="text-gray-600">Fundadora y Psicóloga</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6">
                <img
                  src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg"
                  alt="Equipo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Carlos Ruiz</h3>
              <p className="text-gray-600">Director de Tecnología</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6">
                <img
                  src="https://images.pexels.com/photos/3777568/pexels-photo-3777568.jpeg"
                  alt="Equipo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Laura González</h3>
              <p className="text-gray-600">Terapeuta de Relaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-lora font-bold text-gray-900 mb-8">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Comienza tu viaje hacia una relación más fuerte y saludable hoy mismo.
          </p>
          <Link href="/register">
            <Button size="lg">
              Prueba Gratuita de 7 Días
              <i className="fas fa-arrow-right ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
