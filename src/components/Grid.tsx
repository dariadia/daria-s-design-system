import React from 'react'
import { Box, ConstrainedBoxProps } from './Box'

export const Grid: React.FC<ConstrainedBoxProps> = ({ display, ...rest }) => (
  <Box display={display || 'grid'} {...rest} />
)
export const InlineGrid: React.FC<ConstrainedBoxProps> = ({
  display,
  ...rest
}) => <Box display={display || 'inline-grid'} {...rest} />
