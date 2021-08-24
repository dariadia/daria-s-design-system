import React from 'react'
import styled from 'styled-components'

import { Box } from '.'
import { ConstrainedBoxProps } from '../index.d'

export type HeartProps = {
  transform?: string
  colour?: string
} & ConstrainedBoxProps

export const Heart: React.FC<HeartProps> = styled(Box)<HeartProps>`
  position: relative;
  width: 100px;
  height: 90px;
  transform: ${({ transform }) => transform};
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: ${({ colour = 'red' }) => colour};
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`
