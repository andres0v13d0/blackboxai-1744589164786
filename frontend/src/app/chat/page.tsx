'use client';
import { Navbar } from '@/components/navigation/Navbar';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import axios from 'axios';


export default function Chat() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([
    {
      from: 'ai',
      text: '¡Hola! Soy tu asistente personal para guiarte en tu relación. ¿Cómo te sientes hoy y en qué puedo ayudarte?',
    },
  ]);
  const [emotionalState, setEmotionalState] = useState('neutral');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/auth/me`, {
          credentials: 'include',
        });
        const data = await res.json();
        if (res.ok) {
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

  const handleSend = async () => {
    if (!message.trim()) return;
  
    const userMessage = message.trim();
    setChat((prev) => [...prev, { from: 'user', text: userMessage }]);
    setMessage('');
    setLoading(true);
  
    if (!user) {
      console.error('No estás autenticado');
      setChat((prev) => [...prev, { from: 'ai', text: 'No estás autenticado. Inicia sesión.' }]);
      setLoading(false);
      return;
    }
  
    try {
      setChat((prev) => [...prev, { from: 'ai', text: 'Escribiendo...' }]);
  
      const res = await axios.post(
        'http://localhost:5000/api/chat',
        {
          message: userMessage,
          emotionalState,
          userId: user.id,
        },
        {
          withCredentials: true,
        }
      );
  
      const aiResponse = res.data.response;
  
      setChat((prev) => {
        const newChat = [...prev];
        newChat.pop()
        return [...newChat, { from: 'ai', text: aiResponse }];
      });
    } catch (err) {
      console.error('Error al enviar mensaje:', err);
      setChat((prev) => {
        const newChat = [...prev];
        newChat.pop();
        return [...newChat, { from: 'ai', text: 'Hubo un error. Intenta de nuevo.' }];
      });
    } finally {
      setLoading(false); 
    }
  };
  

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);
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
                <button
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    emotionalState === 'esperanzado'
                      ? 'bg-rose-100 border-rose-300'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setEmotionalState('esperanzado')}
                >
                  <div className="flex items-center">
                    <i className="fas fa-smile text-rose-600 text-xl" />
                    <span className="ml-3">Esperanzado</span>
                  </div>
                </button>

                <button
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    emotionalState === 'neutral'
                      ? 'bg-rose-100 border-rose-300'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setEmotionalState('neutral')}
                >
                  <div className="flex items-center">
                    <i className="fas fa-smile text-rose-600 text-xl" />
                    <span className="ml-3">Neutral</span>
                  </div>
                </button>

                <button
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    emotionalState === 'preocupado'
                      ? 'bg-rose-100 border-rose-300'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setEmotionalState('preocupado')}
                >
                  <div className="flex items-center">
                    <i className="fas fa-smile text-rose-600 text-xl" />
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
                {chat.map((msg, idx) => (
                  <div key={idx} className={`flex items-start ${msg.from === 'user' ? 'justify-end' : ''}`}>
                    {msg.from === 'ai' && (
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-heart text-rose-600 text-sm" />
                      </div>
                    )}
                    <div
                      className={`ml-3 rounded-lg p-4 max-w-[80%] ${
                        msg.from === 'user' ? 'bg-rose-200 self-end' : 'bg-gray-100'
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                    placeholder="Escribe tu mensaje..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSend();
                    }}
                  />
                  <Button onClick={handleSend} disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
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
