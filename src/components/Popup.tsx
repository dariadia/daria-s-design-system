import React from 'react'
import styled from 'styled-components'

import { bgColours } from '../theme/colours'
import { theme } from '../theme'
import { transitions } from '../theme/transitions'

import { Box, ConstrainedBoxProps } from '../components'

export interface PopupProps extends ConstrainedBoxProps {
  mode?: 'full' | 'sized'
  onClose?: () => void
}

const Overlay = styled(Box)<ConstrainedBoxProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${theme.zIndices.heavens};
  background: ${bgColours.bgEmotionDarkBlue};
  animation: fadeIn ${transitions.default};
`

const StyledPopup = styled(Box)<PopupProps>`
  max-width: ${({ mode }) => (mode === 'sized' ? 'calc(100% - 16px)' : '100%')};
  background: ${({ bg }) => (bg ? bgColours[bg] : 'white')};
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
