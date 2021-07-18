import React, { useContext } from 'react'
import styled, { ThemeContext, Interpolation } from 'styled-components'
import {
  compose,
  space,
  layout,
  typography,
  color,
  variant as origVariant,
  flexbox,
} from 'styled-system'

import css, { get } from '@styled-system/css'

import shouldForwardProp from '@styled-system/should-forward-prop'

import { BaseProps, BoxSxProps, VariantProps } from './index.d'

const sx = (props: BaseProps) => css(props.sx)(props.theme)
const base = (props: BaseProps) => css(props.__css)(props.theme)

const variant = ({
  theme,
  prop = 'variant',
  variant,
  scale = 'variants',
}: VariantProps) => {
  const variants = Array.isArray(variant) ? variant : [variant].filter(Boolean)
  return origVariant({
    scale,
    prop,
    variants: variants.map((v) => get(theme, v as string, {})),
  })
}

const ignoredProps = ['scale']

const _BaseBox = styled('div').withConfig<BoxSxProps>({
  shouldForwardProp: (prop) =>
    !ignoredProps.includes(prop as string) && shouldForwardProp(prop as string),
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base as Interpolation<unknown>,
  variant as Interpolation<unknown>,
  sx as Interpolation<unknown>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any) => props.css,
  compose(space, layout, typography, color, flexbox),
)

const isGradientFill = (colorValue?: string): boolean =>
  !!(colorValue && colorValue.includes('gradient'))

export const BaseBox = React.forwardRef<any, BoxSxProps>(
  ({ bg, color, sx, ...rest }, ref) => {
    const { colours: themeColours } = useContext(ThemeContext)
    const BgColourValue = themeColours[bg as string]
    const isGradient = isGradientFill(BgColourValue)

    const props = {
      sx: {
        ...sx,
        ...(isGradient && { backgroundImage: BgColourValue }),
      },
      ...(!isGradient && { bg: themeColours[bg as string] }),
      color: themeColours[color as string],
      ...rest,
    }

    return <_BaseBox ref={ref} {...props} />
  },
)
