import { cva } from 'class-variance-authority'
import CusButton from './components/Button'
import CustomLink from './components/Link'

const getClassName = cva([''], {
  variants: {
    intent: {
      primary: ''
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})

interface ButtonProps {
  className?: string,
  isLink?: boolean
  isNavLink?: boolean,
  to?: string
  children: React.ReactElement | string
  onClick?: () => void
}

const Button = ({
  className = '',
  to = '',
  isLink = false,
  isNavLink = false,
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  const Component = isLink || isNavLink ? CustomLink : CusButton

  return <Component to={to}
    isNavLink={isNavLink}
    onClick={onClick}
    className={`${className} ${getClassName({})}`} >
    {children}
  </Component>
}

export default Button
