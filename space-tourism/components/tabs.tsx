"use client"
import clsx from "clsx"
import { ReactNode, useState } from "react"
import "./tabs.css"

export type TabsProps = {
  type: "dots" | "text" | "number"
  elements: ReactNode[]
  images?: ReactNode[]
  titles?: string[]
  imageBottom?: boolean
  className?: string
}

const Tabs = (props: TabsProps) => {
  const { type, elements, titles, images, imageBottom, className } = props
  const [open, setOpen] = useState(0)

  const handleClickTab = (index: number) => {
    setOpen(index)
  }
  return (
    <div
      className={clsx(
        className,
        "Tabs flex flex-col items-center gap-8 flex-grow lg:inline"
      )}
    >
      {/* Tab images */}
      {images &&
        images.map((image, index) => {
          return (
            <>
              <div
                className={clsx(
                  "Images",
                  index !== open ? "hidden" : "",
                  imageBottom ? "order-3" : ""
                )}
                key={index}
              >
                {image}
              </div>
            </>
          )
        })}
      <div
        className={clsx(
          imageBottom ? "order-2" : "",
          "Buttons flex gap-6 font-barlow uppercase"
        )}
      >
        {/* Tab header types */}
        {elements.map((element, index) => {
          // Dot type
          if (type === "dots") {
            return (
              <button
                className={clsx(
                  open === index ? "bg-color-white" : "bg-color-secondary",
                  imageBottom ? "order-2" : "",
                  "w-4 h-4 rounded-full"
                )}
                key={index}
                onClick={() => handleClickTab(index)}
              />
            )
          } else if (type === "number") {
            // Number type
            return (
              <button
                className={clsx(
                  open === index
                    ? "bg-color-white text-color-primary"
                    : "text-color-white",
                  "w-10 h-10 p-2 rounded-full border-color-white border-2"
                )}
                key={index}
                onClick={() => handleClickTab(index)}
              >
                {index + 1}
              </button>
            )
          } else {
            // Tab head with title type
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
      {/* Tab content */}
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
