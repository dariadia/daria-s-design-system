export const sizes = {
  '5se': 320,
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  desktopMedium: 1296,
  desktopLarge: 1600,
}

export const breakpoints = Object.values(sizes).map((s) => `${s}px`)
