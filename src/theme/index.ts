import { breakpoints } from './breakpoints'
import { space } from './space'
import * as ThemeColours from './colours'
import { font } from './font'
import { radii } from './radii'
import { shadows } from './shadows'
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

export const theme = {
  breakpoints,
  space,
  colours: ThemeColours.colours,
  ...font,

  radii,
  shadows,
  filters,
  transitions,

  variants: {
    link: {
      cursor: 'pointer',
    },
    circle: {
      borderRadius: 'circle',
    },
    button: {
      primary: {
        borderRadius: 'xs',
      },
      badge: {
        textTransform: 'uppercase',
        borderRadius: 'circle',
        width: 'fit-content',
        height: 'fit-content',
      },
    },
  },

  zIndices: {
    lowest: -2,
    low: -1,
    default: 0,
    above: 1,
    high: 1000,
    highest: 1001,
    heavens: 9999,
  },
}

export type ThemeType = typeof theme
export { sizes } from './breakpoints'
