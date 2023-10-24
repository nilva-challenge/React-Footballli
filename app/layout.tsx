import { BottomNavigation } from '@/components';
import { Providers } from '@/utils';
import { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
