interface ButtonProps {
  children: React.ReactElement | string,
  className: string,
  onClick?: () => void
}

 const Button = ({
  className,
  children,
  onClick
}: ButtonProps): JSX.Element =>
  <button data-testid='button-btn' onClick={onClick} className={className}>
    {children}
  </button>


export default Button