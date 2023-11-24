import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/task_alt.svg?react'
import Icon from '.'

const TaskAltIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default TaskAltIcon
