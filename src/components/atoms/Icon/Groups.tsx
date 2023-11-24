import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/groups.svg?react'
import Icon from '.'

const GroupsIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default GroupsIcon
