import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ThemeType } from '../theme'
import { defaultOptions } from './types'
import { useBreakpointIndex } from './useBreakpointIndex'

type Values<T> = ((theme: ThemeType | null) => T[]) | T[]

export function useResponsiveValue<T>(
  values: Values<T>,
  options: defaultOptions = {},
): T {
  const theme = useContext(ThemeContext)
  const array = typeof values === 'function' ? values(theme) : values
  const index = useBreakpointIndex(options)
  return array[index >= array.length ? array.length - 1 : index]
}
