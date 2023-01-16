import "./Description.scss"

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
    </section>
  )
}

export default Description
