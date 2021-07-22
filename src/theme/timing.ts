export const transitions = {
  none: '0s',
  fast: '0.1s',
  default: '0.3s',
  slow: '0.5s',
  giraffe: '1.2s',
  turtle: '2.2s',
}

export type Transition = keyof typeof transitions

export const easing = {
  DEFAULT: 'default',
  SHADOW: 'shadow',
} as const

export const easings = {
  [easing.DEFAULT]: ['0.15', '0.5', '0.5', '1'],
  [easing.SHADOW]: ['0.4', '0.3', '0.8', '0.6'],
} as const

export type Ease<easing> = easing[keyof easing]

export const durations = {
  s: 200,
  m: 300,
  l: 450,
  xl: 900,
  turtle: 1700,
} as const
