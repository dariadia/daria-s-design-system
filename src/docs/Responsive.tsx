import React from 'react'
import { Box } from '../components/Box'
import { Text } from '../components/Text'
import { useBreakpointIndex, useMediaMatch } from '../hooks'
import { useResponsiveValue } from '../hooks/useResponsiveValue'

export const UseBreakpointIndexDemo: React.FC = () => {
  const bp = useBreakpointIndex()
  const matches = useMediaMatch()

  const responsiveValue = useResponsiveValue([
    'it is mobile',
    'it is larger than mobile',
  ])

  return (
    <Box width={1} height="200px" p="l">
      <Text p="s">Breakpoint index: {bp}</Text>
      <Text p="s" variant="body2">
        Media matches map: {JSON.stringify(matches, null, 2)}
      </Text>
      <Text p="s">Responsive value: {responsiveValue} </Text>
    </Box>
  )
}
