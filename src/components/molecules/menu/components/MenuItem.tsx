import Button from '@/components/atoms/Button'

export interface MenuItemProps {
  startIcon?: React.ReactElement,
  endIcon?: React.ReactElement,
  label: string,
  to: string
  isNavLink?: boolean
}

const MenuItem = ({
  startIcon,
  endIcon,
  label,
  to,
  isNavLink,
}: MenuItemProps): JSX.Element =>
 <Button
  startIcon={startIcon}
  isNavLink={isNavLink}
  isLink to={to}
  endIcon={endIcon}
  padding='lg'
>{ label }</Button>

export default MenuItem
