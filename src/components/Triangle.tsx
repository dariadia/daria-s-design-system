import React from 'react'
import styled from 'styled-components'

import { Box } from '.'

import { ConstrainedBoxProps } from '../index.d'
import { baseTheme, Colour } from '../theme'
import { colours } from '../theme/colours'

export type TriangleProps = {
  left?: string
  right?: string
  top?: string
  bottom?: string
  colour?: Colour
} & ConstrainedBoxProps

export const TriangleUp: React.FC<TriangleProps> = styled(Box)<TriangleProps>`
  width: 0;
  height: 0;
  border-left: ${({ left = baseTheme.space.lion }) => left}px solid transparent;
  border-right: ${({ right = baseTheme.space.lion }) => right}px solid
    transparent;
  border-bottom: ${({ bottom = baseTheme.space.elephant }) => bottom}px solid
    ${({ colour = 'accentDark' }) => colours[colour as Colour]};
`

export const TriangleDown: React.FC<TriangleProps> = styled(Box)<TriangleProps>`
  width: 0;
  height: 0;
  border-left: ${({ left = baseTheme.space.lion }) => left}px solid transparent;
  border-right: ${({ right = baseTheme.space.lion }) => right}px solid
    transparent;
  border-top: ${({ top = baseTheme.space.elephant }) => top}px solid
    ${({ colour = 'accentDark' }) => colours[colour as Colour]};
`

export const TriangleLeft: React.FC<TriangleProps> = styled(Box)<TriangleProps>`
  width: 0;
  height: 0;
  border-top: ${({ top = baseTheme.space.lion }) => top}px solid transparent;
  border-right: ${({ right = baseTheme.space.elephant }) => right}px solid
    ${({ colour = 'accentDark' }) => colours[colour as Colour]};
  border-bottom: ${({ bottom = baseTheme.space.lion }) => bottom}px solid
    transparent;
`

export const TriangleRight: React.FC<TriangleProps> = styled(
  Box,
)<TriangleProps>`
  width: 0;
  height: 0;
  border-top: ${({ top = baseTheme.space.lion }) => top}px solid transparent;
  border-left: ${({ left = baseTheme.space.elephant }) => left}px solid
    ${({ colour = 'accentDark' }) => colours[colour as Colour]};
  border-bottom: ${({ bottom = baseTheme.space.lion }) => bottom}px solid
    transparent;
`
