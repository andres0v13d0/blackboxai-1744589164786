import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'CorazónAI',
  description: 'CorazónAI es una plataforma de inteligencia artificial que ayuda a las personas a encontrar el amor verdadero.',

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className='font-ubuntu'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
