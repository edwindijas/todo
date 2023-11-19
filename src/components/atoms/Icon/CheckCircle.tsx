import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/check_circle.svg?react'
import Icon from '.'

const CheckCircleIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default CheckCircleIcon
