
'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider  baseUrl="https://blackboxai-1744753673944.vercel.app">{children}</SessionProvider>;
}
