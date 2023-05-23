import Image from "next/image"
import HomeBg from "@/public/assets/home/background-home-mobile.jpg"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="px-6 Home w-full flex-grow flex flex-col text-center items-center justify-between gap-4">
        <div className="max-w-[450px]">
          <h5>so, you want to travel to</h5>
          <h2>space</h2>
          <p className="body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href={"/destination"}>
          <button className="rounded-full h-[150px] w-[150px] bg-color-white mb-12">
            <span className="text-color-primary font-belle text-[20px] leading-[23px] uppercase">
              explore
            </span>
          </button>
        </Link>
      </div>
      <Image
        className="-z-10 w-full h-full top-0"
        src={HomeBg}
        alt="home background"
        quality={100}
        style={{ objectFit: "cover", position: "fixed" }}
      />
    </>
  )
}
