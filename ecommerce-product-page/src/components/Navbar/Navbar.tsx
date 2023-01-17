import "./Navbar.scss"
import logo from "../../assets/images/logo.svg"
import CartSVG from "../../assets/images/icon-cart.svg"
import MenuSVG from "../../assets/images/icon-menu.svg"
import AvatarImage from "../../assets/images/image-avatar.png"
import Button from "../Elements/Button/Button"
import CartMenu from "../Cart/CartMenu"

const Navbar = () => {
  return (
    <header className="header-wrapper">
      <section className="spacer-wrapper">
        <nav>
          <div className="navigation-wrapper">
            <Button className="nav__drawer" icon>
              <img src={MenuSVG} alt="" />
            </Button>
            <img className="logo" src={logo} alt="" />
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </nav>
        <div className="user-action">
          <div className="cart-btn">
            <Button icon>
              <img src={CartSVG} alt="" />
            </Button>
            <CartMenu show={true} />
          </div>
          <img src={AvatarImage} className="" alt="" />
        </div>
      </section>
    </header>
  )
}

export default Navbar
