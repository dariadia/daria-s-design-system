import React from 'react'
import styled from 'styled-components'

import { List, ListProps } from './List'
import { Space, baseTheme } from '../theme'

const StyledScroller = styled(List).attrs({
  direction: 'row',
})<ListProps>`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: ${({ pb }) =>
    pb ? baseTheme.space[pb as Space] : `${baseTheme.space.m}px`};
  -webkit-overflow-scrolling: touch;
`

export const HorizontalScroller: React.FC<ListProps> = ({ children, ...props }) => {
  return <StyledScroller {...props}>{children}</StyledScroller>
}
