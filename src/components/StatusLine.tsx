import React from 'react'
import { BoxSxProps } from '../index.d'

import { BgColor } from '../theme'
import { Box } from './Box'

type Props = {
  mainColor: BgColor
  accentColor?: BgColor
  percent: number
} & BoxSxProps

const STATUS_LINE_HEIGHT = '6px'
const STATUS_LINE_DEFAULT_WIDTH = '170px'

export const StatusLine: React.FC<Props> = ({
  accentColor,
  mainColor,
  percent,
  width = STATUS_LINE_DEFAULT_WIDTH,
  sx,
}) => {
  return (
    <Box
      height={STATUS_LINE_HEIGHT}
      width={width}
      bg={mainColor}
      sx={{ borderRadius: 's', ...sx }}
    >
      <Box
        height={STATUS_LINE_HEIGHT}
        width={`${percent}%`}
        bg={accentColor ? accentColor : mainColor}
        sx={{
          borderRadius: 's',
          filter: `${accentColor ? 0 : 'brightness(0.8) saturate(5.5)'}`,
        }}
      />
    </Box>
  )
}
