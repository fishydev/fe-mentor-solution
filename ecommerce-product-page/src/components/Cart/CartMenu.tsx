import "./CartMenu.scss"
import Button from "../Elements/Button/Button"
import { useCartStore } from "../../stores/cart"
import clsx from "clsx"
import CartItem from "./CartItem"

type CartMenuProps = {
  show: boolean
}

const CartMenu = (props: CartMenuProps) => {
  const cart = useCartStore()
  const { show } = props
  return (
    <aside className={clsx("cart-menu", show ? "" : "hidden")}>
      <div className="cart-menu__head">
        <h1>Cart</h1>
      </div>
      <div className="cart-menu__content">
        {cart.content[0].amount < 1 && (
          <span className="cart-menu__empty">Your cart is empty</span>
        )}
        {cart.content[0].amount > 0 && (
          <>
            <CartItem {...cart.content[0]} />
            <Button className="btn-checkout">Checkout</Button>
          </>
        )}
      </div>
    </aside>
  )
}

export default CartMenu
