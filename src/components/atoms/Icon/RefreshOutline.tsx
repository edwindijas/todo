import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/refresh.svg?react'
import Icon from '.'

const RefreshOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default RefreshOutlineIcon
