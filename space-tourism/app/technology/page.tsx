import Title from "@/components/title"
import TechnologyBg from "@/public/assets/technology/background-technology-mobile.jpg"
import Image from "next/image"
import data from "@/api/data.json"
import Tabs from "@/components/tabs"

const technologiesData = data.technology

const technologies = {
  elements: technologiesData.map((tech) => {
    return (
      <>
        <div className="px-6 flex flex-col items-center text-center gap-2">
          <span className="text-lg font-belle uppercase text-color-secondary">
            the terminology...
          </span>
          <span className="text-2xl font-belle uppercase">{tech.name}</span>
          <p className="body-text">{tech.description}</p>
        </div>
      </>
    )
  }),
  images: technologiesData.map((tech) => {
    return (
      <div className="w-full" key={tech.name}>
        <img
          className="max-h-full"
          src={tech.images.landscape}
          alt={tech.name}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    )
  }),
}

export default function Technology() {
  return (
    <div className="flex flex-col items-center">
      <Title number={3} text="space launch 101" />
      <Tabs
        elements={technologies.elements}
        type="number"
        images={technologies.images}
      />
      <Image
        className="-z-10 absolute"
        src={TechnologyBg}
        fill
        alt="technology background"
        quality={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}
