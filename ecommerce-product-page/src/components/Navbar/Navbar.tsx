import "./Navbar.scss"
import logo from "../../assets/images/logo.svg"
import CartSVG from "../../assets/images/icon-cart.svg"
import AvatarImage from "../../assets/images/image-avatar.png"

const Navbar = () => {
  return (
    <header className="header-wrapper">
      <section className="spacer-wrapper center">
        <nav>
          <div className="navigation-wrapper">
            <img className="logo" src={logo} alt="" />
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <div className="user-action">
          <button>
            <img src={CartSVG} alt="" />
          </button>
          <img src={AvatarImage} className="" alt="" />
        </div>
      </section>
    </header>
  )
}

export default Navbar
