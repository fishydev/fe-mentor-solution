import clsx from "clsx"
import { ReactSVG } from "react-svg"

type IconProps = {
  name: string
  className?: string
  color?: string
}

const Icon = (props: IconProps) => {
  const { name, className, color } = props
  return (
    <ReactSVG
      src={`icons/icon-${name}.svg`}
      className={clsx(className)}
      beforeInjection={(svg) => {
        if (color) {
          svg.setAttribute("fill", color)
        }
      }}
    />
  )
}

export default Icon
