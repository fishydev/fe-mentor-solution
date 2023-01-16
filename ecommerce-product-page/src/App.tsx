import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Carousel from "./components/Carousel/Carousel"
import Description from "./components/Description/Description"
import "./App.scss"

const product = {
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.0,
  discount: 50,
  ogprice: 250.0,
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="product-page">
          <Carousel />
          <Description {...product} />
        </div>
      </main>
    </div>
  )
}

export default App
