import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/unfold_more.svg?react'
import Icon from '.'

const UnfoldMoreOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default UnfoldMoreOutlineIcon
