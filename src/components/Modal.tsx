import * as React from "react"

import theme from "../theme"

import IconButton from "./IconButton"

import CloseIcon from "../svg/CloseIcon"

interface ModalProps {
  closeFunction: any
  condition: boolean
}

const styles = {
  modal: {
    background: theme.light1,
    height: "93%",
    inset: "0",
    margin: "auto",
    maxWidth: "600px",
    position: "fixed" as "fixed",
    width: "90%",
    zIndex: 3,
  },
}

const Modal: React.FC<ModalProps> = ({
  children,
  closeFunction,
  condition,
}) => {
  return condition ? (
    <div style={styles.modal}>
      <IconButton
        customHover={{ background: theme.primary1, color: theme.light1 }}
        customStyles={{ position: "fixed", right: "10px", top: "10px" }}
        hoverColor={theme.light1}
        icon={CloseIcon}
        onClick={closeFunction}
      />
      {children}
    </div>
  ) : (
    <></>
  )
}

export default Modal
