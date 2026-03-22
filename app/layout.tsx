import type {Metadata} from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CredAgil - O Cofre Digital',
  description: 'Plataforma de Antecipação e Investimento para PMEs',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased bg-background text-on-surface font-body">{children}</body>
    </html>
  );
}
