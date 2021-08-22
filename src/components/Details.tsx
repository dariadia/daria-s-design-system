import React from 'react'
import styled from 'styled-components'

import { ConstrainedBoxProps, Box } from '.'
import { baseTheme } from '..'

export type DetailsProps = {
  summary?: React.ReactNode | React.ReactNode[]
  open?: boolean
  withMarker?: { closed: string; open: string }
} & ConstrainedBoxProps

const StyledDetails = styled(Box).attrs(({ open, ...props }: DetailsProps) => ({
  as: 'details',
  open: open || false,
  ...props,
}))<DetailsProps>`
  ${({ withMarker }) =>
    withMarker &&
    `> summary:before {
      content: '${withMarker.closed}';
      margin-right: ${baseTheme.space.s}px;
    }
    &[open] summary:before {
      content: '${withMarker.open}';
      margin-right: ${baseTheme.space.s}px;
    }`}
  > summary:hover {
    cursor: pointer;
  }
  > summary::-webkit-details-marker {
    display: none;
  }
  &:focus {
    outline: none;
  }
  > summary:focus {
    outline: none;
  }
`

export const Details = React.forwardRef<any, DetailsProps>(
  ({ summary, children, ...props }, ref) => {
    return (
      <StyledDetails ref={ref} {...props}>
        <Box as="summary">{summary}</Box>
        {children}
      </StyledDetails>
    )
  },
)
