interface ButtonProps {
  children: React.ReactElement | string,
  className: string,
  onClick?: () => void,
  dataTestId: string
}

 const Button = ({
  className,
  children,
  onClick,
  dataTestId
}: ButtonProps): JSX.Element =>
  <button data-testid={dataTestId} onClick={onClick} className={className}>
    {children}
  </button>


export default Button