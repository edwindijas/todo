import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/expand_circle_down.svg?react'
import Icon from '.'

const ExpandCircleDownIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ExpandCircleDownIcon
