import { useState, useEffect, useLayoutEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { defaultOptions } from './types'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useBreakpointIndex = (options: defaultOptions = {}): number => {
  const theme = useContext(ThemeContext)
  const { defaultIndex = 0 } = options
  const breakpoints = theme && theme.breakpoints

  if (typeof defaultIndex !== 'number') {
    throw new TypeError(
      `Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`,
    )
  } else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) {
    throw new RangeError(
      `Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`,
    )
  }

  const [value, setValue] = useState(defaultIndex)

  useIsomorphicLayoutEffect(() => {
    const getIndex = () =>
      breakpoints.filter(
        (bp: string) =>
          window.matchMedia(`screen and (min-width: ${bp})`).matches,
      ).length

    const onResize = () => {
      const newValue = getIndex()
      if (value !== newValue) {
        setValue(newValue)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoints, value])

  return value
}
