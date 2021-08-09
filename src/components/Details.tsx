import React from 'react'
import styled from 'styled-components'

import { ConstrainedBoxProps, Box } from '.'

export type DetailsProps = {
  summary?: Node | Node[]
  open?: boolean
  withMarker?: { closed: string; open: string }
} & ConstrainedBoxProps

const StyledDetails = styled(Box).attrs((props: DetailsProps) => ({
  as: 'details',
  open: props.open || false,
}))<DetailsProps>`
  ${({ withMarker }) =>
    withMarker &&
    `> summary:before {
      content: '${withMarker.closed}';
    }
    &[open] summary:before {
      content: '${withMarker.open}';
    }`}
  &:hover {
    cursor: pointer;
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
