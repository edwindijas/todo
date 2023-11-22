import { Link, NavLink } from 'react-router-dom'

interface CustomLinkProps {
  isNavLink?: boolean,
  children: React.ReactElement | string,
  className: string,
  to: string,
  onClick?: () => void
}

const CustomLink = ({
  children,
  className,
  isNavLink,
  to,
  onClick
}: CustomLinkProps): JSX.Element => {

  const Component = isNavLink === true ? NavLink : Link
  return <Component to={to} className={className} onClick={onClick} >{children}</Component>
}


export default CustomLink