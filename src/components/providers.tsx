import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600000
    }
  }
})

export default function Providers({ children }: {children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition='bottom-left' />
    </QueryClientProvider>
  );
}
