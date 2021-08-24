import React from 'react'
import styled from 'styled-components'

import { Box } from '.'

import { ConstrainedBoxProps } from '../index.d'
import { baseTheme, Colour } from '../theme'
import { colours } from '../theme/colours'

export type StarProps = {
  transform?: string
  colour?: Colour
} & ConstrainedBoxProps

export const Star: React.FC<StarProps> = styled(Box)<StarProps>`
  margin: 50px 0;
  position: relative;
  color: ${({ colour = 'accentDark' }) => colours[colour as Colour]};
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid
    ${({ colour = 'accentDark' }) => colours[colour as Colour]};
  border-left: 100px solid transparent;
  transform: rotate(35deg) ${({ transform }) => transform};

  &:before {
    border-bottom: 80px solid
      ${({ colour = 'accentDark' }) => colours[colour as Colour]};
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    color: ${({ colour = 'accentDark' }) => colours[colour as Colour]};
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid
      ${({ colour = 'accentDark' }) => colours[colour as Colour]};
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: '';
  }
`
