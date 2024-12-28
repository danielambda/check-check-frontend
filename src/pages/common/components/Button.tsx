type ButtonProps = {
  onClick?: React.MouseEventHandler
  children: React.ReactNode
}

const Button = ({ children, onClick }: ButtonProps) =>
  <button
    onClick={onClick}
    className="rounded-2xl bg-purple-950 p-4"
  >
    {children}
  </button>

export default Button
