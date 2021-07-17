import { breakpoints } from './breakpoints'
import { space } from './space'
import * as ThemeColors from './colors'
import { font } from './font'
import { radii } from './radii'
import { shadows } from './shadows'
import { filters } from './filters'
import { transitions } from './transitions'

export type Color = keyof typeof ThemeColors.colors
export type TextColor = keyof typeof ThemeColors.textColors
export type BgColor = keyof typeof ThemeColors.bgColors
export type LineColor = keyof typeof ThemeColors.lineColors
export type ActionColor = keyof typeof ThemeColors.actionColors
export type SocialColor = keyof typeof ThemeColors.socialColors
export type BrandColor = keyof typeof ThemeColors.brandColors

export type BorderRadius = keyof typeof radii
export type Elevation = keyof typeof shadows
export type Filter = keyof typeof filters
export type Transition = keyof typeof transitions
export type Space = keyof typeof space

export const theme = {
  breakpoints,
  space,
  colors: ThemeColors.colors,
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
