type InfoSectionProps = {
  title: string
  value: string
}

export default function InfoSection(props: InfoSectionProps) {
  const { title, value } = props
  return (
    <div className="mb-8">
      <span className="text-lg tracking-[2.36px] font-barlow-condensed uppercase block mb-3 text-color-secondary">
        {title}
      </span>
      <span className="text-4xl font-belle uppercase block">{value}</span>
    </div>
  )
}
