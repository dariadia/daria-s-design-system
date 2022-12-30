import React from 'react'

import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { mainTheme as theme } from '../../../src/theme'

const Wrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta data-rh="true" name="description" content="Modular component library. Simple. Accessible."/ >
        <meta data-rh="true" name="twitter:description" content="Modular component library. Simple. Accessible." />
        <link rel="manifest" href="/assets/favicon/site.webmanifest.json" />
        <link rel="icon" href="/assets/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/spectral/spectral-v7-latin_cyrillic-regular.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/spectral/spectral-v7-latin_cyrillic-italic.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/spectral/spectral-v7-latin_cyrillic-600.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/spectral/spectral-v7-latin_cyrillic-700.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/spectral/spectral-v7-latin_cyrillic-800.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/karla/karla-v15-latin-regular.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/karla/karla-v15-latin-italic.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/karla/karla-v15-latin-600.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/karla/karla-v15-latin-700.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="crossorigin"
          href="/assets/fonts/karla/karla-v15-latin-800.woff2"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  )
}

export default Wrapper
