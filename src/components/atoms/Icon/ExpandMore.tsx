import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/expand_more.svg?react'
import Icon from '.'

const ExpandMoreIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ExpandMoreIcon
