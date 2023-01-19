import "./Button.scss"
import React, { ReactNode } from "react"
import clsx from "clsx"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: boolean
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const { icon, children, className, onClick } = props
  return (
    <button
      className={clsx("btn", className, icon ? "icon" : "")}
      onClick={onClick}
    >
      {children && children}
    </button>
  )
}

export default Button
