'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type Props = { children: ReactNode };

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
