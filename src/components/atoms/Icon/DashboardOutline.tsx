import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/dashboard.svg?react'
import Icon from '.'

const DashboardOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default DashboardOutlineIcon
