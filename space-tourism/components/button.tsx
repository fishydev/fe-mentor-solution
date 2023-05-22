"use client"
import { ReactNode } from "react"

import clsx from "clsx"

type ButtonProps = {
  children?: ReactNode
  onClick?: () => void
  className?: string
}

const Button = (props: ButtonProps) => {
  const { children, onClick, className } = props
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
