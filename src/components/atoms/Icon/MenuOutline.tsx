import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/menu.svg?react'
import Icon from '.'

const MenuOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default MenuOutlineIcon
