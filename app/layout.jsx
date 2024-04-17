import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { light } from '@clerk/themes';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clerk App',
  description: 'Example Clerk App',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang='en'>
        <body className={inter.className}
          style={{
            backgroundImage: "url('/images//Qurbani-bg.jpg", // Replace '/images/background.jpg' with the path to your image file
            backgroundSize: 'cover',    // This will ensure that the background covers the entire div
            backgroundPosition: 'center' // This centers the background image within the div
        }}
        >
          <Header />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
