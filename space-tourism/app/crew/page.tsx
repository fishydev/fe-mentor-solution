import Title from "@/components/title"
import CrewBgMobile from "@/public/assets/crew/background-crew-mobile.jpg"
import CrewBgTablet from "@/public/assets/crew/background-crew-tablet.jpg"
import CrewBgDesktop from "@/public/assets/crew/background-crew-desktop.jpg"
import Image from "next/image"
import data from "@/api/data.json"
import Tabs from "@/components/tabs"

const crewsData = data.crew

const crews = {
  elements: crewsData.map((crew, index) => {
    return (
      <>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 md:max-w-[600px]">
          <span className="text-lg lg:text-3xl font-belle uppercase text-color-secondary">
            {crew.role}
          </span>
          <span className="text-2xl lg:text-5xl font-belle uppercase lg:my-4">
            {crew.name}
          </span>
          <p className="body-text">{crew.bio}</p>
        </div>
      </>
    )
  }),
  images: crewsData.map((crew) => {
    return (
      <div className="h-[500px] w-full" key={crew.name}>
        <Image
          className="max-h-full"
          src={crew.images.png}
          alt={crew.name}
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

export default function Crew() {
  return (
    <>
      <div className="px-6 flex flex-col items-center flex-grow lg:px-40">
        <Title number={2} text="meet your crew" />
        <Tabs
          className="Crew"
          elements={crews.elements}
          images={crews.images}
          type="dots"
        />

        {/* Background image */}
        <Image
          className="-z-10 w-full h-full top-0 md:hidden"
          src={CrewBgMobile}
          alt="crew background"
          quality={100}
          style={{ objectFit: "cover", position: "fixed" }}
        />
        <Image
          className="-z-10 w-full h-full top-0 hidden md:inline"
          src={CrewBgTablet}
          alt="crew background"
          quality={100}
          style={{ objectFit: "cover", position: "fixed" }}
        />
        <Image
          className="-z-10 w-full h-full top-0 hidden lg:inline"
          src={CrewBgDesktop}
          alt="crew background"
          quality={100}
          style={{ objectFit: "cover", position: "fixed" }}
        />
      </div>
    </>
  )
}
