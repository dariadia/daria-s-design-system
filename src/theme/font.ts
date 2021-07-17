const splashSizes = {
  display1: 64,
  display2: 50,
  title1: 34,
  title2: 25,
  title3: 20,
}

const splashLineHeights = {
  display1: 1.2,
  display2: 1.2,
  title1: 1.2,
  title2: 1.2,
  title3: 1.4,
}

const headingSizes = {
  head1: 34,
  head2: 20,
  head3: 16,
}

const headingLineHeights = {
  head1: 1.2,
  head2: 1.2,
  head3: 1.2,
}

const textSizes = {
  body1: 17,
  body2: 13,
  caption: 10,
}

const textLineHeights = {
  body1: 1.2,
  body2: 1.4,
  caption: 1.4,
}

const buttonSizes = {
  textButton1: 9,
  button1: 17,
  button2: 13,
}

const buttonLineHeights = {
  textButton1: 1.2,
  button1: 1.2,
  button2: 1.2,
}

export const fontSerif = 'Spectral, Georgia, serif'
export const fontSansSerif = 'Karla, Arial, sans-serif'

export const font = {
  fonts: {
    body: fontSansSerif,
    text: fontSansSerif,
    heading: fontSerif,
  },

  fontWeights: {
    light: 300,
    body: 400,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  fontSizes: {
    splash: splashSizes,
    heading: headingSizes,
    text: textSizes,
    button: buttonSizes,
  },

  lineHeights: {
    splash: splashLineHeights,
    heading: headingLineHeights,
    text: textLineHeights,
    button: buttonLineHeights,
  },

  typography: {
    splash: {
      display1: {
        fontSize: 'splash.display1',
        lineHeight: 'splash.display1',
        fontWeight: 'light',
        fontFamily: fontSerif,
      },
      display2: {
        fontSize: 'splash.display2',
        lineHeight: 'splash.display2',
        fontFamily: fontSerif,
      },
      title1: {
        fontSize: 'splash.title1',
        lineHeight: 'splash.title1',
        fontFamily: fontSerif,
      },
      title2: {
        fontSize: 'splash.title2',
        lineHeight: 'splash.title2',
        fontFamily: fontSerif,
      },
      title3: {
        fontSize: 'splash.title3',
        lineHeight: 'splash.title3',
        fontFamily: fontSerif,
      },
    },

    headingSerif: {
      head1: {
        fontSize: 'heading.head1',
        lineHeight: 'heading.head1',
        fontWeight: 'semibold',
        fontFamily: fontSerif,
      },
      head2: {
        fontSize: 'heading.head2',
        lineHeight: 'heading.head2',
        fontWeight: 'semibold',
        fontFamily: fontSerif,
      },
      head3: {
        fontSize: 'heading.head3',
        lineHeight: 'heading.head3',
        fontWeight: 'semibold',
        fontFamily: fontSerif,
      },
    },

    headingSansSerif: {
      head1: {
        fontSize: 'heading.head1',
        lineHeight: 'heading.head1',
        fontWeight: 'semibold',
        fontFamily: fontSansSerif,
      },
      head2: {
        fontSize: 'heading.head2',
        lineHeight: 'heading.head2',
        fontWeight: 'semibold',
        fontFamily: fontSansSerif,
      },
      head3: {
        fontSize: 'heading.head3',
        lineHeight: 'heading.head3',
        fontWeight: 'semibold',
        fontFamily: fontSansSerif,
      },
    },

    text: {
      body1: {
        fontSize: 'text.body1',
        lineHeight: 'text.body1',
        fontFamily: fontSansSerif,
      },
      body2: {
        fontSize: 'text.body2',
        lineHeight: 'text.body2',
        fontFamily: fontSansSerif,
      },
      caption: {
        fontSize: 'text.caption',
        lineHeight: 'text.caption',
        fontFamily: fontSansSerif,
      },
    },

    button: {
      textButton1: {
        fontSize: 'button.textButton1',
        lineHeight: 'button.textButton1',
        fontWeight: 'medium',
        textTransform: 'uppercase',
        fontFamily: fontSansSerif,
      },
      button1: {
        fontSize: 'button.button1',
        lineHeight: 'button.button1',
        fontWeight: 'medium',
        fontFamily: fontSansSerif,
      },
      button2: {
        fontSize: 'button.button2',
        lineHeight: 'button.button2',
        fontWeight: 'medium',
        fontFamily: fontSansSerif,
      },
    },
  },
}
