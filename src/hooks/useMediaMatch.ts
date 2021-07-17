import { useBreakpointIndex } from './useBreakpointIndex'
import { sizes, breakpoints } from '../theme/breakpoints'
import { defaultOptions } from './types'

type BooleanMap = Record<string, boolean>
const mediaMatches = Object.keys(sizes).reduce((acc, b) => {
  acc[b] = false
  return acc
}, {} as BooleanMap)

const numericBreakpoints = breakpoints.map((bp) => parseInt(bp))
const entries = Object.entries(sizes)

export const useMediaMatch = (options: defaultOptions = {}): BooleanMap => {
  const index = useBreakpointIndex(options)

  return index > 0
    ? entries.reduce(
        (acc, [key, value]) => {
          acc[key] = numericBreakpoints[index - 1] >= value
          return acc
        },
        { ...mediaMatches },
      )
    : mediaMatches
}
