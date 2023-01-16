import "./Button.scss"
import React, { ReactNode } from "react"

type ButtonProps = {
  icon?: boolean
  className?: string
  children?: ReactNode
  onClick?: (e: React.MouseEventHandler) => void
}

const Button = (props: ButtonProps) => {
  const { icon, children, className } = props
  const appendedClass =
    "btn" + `${className ? ` ${className}` : ""}` + `${icon ? " icon" : ""}`
  return <button className={appendedClass}>{children && children}</button>
}

export default Button
