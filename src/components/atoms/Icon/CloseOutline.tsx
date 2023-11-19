import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/close.svg?react'
import Icon from '.'

const CloseOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default CloseOutlineIcon
