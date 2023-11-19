import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/refresh.svg?react'
import Icon from '.'

const RefreshIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default RefreshIcon
