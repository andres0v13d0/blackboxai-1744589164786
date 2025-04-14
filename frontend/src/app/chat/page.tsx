import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';

export default function Chat() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Estado Emocional</h2>
              <div className="space-y-4">
                <button className="w-full p-3 text-left rounded-lg bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors">
                  <div className="flex items-center">
                    <i className="fas fa-smile text-rose-600 text-xl" />
                    <span className="ml-3">Optimista</span>
                  </div>
                </button>
                <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <i className="fas fa-meh text-gray-600 text-xl" />
                    <span className="ml-3">Neutral</span>
                  </div>
                </button>
                <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <i className="fas fa-frown text-gray-600 text-xl" />
                    <span className="ml-3">Preocupado</span>
                  </div>
                </button>
              </div>

              <hr className="my-6" />

              <h2 className="text-xl font-semibold mb-4">Historial</h2>
              <div className="space-y-3">
                <button className="w-full p-3 text-left text-sm rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-medium">Sesión anterior</p>
                  <p className="text-gray-500">Hace 2 días</p>
                </button>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-12rem)] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-heart text-rose-600" />
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg font-semibold">Asistente CorazónAI</h2>
                    <p className="text-sm text-gray-500">Siempre aquí para escucharte</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* AI Message */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-heart text-rose-600 text-sm" />
                  </div>
                  <div className="ml-3 bg-gray-100 rounded-lg p-4 max-w-[80%]">
                    <p>
                      ¡Hola! Soy tu asistente personal para guiarte en tu relación. 
                      ¿Cómo te sientes hoy y en qué puedo ayudarte?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex items-center space-x-4">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <i className="fas fa-microphone text-gray-600" />
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Escribe tu mensaje..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <Button>
                    Enviar
                    <i className="fas fa-paper-plane ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
