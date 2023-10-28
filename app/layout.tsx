import { BottomNavigation } from '@/components';
import { Providers } from '@/utils';
import { ReactNode } from 'react';
import './globals.css';
import localFont from 'next/font/local';

const dana = localFont({
  src: '../public/assets/fonts/DanaVF.ttf',
  display: 'swap',
});

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={dana.className}>
        <Providers>
          {children}
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
