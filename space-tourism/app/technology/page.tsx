import Title from "@/components/title"
import TechnologyBgMobile from "@/public/assets/technology/background-technology-mobile.jpg"
import TechnologyBgTablet from "@/public/assets/technology/background-technology-tablet.jpg"
import TechnologyBgDesktop from "@/public/assets/technology/background-technology-desktop.jpg"
import Image from "next/image"
import data from "@/api/data.json"
import Tabs from "@/components/tabs"

const technologiesData = data.technology

const technologies = {
  elements: technologiesData.map((tech) => {
    return (
      <>
        <div className="px-6 flex flex-col items-center text-center gap-2 max-w-[450px]">
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
      <div className="w-screen" key={tech.name}>
        <img
          className="w-full"
          src={tech.images.landscape}
          alt={tech.name}
          style={{
            objectFit: "fill",
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

      {/* Background Image */}
      <Image
        className="-z-10 w-full h-full top-0 md:hidden"
        src={TechnologyBgMobile}
        alt="technology background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
      <Image
        className="-z-10 w-full h-full top-0 hidden md:inline"
        src={TechnologyBgTablet}
        alt="technology background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
      <Image
        className="-z-10 w-full h-full top-0 hidden lg:inline"
        src={TechnologyBgDesktop}
        alt="technology background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
    </div>
  )
}
