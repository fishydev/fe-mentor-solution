import "./Description.scss"
import Icon from "../Elements/Icon/Icon"
import Button from "../Elements/Button/Button"
import { useState } from "react"
import { useCartStore } from "../../stores/cart"

type DescriptionProps = {
  brand: string
  name: string
  description: string
  price: number
  discount: number
  ogprice: number
}

const Description = (props: DescriptionProps) => {
  const { brand, description, discount, name, ogprice, price } = props
  const [amount, setAmount] = useState(0)
  const cart = useCartStore()

  const addToCart = () => {
    cart.addItem(amount)
    setAmount(0)
  }

  return (
    <section className="product-detail-container">
      <span className="product__brand">{brand}</span>
      <h1 className="product__name">{name}</h1>
      <p className="product__description">{description}</p>
      <div className="product__price">
        <div className="price">
          <span className="current">{price}</span>
          <span className="discount">{discount}</span>
        </div>
        <span className="ogprice">{ogprice}</span>
      </div>
      <div className="product__action">
        <div className="product__action-amount">
          <Button
            className="product__action-minus"
            onClick={() => setAmount(amount - 1)}
          >
            <Icon name="minus" />
          </Button>
          <span>{amount}</span>
          <Button
            className="product__action-plus"
            onClick={() => setAmount(amount + 1)}
          >
            <Icon name="plus" />
          </Button>
        </div>
        <Button className="product__action-add" onClick={() => addToCart()}>
          <Icon
            name="cart"
            beforeInjection={(svg) => {
              const el = svg.querySelector("path")
              el?.setAttribute("fill", "#ffffff")
            }}
          />
          Add to Cart
        </Button>
      </div>
    </section>
  )
}

export default Description
