import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/expand_circle_down.svg?react'
import Icon from '.'

const ExpandCircleDownOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ExpandCircleDownOutlineIcon
