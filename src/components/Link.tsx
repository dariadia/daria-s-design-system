import React from 'react'
import { TextBase, ConstrainedTextProps } from './Text'

export type LinkProps = ConstrainedTextProps & {
  href?: string
  target?: string
  download?: boolean
  referrerpolicy?: string
}

export const Link: React.FC<LinkProps> = React.forwardRef<any, LinkProps>(
  (props, ref) => (
    <TextBase
      ref={ref}
      scale="typography.text"
      as="a"
      variant="link"
      color="black"
      sx={{ cursor: 'pointer', textDecoration: 'none' }}
      {...props}
    />
  ),
)
