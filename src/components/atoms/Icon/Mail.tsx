import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/mail.svg?react'
import Icon from '.'

const MailIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default MailIcon
