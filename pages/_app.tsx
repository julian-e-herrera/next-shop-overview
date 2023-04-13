import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const queryClient = new QueryClient();
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App