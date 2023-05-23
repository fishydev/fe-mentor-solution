import { ReactNode } from "react"
import InfoSection from "@/components/destination/InfoSection"
import Title from "@/components/title"
import DestinationBgMobile from "@/public/assets/destination/background-destination-mobile.jpg"
import DestinationBgTablet from "@/public/assets/destination/background-destination-tablet.jpg"
import DestinationBgDesktop from "@/public/assets/destination/background-destination-desktop.jpg"
import Image from "next/image"
import data from "@/api/data.json"
import Tabs from "@/components/tabs"

const destinationsData = data.destinations

const destinations = {
  elements: destinationsData.map((dest) => {
    return (
      <>
        <div className="flex flex-col items-center text-center max-w-[600px]">
          <h2 className="text-6xl">{dest.name}</h2>
          <p className="body-text">{dest.description}</p>
          <div className="w-full border-b border-b-color-secondary my-8"></div>
          <InfoSection title="avg. distance" value={dest.distance} />
          <InfoSection title="est. travel time" value={dest.travel} />
        </div>
      </>
    )
  }),
  images: destinationsData.map((dest) => {
    return (
      <div className="h-[225px] w-full" key={dest.name}>
        <Image
          className="max-h-full object-contain"
          src={dest.images.png}
          alt={dest.name}
          height={225}
          width={225}
          style={{
            objectFit: "contain",
            position: "initial",
          }}
        />
      </div>
    )
  }),
  titles: destinationsData.map((dest) => dest.name),
}

export default function Destination() {
  return (
    <>
      <div className="px-6 flex flex-col items-center text-center">
        <Title number={1} text="pick your destination" />
        <Tabs
          elements={destinations.elements}
          type="text"
          titles={destinations.titles}
          images={destinations.images}
        />
      </div>

      {/* Background Image */}
      <Image
        className="-z-10 w-full h-full top-0 md:hidden"
        src={DestinationBgMobile}
        alt="destination background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
      <Image
        className="-z-10 w-full h-full top-0 hidden md:inline"
        src={DestinationBgTablet}
        alt="destination background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
      <Image
        className="-z-10 w-full h-full top-0 hidden lg:inline"
        src={DestinationBgDesktop}
        alt="destination background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
    </>
  )
}
