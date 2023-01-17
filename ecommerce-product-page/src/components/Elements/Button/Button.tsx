import "./Button.scss"
import React, { ReactNode } from "react"
import clsx from "clsx"

type ButtonProps = {
  icon?: boolean
  className?: string
  children?: ReactNode
  onClick?: (e: React.MouseEventHandler) => void
}

const Button = (props: ButtonProps) => {
  const { icon, children, className } = props
  return (
    <button className={clsx("btn", className, icon ? "icon" : "")}>
      {children && children}
    </button>
  )
}

export default Button
