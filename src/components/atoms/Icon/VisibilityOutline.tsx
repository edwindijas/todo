import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/visibility.svg?react'
import Icon from '.'

const VisibilityOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default VisibilityOutlineIcon
