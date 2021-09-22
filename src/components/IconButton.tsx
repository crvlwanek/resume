import * as React from "react"

import theme from "../theme"

interface IconButtonProps {
  background?: string
  className?: string
  color?: string
  customActive?: object
  customHover?: object
  customStyles?: object
  hoverColor?: string
  icon?: any
  link?: string
  onClick?: any
  size?: number
}

const styles = {
  button: {
    alignItems: "center",
    border: "none",
    borderRadius: "50%",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    margin: 5,
    overflow: "hidden",
    padding: 8,
  },
  hover: {
    filter: "brightness(90%) drop-shadow(1px 1px 3px black)",
  },
  active: {
    filter: "brightness(80%) drop-shadow(1px 1px 3px black)",
  },
}

const IconButton: React.FC<IconButtonProps> = ({
  background = theme.dark1,
  className,
  color = theme.dark1,
  customActive,
  customHover,
  customStyles,
  hoverColor,
  icon,
  link,
  onClick,
  size = 35,
}) => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = React.useState(false)

  const Icon = icon

  const useStyles = {
    color,
    ...styles.button,
    height: size,
    width: size,
    ...(hover ? { background } : null),
  }

  return (
    <a href={link} target="_blank">
      <button
        className={className}
        style={{
          ...useStyles,
          ...customStyles,
          ...(hover ? { ...styles.hover, ...customHover } : null),
          ...(active ? { ...styles.active, ...customActive } : null),
        }}
        onClick={onClick}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        onMouseDown={() => {
          setActive(true)
        }}
        onMouseUp={() => {
          setActive(false)
        }}
      >
        <Icon hoverColor={hoverColor} fill={hover ? theme.light1 : color} />
      </button>
    </a>
  )
}

export default IconButton
