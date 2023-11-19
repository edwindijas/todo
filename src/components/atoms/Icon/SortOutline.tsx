import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/sort.svg?react'
import Icon from '.'

const SortOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default SortOutlineIcon
