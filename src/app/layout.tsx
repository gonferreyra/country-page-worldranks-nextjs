import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${beVietnamPro.className} bg-dark-text`}>
        <div className='relative bg-hero-image bg-cover bg-top bg-no-repeat w-full h-[250px] -z-10'>
          <Image
            src='/Logo.svg'
            width={100}
            height={100}
            alt='logo'
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 lg:w-1/5'
          />
        </div>
        {children}
      </body>
    </html>
  );
}
