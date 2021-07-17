export const brightnessFilters = {
  none: 'brightness(100%)',
  light: 'brightness(80%)',
  semi: 'brightness(60%)',
  dark: 'brightness(40%)',
}

export const blurFilters = {
  lightBlur: 'blur(1px)',
  semiBlur: 'blur(3px)',
}

export const filters = {
  ...brightnessFilters,
  ...blurFilters,
}
