import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/search.svg?react'
import Icon from '.'

const SearchIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default SearchIcon
