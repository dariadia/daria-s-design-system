import React from 'react'
import styled from 'styled-components'
import { Colour, TextColour, Filter, Transition, BgColour, Space, mainTheme as theme} from '../theme'
import { colours } from '../theme/colours'
import { filters } from '../theme/filters'
import { transitions } from '../theme/timing'
import { Box, ConstrainedBoxProps } from './Box'

type Props = {
  disabled?: boolean
  inlineBlock?: boolean
  border?: string
  borderOnHover?: Colour
  colourOnHover?: TextColour
  activeColour?: Colour
  filter?: Filter
  transition?: Transition
} & ConstrainedBoxProps

const StyledButton = styled(Box)<Props>`
  display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border: ${({ border }) =>
    border
      ? `${border.split(' ')[0]} ${border.split(' ')[1]} ${
          colours[border.split(' ')[2] as Colour]
        }`
      : 'none'};
  &:hover {
    border: ${({ border, borderOnHover = 'accentDark' }) =>
      border
        ? `${border.split(' ')[0]} ${border.split(' ')[1]} ${
            colours[borderOnHover as Colour]
          }`
        : 'none'};
    color: ${({ border, color, borderOnHover, colourOnHover }) =>
      border
        ? colourOnHover
          ? colours[colourOnHover as Colour]
          : colours[borderOnHover as Colour]
        : color};
    background-color: ${({ activeColour, bg }) =>
      activeColour ? colours[activeColour] : bg};
    filter: ${({ activeColour, filter, disabled }) =>
      activeColour || disabled ? 'none' : filters[filter || 'semi']};
    transition: all ${({ transition }) => transitions[transition || 'default']};
  }
`

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledButton
      scale="variants.button"
      variant="primary"
      forwardedAs="button"
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export const Badge: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Button variant="badge" filter="none" {...props} disabled>
      {children}
    </Button>
  )
}

const StyledBadge = styled(Box)<Props>`
  display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};
  background: ${({ bg }) => (bg ? theme.colours[bg as BgColour] : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  border: ${({ color }) => (color ? `1px solid ${colours[color]}` : 'none')};
  &:hover {
    border: ${({ activeColour }) =>
      activeColour ? `1px solid ${colours[activeColour]}` : 'none'};
    color: ${({ activeColour, color = 'accentDark' }) =>
      activeColour ? colours[activeColour] : colours[color]};
    transition: all ${({ transition }) => transitions[transition || 'default']};
  }
`

export const TopicBadge: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledBadge
      scale="variants.button"
      variant="badge"
      forwardedAs="button"
      {...props}
    >
      {children}
    </StyledBadge>
  )
}
