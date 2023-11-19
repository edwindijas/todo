import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/unfold_more.svg?react'
import Icon from '.'

const UnfoldMoreIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default UnfoldMoreIcon
