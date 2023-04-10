import { ReactNode } from "react"

type OverlayProps = {
  children?: ReactNode
}

const Overlay = (props: OverlayProps) => {
  const { children } = props
  return (
    <div className="fixed top-0 left-0 z-50 flex flex-col h-screen w-screen backdrop-brightness-50 p-[12vh] items-center justify-center">
      {children}
    </div>
  )
}

export default Overlay
