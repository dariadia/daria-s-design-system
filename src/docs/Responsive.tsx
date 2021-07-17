import React from 'react'
import { Box } from '../components/Box'
import { TextBox } from '../components/Text'
import { useBreakpointIndex, useMediaMatch } from '../hooks'
import { useResponsiveValue } from '../hooks/useResponsiveValue'

export const UseBreakpointIndexDemo: React.FC = () => {
  const bp = useBreakpointIndex()
  const matches = useMediaMatch()

  const responsiveValue = useResponsiveValue([
    'it is mobile',
    'it is larger one',
  ])

  return (
    <Box width={1} height="200px" p="l" bg="bgGradientAccent">
      <TextBox p="s">Breakpoint index: {bp}</TextBox>
      <TextBox p="s" variant="body2">
        Media matches map: {JSON.stringify(matches, null, 2)}
      </TextBox>
      <TextBox p="s">Responsive value: {responsiveValue} </TextBox>
    </Box>
  )
}
