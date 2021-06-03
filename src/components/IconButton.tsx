import * as React from "react"

interface IconButtonProps {
  background?: string
  color?: string
  customActive?: object
  customHover?: object
  customStyles?: object
  icon?: any
  link?: string
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
    padding: 8,
  },
  hover: {
    filter: "brightness(90%) drop-shadow(1px 1px 3px black)",
  },
  active: {
    filter: "brightness(80%) drop-shadow(1px 1px 3px black)",
  },
}

export const IconButton: React.FC<IconButtonProps> = ({
  background = "eeebdd",
  color = "eeebdd",
  customActive,
  customHover,
  customStyles,
  icon,
  link,
  size = 35,
}) => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = React.useState(false)

  const Icon = icon

  return (
    <a href={link} target="_blank">
      <button
        style={{
          ...styles.button,
          background,
          color,
          height: size,
          width: size,
          ...customStyles,
          ...(hover ? { ...styles.hover, ...customHover } : null),
          ...(active ? { ...styles.active, ...customActive } : null),
        }}
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
        <Icon fill={color} />
      </button>
    </a>
  )
}
