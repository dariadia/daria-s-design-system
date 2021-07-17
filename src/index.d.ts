import * as StyledSystem from 'styled-system'
import {
  ResponsiveStyleValue,
  SystemStyleObject,
  Theme,
  SystemCssProperties,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
} from '@styled-system/css'

/**
 * The `SxStyleProp` extension `SystemStyleObject` and `Emotion` [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<
          string,
          SystemStyleObject | ResponsiveStyleValue<number | string>
        >
    >

export interface SxProps {
  /**
   * The sx prop lets you style elements inline, using values from your theme.
   */
  sx?: SxStyleProp
  variant?: StyledSystem.ResponsiveValue<string>
  scale?: string
}

export interface BoxProps
  extends StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.TypographyProps,
    StyledSystem.ColorProps,
    StyledSystem.FlexboxProps {
  as?: React.ElementType
}

export interface BaseProps {
  sx?: SxStyleProp
  theme: Theme
  __css?:
    | SystemCssProperties
    | CSSPseudoSelectorProps
    | CSSSelectorObject
    | null
}

export interface VariantProps {
  theme: Theme
  variant: StyledSystem.ResponsiveValue<string, StyledSystem.RequiredTheme>
  scale?: string
  prop?: string
}

export interface BoxSxProps extends BoxProps, SxProps {
  onClick?: (args?: any) => void
  ref?: any
  children?: React.ReactNode
}

export * from './base'
export * from './components'
export * from './theme'
export * from './hooks'
