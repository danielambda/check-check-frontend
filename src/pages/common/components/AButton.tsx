type AButtonProps = {
  href: string
  children: React.ReactNode
}

const AButton = ({ href, children }: AButtonProps) =>
  <a
    href={href}
    className="cursor-pointer rounded-2xl bg-purple-950 p-4"
  >
    {children}
  </a>

export default AButton
