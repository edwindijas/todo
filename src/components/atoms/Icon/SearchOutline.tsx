import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/search.svg?react'
import Icon from '.'

const SearchOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default SearchOutlineIcon
