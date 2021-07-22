import { breakpoints } from './breakpoints'
import { space } from './space'
import * as ThemeColours from './colours'
import { fonts } from './fonts'
import { radii } from './radii'
import { shadows } from './shadows'
import { zIndices } from './zIndices'
import { filters } from './filters'
import { transitions } from './transitions'

export type Colour = keyof typeof ThemeColours.colours
export type BgColour = keyof typeof ThemeColours.bgColours
export type TextColour = keyof typeof ThemeColours.textColours

export type BorderRadius = keyof typeof radii
export type Elevation = keyof typeof shadows
export type Filter = keyof typeof filters
export type Transition = keyof typeof transitions
export type Space = keyof typeof space

export const baseTheme = {
  breakpoints,
  space,
  ...fonts,
  radii,
  shadows,
  filters,
  transitions,
  zIndices,

  variants: {
    link: {
      cursor: 'pointer',
    },
    button: {
      badge: {
        textTransform: 'uppercase',
        borderRadius: 'circle',
        width: 'fit-content',
        lineHeight: 2.2,
      },
    },
  },
}

export const mainTheme = {
  ...baseTheme,
  colours: ThemeColours.colours,
}

export const blackAndWhiteTheme = {
  ...baseTheme,
  colours: ThemeColours.blackWhiteColors,
}

export type ThemeType = typeof mainTheme
export { sizes } from './breakpoints'
