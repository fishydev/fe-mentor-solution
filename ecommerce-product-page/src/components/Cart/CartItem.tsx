import "./CartItem.scss"
import Button from "../Elements/Button/Button"
import Icon from "../Elements/Icon/Icon"
import { useCartStore } from "../../stores/cart"

type CartItemProps = {
  price: number
  amount: number
  name: string
}

const CartItem = (props: CartItemProps) => {
  const { price, amount, name } = props
  const cart = useCartStore()
  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={require("../../assets/images/image-product-1-thumbnail.jpg")}
        alt="product 1"
      />
      <div className="cart-item__description">
        <span className="cart-item__name">{name}</span>
        <div className="cart-item__detail">
          <span className="cart-item__price">{price}</span>
          <span className="cart-item__amount">{amount}</span>
          <span className="cart-item__total">{price * amount}</span>
        </div>
      </div>
      <Button icon onClick={() => cart.deleteItem()}>
        <Icon name="delete" />
      </Button>
    </div>
  )
}

export default CartItem
