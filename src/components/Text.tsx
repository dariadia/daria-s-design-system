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

// Splash · Display
export const SplashText: React.FC<ConstrainedTextProps> = (props) => (
  <Box scale="typography.splash" {...props} />
)

export const SplashDisplayH1: React.FC<ConstrainedTextProps> = (props) => (
  <SplashText variant="display1" as="h1" {...props} />
)

export const SplashDisplayH2: React.FC<ConstrainedTextProps> = (props) => (
  <SplashText variant="display2" as="h2" {...props} />
)

// Splash · Title
export const SplashTitleH1: React.FC<ConstrainedTextProps> = (props) => (
  <SplashText variant="title1" as="h1" {...props} />
)

export const SplashTitleH2: React.FC<ConstrainedTextProps> = (props) => (
  <SplashText variant="title2" as="h2" {...props} />
)

export const SplashTitleH3: React.FC<ConstrainedTextProps> = (props) => (
  <SplashText variant="title3" as="h3" {...props} />
)

// Heading
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
  <HeadingText variant="head1" as="h1" {...props} />
)

export const HeadingH2: React.FC<ConstrainedTextProps> = (props) => (
  <HeadingText variant="head2" as="h2" {...props} />
)
export const HeadingH3: React.FC<ConstrainedTextProps> = (props) => (
  <HeadingText variant="head3" as="h3" {...props} />
)

// Text
export const Text: React.FC<ConstrainedTextProps> = (props) => (
  <TextBase scale="typography.text" {...props} />
)

export const HoverableText = styled(TextBase)<ConstrainedTextProps>`
  &:hover {
    cursor: pointer;
    transition: ${transitions.default} color;
    color: ${({ activeColor }) =>
      activeColor ? colours[activeColor] : colours.darkGreen};
  }
`

// Caption
export const Caption: React.FC<ConstrainedTextProps> = (props) => (
  <Text variant="caption" {...props} />
)

// Button Text
export const ButtonText: React.FC<ConstrainedTextProps> = (props) => (
  <TextBase scale="typography.button" {...props} />
)

// Text Box
export const TextBox: React.FC<ConstrainedTextProps> = (props) => (
  <Box scale="typography.text" {...props} />
)

// Text Inline Block
export const TextInlineBlock: React.FC<ConstrainedTextProps> = (props) => (
  <Text display="inline-block" {...props} />
)
