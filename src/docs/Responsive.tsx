import React from 'react'
import { Box, List, Text } from '../components'
import { useBreakpointIndex, useMediaMatch } from '../hooks'
import { useResponsiveValue } from '../hooks/useResponsiveValue'

export const UseBreakpointIndexDemo: React.FC = () => {
  const bp = useBreakpointIndex()
  const matches = useMediaMatch()

  const responsiveValue = useResponsiveValue(['mobile', 'tablet', 'desktop'])

  const matchesValues = Object.values(matches)
  const matchesKeys = Object.keys(matches)

  return (
    <Box width={1} height="200px">
      <Text p="s">Breakpoint index: {bp}.</Text>
      <Text p="s">This is: {responsiveValue}</Text>
      <Text p="s">Matched list:</Text>
      <List p="m">
        {matchesKeys.map((match, index) => (
          <Text key={match}>
            {match}: {matchesValues[index].toString()}
          </Text>
        ))}
      </List>
    </Box>
  )
}
