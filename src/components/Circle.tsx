import styled, { css } from 'styled-components'
import { system } from 'styled-system'

import { ConstrainedBoxProps, Box } from '.'
import { Space, baseTheme as theme } from '../theme'

export interface CircleProps extends ConstrainedBoxProps {
  image?: string
}

export const Circle = styled(Box).attrs({
  borderRadius: 'circle',
})<CircleProps>`
  align-items: center;
  justify-content: center;
  width: ${({ size }) =>
    size ? `${theme.space[size as Space]}px` : `${theme.space.xxl}px`};
  height: ${({ size }) =>
    size ? `${theme.space[size as Space]}px` : `${theme.space.xxl}px`};

  ${(props) =>
    props.image &&
    css`
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      ${system({
        image: {
          property: 'backgroundImage',
          transform: (value) => `url(${value})`,
        },
      })}
    `}
`
