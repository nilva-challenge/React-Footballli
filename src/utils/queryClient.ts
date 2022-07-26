import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 30 * 1000, // 30 seconds,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;
