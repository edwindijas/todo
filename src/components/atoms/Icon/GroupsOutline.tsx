import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/groups.svg?react'
import Icon from '.'

const GroupsOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default GroupsOutlineIcon
