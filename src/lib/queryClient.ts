import { QueryClient } from '@tanstack/react-query';

// Create a client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Refetch on window focus (default: true)
            refetchOnWindowFocus: false,
            // Retry failed requests (default: 3)
            retry: 1,
            // Stale time: time until a query is considered stale
            staleTime: 5 * 60 * 1000, // 5 minutes
            // Cache time: time until inactive queries are garbage collected
            gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime in v4)
        },
        mutations: {
            // Retry failed mutations
            retry: 1,
        },
    },
});
