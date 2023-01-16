import { ReactNode, useState } from "react"
import "./Carousel.scss"
import NextSVG from "../../assets/images/icon-next.svg"
import PrevSVG from "../../assets/images/icon-previous.svg"
import Button from "../Elements/Button/Button"

const Carousel = () => {
  const [index, setIndex] = useState(0)

  const slide = (n: number) => {
    setIndex((index + n) % 4)
  }

  return (
    <section className="product-showcase">
      <div className="product-showcase__control">
        <Button icon>
          <img src={PrevSVG} alt="previous button" onClick={() => slide(-1)} />
        </Button>
        <Button icon>
          <img src={NextSVG} alt="next button" onClick={() => slide(1)} />
        </Button>
      </div>
      <img
        src={require(`../../assets/images/image-product-${index + 1}.jpg`)}
        alt={`product preview ${index + 1}`}
      />
      <div className="thumbnail-container">
        {[...Array(4)].map((e, i) => (
          <img
            className={index === i ? "active" : ""}
            src={require(`../../assets/images/image-product-${
              i + 1
            }-thumbnail.jpg`)}
            alt={`product showcase ${i + 1}`}
            key={i}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
