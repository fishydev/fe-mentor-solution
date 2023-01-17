import "./CartMenu.scss"
import Button from "../Elements/Button/Button"
type CartMenuProps = {
  show: boolean
}

const CartMenu = (props: CartMenuProps) => {
  const { show } = props
  return (
    <aside className="cart-menu">
      <div className="cart-menu__head">
        <h1>Cart</h1>
      </div>
      <div className="cart-menu__content">
        <Button className="btn-checkout">Checkout</Button>
      </div>
    </aside>
  )
}

export default CartMenu
