import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/sort.svg?react'
import Icon from '.'

const SortIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default SortIcon
