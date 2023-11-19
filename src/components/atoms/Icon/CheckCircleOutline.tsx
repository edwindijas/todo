import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/check_circle.svg?react'
import Icon from '.'

const CheckCircleOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default CheckCircleOutlineIcon
