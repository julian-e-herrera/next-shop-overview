import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import React from 'react'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App