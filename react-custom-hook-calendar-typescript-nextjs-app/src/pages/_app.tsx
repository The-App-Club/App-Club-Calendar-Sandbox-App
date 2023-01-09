import '@/styles/index.scss'
import '@/styles/globals.css'

import { useCallback, useEffect } from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'

import createEmotionCache from '@/config/createEmotionCache'
import { matchedActivePage } from '@/config/routes'
import theme from '@/config/theme'
import AuthLayout from '@/layouts/AuthLayout'
import { queryClient } from '@/libs/queryClient'
import useHeaderMenu from '@/libs/useHeaderMenu'

import type { EmotionCache } from '@emotion/react'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = createEmotionCache(),
}: MyAppProps) => {
  const router = useRouter()
  const { setHeaderMenu } = useHeaderMenu()

  const handleRouteChangeStart = useCallback(
    (e: string) => {
      const matchedItem = matchedActivePage(e)
      if (matchedItem) {
        setHeaderMenu({
          activeName: matchedItem.headerMenuName,
        })
      } else {
        setHeaderMenu({
          activeName: null,
        })
      }
    },
    [setHeaderMenu]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [handleRouteChangeStart, router])

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </CssVarsProvider>
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const BebopApp = (props: AppProps) => {
  return (
    <RecoilRoot>
      <NextNProgress
        color={`#4338ca`}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Toaster position='bottom-left' reverseOrder={false} />
      <MyApp {...props} />
    </RecoilRoot>
  )
}
export default BebopApp
