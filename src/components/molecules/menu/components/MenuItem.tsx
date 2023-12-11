import { FormattedMessage, type MessageDescriptor } from 'react-intl'
import { isString } from 'lodash'
import Button from '@/components/atoms/Button'

export interface MenuItemProps {
  startIcon?: React.ReactElement,
  endIcon?: React.ReactElement,
  label: string | MessageDescriptor,
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
>
  { isString(label) ? label : <FormattedMessage {...label} /> }
</Button>

export default MenuItem
