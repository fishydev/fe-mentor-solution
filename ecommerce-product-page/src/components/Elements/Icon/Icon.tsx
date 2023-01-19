import clsx from "clsx"
import { ReactSVG } from "react-svg"

type IconProps = {
  name: string
  className?: string
  color?: string
  beforeInjection?: (svg: SVGSVGElement) => void
}

const Icon = (props: IconProps) => {
  const { name, className, color, beforeInjection } = props
  return (
    <ReactSVG
      src={`icons/icon-${name}.svg`}
      className={clsx(className)}
      beforeInjection={beforeInjection}
    />
  )
}

export default Icon
