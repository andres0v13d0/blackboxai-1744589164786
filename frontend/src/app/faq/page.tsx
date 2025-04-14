import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const faqs = [
  {
    category: "Sobre el Servicio",
    questions: [
      {
        q: "¿Qué es CorazónAI?",
        a: "CorazónAI es una plataforma de orientación relacional que utiliza inteligencia artificial para proporcionar apoyo y consejos personalizados para parejas e individuos."
      },
      {
        q: "¿Cómo funciona?",
        a: "Nuestro asistente AI mantiene conversaciones empáticas contigo, ayudándote a explorar tus sentimientos y situaciones. Puedes interactuar a través de texto o voz, y recibirás orientación personalizada basada en tus necesidades específicas."
      },
      {
        q: "¿Puede reemplazar a un terapeuta real?",
        a: "CorazónAI no reemplaza la terapia profesional. Somos un complemento que ofrece apoyo adicional y orientación, pero recomendamos buscar ayuda profesional para situaciones que requieran atención especializada."
      }
    ]
  },
  {
    category: "Privacidad y Seguridad",
    questions: [
      {
        q: "¿Mis conversaciones son privadas?",
        a: "Sí, todas las conversaciones son completamente privadas y encriptadas. No compartimos tu información personal con terceros ni utilizamos tus datos para fines publicitarios."
      },
      {
        q: "¿Cómo protegen mi información?",
        a: "Utilizamos encriptación de nivel bancario y seguimos las mejores prácticas de seguridad de la industria para proteger tus datos. Nunca almacenamos información sensible sin tu consentimiento explícito."
      },
      {
        q: "¿Puedo eliminar mis datos?",
        a: "Sí, puedes solicitar la eliminación completa de tus datos en cualquier momento desde la configuración de tu cuenta."
      }
    ]
  },
  {
    category: "Suscripción y Pagos",
    questions: [
      {
        q: "¿Cómo funciona la prueba gratuita?",
        a: "Ofrecemos una prueba gratuita de 7 días con acceso completo a todas las funciones. No necesitas ingresar información de pago para comenzar."
      },
      {
        q: "¿Puedo cancelar en cualquier momento?",
        a: "Sí, puedes cancelar tu suscripción en cualquier momento sin cargos adicionales. Si cancelas durante la prueba gratuita, no se te cobrará nada."
      },
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias en la mayoría de los países."
      }
    ]
  },
  {
    category: "Soporte Técnico",
    questions: [
      {
        q: "¿Qué hago si tengo problemas técnicos?",
        a: "Nuestro equipo de soporte está disponible 24/7 a través del chat en la aplicación o por correo electrónico en soporte@corazonai.com."
      },
      {
        q: "¿En qué dispositivos puedo usar CorazónAI?",
        a: "CorazónAI está disponible en cualquier navegador web moderno, tanto en computadoras como en dispositivos móviles."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-lora font-bold text-gray-900 sm:text-5xl">
              Preguntas Frecuentes
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
              Encuentra respuestas a las preguntas más comunes sobre nuestro servicio.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-lora font-bold text-gray-900 mb-8">
                {section.category}
              </h2>
              <dl className="space-y-8">
                {section.questions.map((faq) => (
                  <div key={faq.q} className="bg-white rounded-lg shadow-sm p-6">
                    <dt className="text-lg font-semibold text-gray-900 mb-4">
                      {faq.q}
                    </dt>
                    <dd className="text-gray-600">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-rose-50 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <h2 className="text-3xl font-lora font-bold text-gray-900 sm:text-4xl">
              ¿No encuentras la respuesta que buscas?
            </h2>
            <div className="mt-8 lg:mt-0">
              <div className="flex space-x-4">
                <Link href="/contact">
                  <Button variant="outline">
                    Contáctanos
                    <i className="fas fa-envelope ml-2" />
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button>
                    Chatea con Nosotros
                    <i className="fas fa-comment ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
