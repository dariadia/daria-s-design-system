import React from 'react'
import styled from 'styled-components'

import { bgColours } from '../theme/colours'
import { mainTheme as theme } from '../theme'
import { transitions } from '../theme/timing'

import { Box, ConstrainedBoxProps } from '../components'

export interface PopupProps extends ConstrainedBoxProps {
  mode?: 'full' | 'sized'
  ariaLabelledby: string
  ariaDescribedby: string
  onClose?: (args?: any) => void
}

const Overlay = styled(Box)<ConstrainedBoxProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${theme.zIndices.topOfTheWorld};
  background: ${bgColours.overlay};
  animation: fadeIn ${transitions.default};
`

const StyledPopup = styled(Box).attrs((props: PopupProps) => ({
  role: 'dialog',
  'aria-labelledby': props.ariaLabelledby,
  'aria-describedby': props.ariaDescribedby,
}))<PopupProps>`
  max-width: ${({ mode }) => (mode === 'sized' ? 'calc(100% - 16px)' : '100%')};
  background: ${({ bg }) => (bg ? bgColours[bg] : 'white')};
  overflow: scroll;
  height: ${({ height }) => (height ? height : '100%')};
`

export const Popup: React.FC<PopupProps> = ({
  onClose,
  children,
  ...props
}) => (
  <Overlay onClick={onClose}>
    <StyledPopup {...props}>{children}</StyledPopup>
  </Overlay>
)
