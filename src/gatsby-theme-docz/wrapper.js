import React from 'react'

import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../src/theme'

const Wrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Danni's Web Ui Kit</title>
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/public/fonts/kazimir/kazimir-light.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/public/fonts/graphik/graphik-regular.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/public/fonts/graphik/graphik-medium.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/public/fonts/graphik/graphik-black.woff2"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  )
}

export default Wrapper
