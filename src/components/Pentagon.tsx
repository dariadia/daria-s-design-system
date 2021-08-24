import React from 'react'
import styled from 'styled-components'

import { Box } from '.'

import { ConstrainedBoxProps } from '../index.d'
import { Colour } from '../theme'
import { colours } from '../theme/colours'

export type PentagonProps = {
  transform?: string
  colour?: Colour
} & ConstrainedBoxProps

export const Pentagon: React.FC<PentagonProps> = styled(Box)<PentagonProps>`
  position: relative;
  width: 54px;
  box-sizing: content-box;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: ${({ colour = 'accentDark' }) => colours[colour as Colour]}
    transparent;

  &:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent
      ${({ colour = 'accentDark' }) => colours[colour as Colour]};
  }
`
