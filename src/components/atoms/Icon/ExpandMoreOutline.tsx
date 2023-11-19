import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/expand_more.svg?react'
import Icon from '.'

const ExpandMoreOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ExpandMoreOutlineIcon
