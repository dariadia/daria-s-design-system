import React from 'react'
import { Box, ConstrainedBoxProps } from './Box'

export const Flex: React.FC<ConstrainedBoxProps> = ({ display, ...rest }) => (
  <Box display={display || 'flex'} {...rest} />
)
