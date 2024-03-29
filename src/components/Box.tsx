import React from 'react'
import { BaseBox } from '../base'

import { Colour, BgColour, BorderRadius, mainTheme as theme } from '../theme'
import { Elevation } from '../theme/index'
import { BoxSxProps } from '../index.d'

export interface ConstrainedBoxProps extends BoxSxProps {
  color?: Colour
  bg?: BgColour
  borderRadius?: BorderRadius
  elevation?: Elevation
  inlineBlock?: boolean
}

export const Box = React.forwardRef<any, ConstrainedBoxProps>(
  ({ inlineBlock, sx, elevation, borderRadius, ...props }, ref) => {
    return (
      <BaseBox
        ref={ref}
        sx={{
          borderRadius,
          boxShadow: elevation,
          display: `${inlineBlock ? 'inline-block' : 'block'}`,
          ...sx,
        }}
        {...props}
      />
    )
  },
)

export const Card: React.FC<ConstrainedBoxProps> = ({ children, ...props }) => (
  <Box sx={{ borderRadius: 'xs', boxShadow: theme.shadows.box }} {...props}>
    {children}
  </Box>
)
