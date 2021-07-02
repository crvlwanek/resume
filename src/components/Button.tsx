import * as React from "react"

import theme from "../theme"

import LinkWrapper from "./GenericWrapper"

type Theme = "primary" | "secondary" | "light" | "dark"
type ThemeColor = { [index: string]: string }
type Variant = "solid" | "outlined" | "transparent"

type Style = { background: string; color: string; borderColor: string }

interface ButtonProps {
  ariaLabel?: string
  autofocus?: boolean
  className?: string
  color?: string | null
  customActive?: object
  customHover?: object
  customStyles?: object
  disabled?: boolean
  form?: string
  href?: string
  linkStyle?: object
  name?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  textColor?: string | null
  theme?: Theme
  type?: "button" | "reset" | "submit"
  variant?: Variant
}

const themeColors: ThemeColor = {
  primary: "#126e82",
  secondary: "#c72819",
  light: "#e0e0e0",
  dark: "#1b1717",
}

const boxShadow =
  "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"

const styles = {
  button: {
    borderStyle: "solid",
    borderRadius: "7px",
    cursor: "pointer",
    fontFamily: theme.font2,
    fontSize: "1rem",
    padding: "7px 16px",
    transition: "ease-in-out 0.2",
  },
  hover: {
    filter: "brightness(95%) drop-shadow(1px 1px 3px black)",
  },
  active: {
    filter: "brightness(85%) drop-shadow(1px 1px 3px black)",
  },
}

const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  autofocus,
  children,
  className,
  color = null,
  customActive,
  customHover,
  customStyles,
  disabled,
  form,
  href,
  linkStyle,
  name,
  onClick,
  textColor = null,
  theme = "light",
  type = "button",
  variant = "solid",
}) => {
  const [hover, setHover] = React.useState(false)
  const [active, setActive] = React.useState(false)

  const buttonColor = color || themeColors[theme]
  var fontColor = textColor || "black"
  if (textColor === "match" || variant === "transparent") {
    fontColor = buttonColor
  }
  const getStyles = (buttonColor: string, variant: Variant): Style => {
    if (variant === "solid") {
      return {
        background: buttonColor,
        color: fontColor,
        borderColor: "transparent",
      }
    }
    return {
      background: "transparent",
      color: fontColor,
      borderColor: variant === "transparent" ? "transparent" : buttonColor,
    }
  }
  const useStyles = {
    ...getStyles(buttonColor, variant),
    ...styles.button,
    ...(variant == "solid" ? { boxShadow } : null),
  }
  return (
    <LinkWrapper
      condition={href}
      wrapper={(children: any) => (
        <a style={linkStyle} href={href}>
          {children}
        </a>
      )}
    >
      <button
        aria-label={ariaLabel}
        className={`${className}`}
        form={form}
        name={name}
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
        style={{
          ...useStyles,
          ...customStyles,
          ...(hover ? { ...styles.hover, ...customHover } : null),
          ...(active ? { ...styles.active, ...customActive } : null),
        }}
        type={type}
      >
        {children}
      </button>
    </LinkWrapper>
  )
}

export default Button
