import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/menu.svg?react'
import Icon from '.'

const MenuIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default MenuIcon
