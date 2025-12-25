import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import { AnimatePresence } from 'motion/react'
import { ThemeProvider } from './components/ui/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-theme">
      <QueryClientProvider client={queryClient}>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
