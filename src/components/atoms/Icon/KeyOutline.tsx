import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/key.svg?react'
import Icon from '.'

const KeyOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default KeyOutlineIcon
