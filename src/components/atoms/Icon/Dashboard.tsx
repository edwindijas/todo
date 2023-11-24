import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/dashboard.svg?react'
import Icon from '.'

const DashboardIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default DashboardIcon
