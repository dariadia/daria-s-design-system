import React from 'react'
import styled from 'styled-components'

import { List, ListProps } from '.'
import { Space, baseTheme } from '../theme'

type Props = ListProps

const StyledScroller = styled(List).attrs({
  direction: 'row',
})<Props>`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: ${({ pb }) =>
    pb ? baseTheme.space[pb as Space] : `${baseTheme.space.m}px`};
  -webkit-overflow-scrolling: touch;
`

export const HorizontalScroller: React.FC<Props> = ({ children, ...props }) => {
  return <StyledScroller {...props}>{children}</StyledScroller>
}
