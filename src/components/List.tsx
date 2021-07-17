import React from 'react'

import styled from 'styled-components'
import { BaseProps, BoxSxProps, SxStyleProp } from '../index.d'
import css, { Theme } from '@styled-system/css'

import { theme, Space } from '../theme'

export interface ListProps extends BoxSxProps {
  direction?: 'row' | 'column'
  inlineBlock?: boolean
  children: React.ReactNode[]
  liSx?: SxStyleProp
  theme?: Theme
}

const sx = (props: BaseProps) => css(props.sx)(props.theme)
const liSx = (props: ListProps) => css(props.liSx)(props.theme)
const base = (props: BaseProps) => css(props.__css)(props.theme)

const StyledList = styled('ul')<ListProps>`
  box-sizing: border-box;
  display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};
  list-style: none;
  padding: ${({ p }) => (p ? theme.space[p as Space] : '0')};
  margin: ${({ m }) => (m ? theme.space[m as Space] : '0')};
  > li {
    box-sizing: border-box;
    display: ${({ direction = 'column' }) =>
      direction === 'column' ? 'block' : 'inline-block'};
    padding: ${({ p }) => (p ? theme.space[p as Space] : '0')};
    margin: ${({ m }) => (m ? theme.space[m as Space] : '0')};
    ${liSx}
  }
  ${sx}
  ${base}
`

export const List: React.FC<ListProps> = ({ children, ...props }) => (
  <StyledList {...props}>
    {children &&
      children.map((child: React.ReactNode, index: number) => (
        <li key={index}>{child}</li>
      ))}
  </StyledList>
)