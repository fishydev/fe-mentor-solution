import "./CartMenu.scss"
import Button from "../Elements/Button/Button"
import { useCartStore } from "../../stores/cart"
import clsx from "clsx"

type CartMenuProps = {
  show: boolean
}

const CartMenu = (props: CartMenuProps) => {
  const cartStore = useCartStore()
  const { show } = props
  return (
    <aside className={clsx("cart-menu", show ? "" : "hidden")}>
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
