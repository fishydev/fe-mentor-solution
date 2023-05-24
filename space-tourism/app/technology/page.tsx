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
        <div className="px-6 flex flex-col items-center lg:items-start text-center lg:text-start gap-2 max-w-[450px]">
          <span className="text-lg lg:text-3xl font-barlow uppercase text-color-secondary">
            the terminology...
          </span>
          <span className="text-2xl lg:text-5xl lg:my-4 font-belle uppercase">
            {tech.name}
          </span>
          <p className="body-text">{tech.description}</p>
        </div>
      </>
    )
  }),
  images: technologiesData.map((tech) => {
    return (
      <div className="lg:h-full w-full" key={tech.name}>
        <Image
          className="max-h-full lg:hidden"
          src={tech.images.landscape}
          alt={tech.name}
          height={999}
          width={999}
          style={{
            objectFit: "contain",
            position: "initial",
          }}
        />
        <Image
          className="max-h-full hidden lg:inline"
          src={tech.images.portrait}
          alt={tech.name}
          height={999}
          width={999}
          style={{
            objectFit: "contain",
            position: "initial",
          }}
        />
      </div>
    )
  }),
}

export default function Technology() {
  return (
    <>
      <div className="flex flex-col items-center lg:pl-40">
        <Title number={3} text="space launch 101" />
        <Tabs
          className="Technology"
          elements={technologies.elements}
          type="number"
          images={technologies.images}
        />
      </div>

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
    </>
  )
}
