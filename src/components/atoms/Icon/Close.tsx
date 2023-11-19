import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/close.svg?react'
import Icon from '.'

const CloseIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default CloseIcon
