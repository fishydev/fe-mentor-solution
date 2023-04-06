import clsx from "clsx"
import { ReactNode } from "react"

type ButtonProps = {
  icon?: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const { icon, children, className, onClick } = props
  return (
    <button
      className={clsx("flex min-w-fit gap-2 font-medium", className)}
      onClick={onClick}
    >
      {icon && <img className="object-contain" src={icon} alt="reply" />}
      <span className="font-medium">{children}</span>
    </button>
  )
}

export default Button
