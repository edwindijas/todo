import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/mail.svg?react'
import Icon from '.'

const MailOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default MailOutlineIcon
