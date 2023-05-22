type TitleProps = {
  number: number
  text: string
}

export default function Title(props: TitleProps) {
  const { number, text } = props
  return (
    <h5 className="mb-8">
      <span className="mr-4 text-color-secondary">0{number}</span>
      <span className="uppercase">{text}</span>
    </h5>
  )
}
