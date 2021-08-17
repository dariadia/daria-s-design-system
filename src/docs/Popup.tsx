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
        bg="accentLight"
        color="black"
        width="200px"
        p="l"
        onClick={() => togglePopup(!popupShown)}
      >
        Toggle popup!
      </Button>
      {popupShown && (
        <Popup
          m="auto"
          mode="sized"
          width="400px"
          p="l"
          ariaLabelledby="heading"
          ariaDescribedby="content"
          onClose={() => togglePopup(!popupShown)}
        >
          {children}
        </Popup>
      )}
    </>
  )
}
