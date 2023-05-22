import Title from "@/components/title"
import CrewBg from "@/public/assets/crew/background-crew-mobile.jpg"
import Image from "next/image"
import data from "@/api/data.json"
import Tabs from "@/components/tabs"

const crewsData = data.crew

const crews = {
  elements: crewsData.map((crew, index) => {
    return (
      <>
        <div className="flex flex-col items-center text-center gap-2 md:max-w-[600px]">
          <span className="text-lg font-belle uppercase text-color-secondary">
            {crew.role}
          </span>
          <span className="text-2xl font-belle uppercase">{crew.name}</span>
          <p className="body-text">{crew.bio}</p>
        </div>
      </>
    )
  }),
  images: crewsData.map((crew) => {
    return (
      <div className="h-[225px] w-full" key={crew.name}>
        <img
          className="max-h-full"
          src={crew.images.png}
          alt={crew.name}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    )
  }),
}

export default function Crew() {
  return (
    <>
      <div className="px-6 flex flex-col items-center">
        <Title number={2} text="meet your crew" />
        <Tabs elements={crews.elements} images={crews.images} type="dots" />
        <Image
          className="-z-10 absolute"
          src={CrewBg}
          fill
          alt="crew background"
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  )
}
