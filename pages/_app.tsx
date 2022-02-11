import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '@modules/shared/components/organisms'
import '../styles/globals.css'
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        #__next main {
          flex: 1;
          overflow-x: hidden;
          background-color: white;
        }
      `}</style>
    </Layout>
  )
}
