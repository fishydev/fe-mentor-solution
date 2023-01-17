import Button from "../Elements/Button/Button"

type CartItemProps = {
  image: string
  price: number
  amount: number
}

const CartItem = (props: CartItemProps) => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src="" alt="" />
      <div className="cart-item__description">
        <span className="cart-item__name"></span>
        <div className="cart-item__total">
          <span className="cart-item__price"></span>
          <span className="cart-item__amount"></span>
          <span className="cart-item__total"></span>
        </div>
        <Button icon></Button>
      </div>
    </div>
  )
}

export default CartItem
