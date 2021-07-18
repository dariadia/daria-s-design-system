export const fontSerif = 'Spectral, Georgia, serif'
export const fontSansSerif = 'Karla, Arial, sans-serif'

const headingSizes = {
  headingLarge: 94,
  headingMedium: 64,
  headingSmall: 34,
}

const baseLineHeight = 1.2

export const fonts = {
  typography: {
    headingSerif: {
      headingLarge: {
        fontSize: headingSizes.headingLarge,
        lineHeight: baseLineHeight,
        fontFamily: fontSerif,
      },
      headingMedium: {
        fontSize: headingSizes.headingMedium,
        lineHeight: baseLineHeight,
        fontFamily: fontSerif,
      },
      headingSmall: {
        fontSize: headingSizes.headingSmall,
        lineHeight: baseLineHeight,
        fontFamily: fontSerif,
      },
    },

    headingSansSerif: {
      headingLarge: {
        fontSize: headingSizes.headingLarge,
        lineHeight: baseLineHeight,
        fontFamily: fontSansSerif,
      },
      headingMedium: {
        fontSize: headingSizes.headingMedium,
        lineHeight: baseLineHeight,
        fontFamily: fontSansSerif,
      },
      headingSmall: {
        fontSize: headingSizes.headingSmall,
        lineHeight: baseLineHeight,
        fontFamily: fontSansSerif,
      },
    },

    text: {
      bodySmall: {
        fontSize: '14px',
        lineHeight: baseLineHeight,
        fontFamily: fontSansSerif,
      },
      body: {
        fontSize: '20px',
        lineHeight: baseLineHeight,
        fontFamily: fontSansSerif,
      },
    },
  },
}
