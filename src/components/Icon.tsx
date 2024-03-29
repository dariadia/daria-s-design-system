import React from 'react'
import styled from 'styled-components'

import { Box } from './Box'
import { Colour } from '../theme'
import { colours } from '../theme/colours'
import { BoxSxProps } from '../index.d'
import * as Icons from '../assets/icons'

type Props = BoxSxProps & {
  size?: string
  stroke?: Colour
  strokeWidth?: number
  fill?: Colour
  inlineBlock?: boolean
  center?: boolean
}

const StyledBox = styled(Box)<Props>`
  display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};
  ${({ size }) => {
    return size
      ? `svg {
      width: ${size};
      height: ${size};
     }`
      : ''
  }}
  ${({ center }) => {
    return center ? `svg { margin: 0 auto; }` : ''
  }}
  ${({ fill }) => {
    return fill ? `svg path, svg rect { fill: ${colours[fill] || fill}; }` : ''
  }}
  ${({ strokeWidth }) => {
    return strokeWidth
      ? `svg path, svg rect { stroke-width: ${strokeWidth}; }`
      : ''
  }}
  svg path {
    stroke: ${({ stroke }) =>
      stroke ? `${colours[stroke] || stroke};` : 'currentColor;'};
  }
  > * {
    display: block;
  }
`
export type IconType = keyof typeof Icons
export type IconProps = { name: IconType } & Props
export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = Icons[name]
  return (
    <StyledBox {...props}>
      <IconComponent />
    </StyledBox>
  )
}
