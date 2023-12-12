import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/visibility.svg?react'
import Icon from '.'

const VisibilityIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default VisibilityIcon
