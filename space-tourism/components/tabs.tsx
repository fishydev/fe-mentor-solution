"use client"
import clsx from "clsx"
import { ReactNode, useState } from "react"

export type TabsProps = {
  type: "dots" | "text" | "number"
  elements: ReactNode[]
  images?: ReactNode[]
  titles?: string[]
}

const Tabs = (props: TabsProps) => {
  const { type, elements, titles, images } = props
  const [open, setOpen] = useState(0)

  const handleClickTab = (index: number) => {
    setOpen(index)
  }
  return (
    <div className="flex flex-col items-center gap-8">
      {images &&
        images.map((image, index) => {
          return (
            <div className={clsx(index !== open ? "hidden" : "")} key={index}>
              {image}
            </div>
          )
        })}
      <div className="Tabs flex gap-6 font-barlow uppercase">
        {elements.map((element, index) => {
          if (type === "dots") {
            return (
              <button
                className="w-2 h-2 rounded-full bg-color-white"
                key={index}
                onClick={() => handleClickTab(index)}
              />
            )
          } else if (type === "number") {
            return (
              <button
                className="w-10 h-10 p-2 text-color-primary rounded-full bg-color-white"
                key={index}
                onClick={() => handleClickTab(index)}
              >
                {index + 1}
              </button>
            )
          } else {
            return (
              <button
                className={clsx(
                  index === open
                    ? "border-b-4 border-color-white pb-2"
                    : "pb-3",
                  "px-1"
                )}
                key={index}
                onClick={() => handleClickTab(index)}
              >
                <span className="uppercase tracking-[2.36px]">
                  {titles ? titles[index] : `Tab ${index + 1}`}
                </span>
              </button>
            )
          }
        })}
      </div>
      <div className="TabContent">
        {elements.map((element, index) => {
          return (
            <div key={index} className={clsx(index !== open ? "hidden" : "")}>
              {element}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
