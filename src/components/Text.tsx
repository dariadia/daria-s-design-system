import React from 'react'
import styled from 'styled-components'

import { Box, ConstrainedBoxProps } from './Box'
import { TextColour } from '../theme'
import { colours } from '../theme/colours'
import { transitions } from '../theme/transitions'

export interface ConstrainedTextProps extends ConstrainedBoxProps {
  color?: TextColour
  kind?: 'serif' | 'sansSerif'
  activeColor?: TextColour
}

export const TextBase: React.FC<ConstrainedTextProps> = React.forwardRef<
  any,
  ConstrainedTextProps
>(({ as = 'span', ...rest }, ref) => (
  <Box as={as} ref={ref} scale="typography" {...rest} />
))

export const HeadingText: React.FC<ConstrainedTextProps> = ({
  kind,
  ...props
}) => (
  <Box
    scale={`typography.${
      kind === 'serif' ? 'headingSerif' : 'headingSansSerif'
    }`}
    {...props}
  />
)

export const HeadingH1: React.FC<ConstrainedTextProps> = (props) => (
  <HeadingText variant="headingLarge" as="h1" {...props} />
)

export const HeadingH2: React.FC<ConstrainedTextProps> = (props) => (
  <HeadingText variant="headingMedium" as="h2" {...props} />
)
export const HeadingH3: React.FC<ConstrainedTextProps> = (props) => (
  <HeadingText variant="headingSmall" as="h3" {...props} />
)

export const Text: React.FC<ConstrainedTextProps> = (props) => (
  <TextBase scale="typography.text" {...props} />
)

export const HoverableText = styled(TextBase)<ConstrainedTextProps>`
  &:hover {
    cursor: pointer;
    transition: ${transitions.default} color;
    color: ${({ activeColor }) =>
      activeColor ? colours[activeColor] : colours.accentDark};
  }
`

export const Caption: React.FC<ConstrainedTextProps> = (props) => (
  <Text variant="caption" {...props} />
)
