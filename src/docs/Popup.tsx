import React, { useState } from 'react'
import { Button, Popup, PopupProps } from '../components'

interface Popup {
  popupOptions: PopupProps
}

export const UsePopupDemo: React.FC<Popup> = ({ children, popupOptions }) => {
  const [popupShown, togglePopup] = useState(false)

  return (
    <>
      <Button
        bg="accentDark"
        color="white"
        width="200px"
        p="l"
        onClick={() => togglePopup(!popupShown)}
      >
        Toggle popup!
      </Button>
      {popupShown && (
        <Popup
          mode="sized"
          width="400px"
          p="l"
          onClose={() => togglePopup(!popupShown)}
        >
          {children}
        </Popup>
      )}
    </>
  )
}
