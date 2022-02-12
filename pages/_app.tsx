import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import NextSeo, { DefaultSeo } from 'next-seo'
import { Layout } from '@modules/shared/components/organisms'
import '../styles/globals.css'
import Head from 'next/head'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const { asPath } = router
  const baseSiteUrl = process.env.NEXT_PUBLIC_BASE_URL
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production'
  return (
    <>
      <Head>
        <link rel="canonical" href={baseSiteUrl + asPath} />
        <title>leader in professional furniture</title>
        <meta name="description" content="description"></meta>
        <meta
          name="robots"
          content={isProduction ? 'index,follow' : ' nofollow noindex'}
        ></meta>
      </Head>
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
    </>
  )
}
