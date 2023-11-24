import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/task_alt.svg?react'
import Icon from '.'

const TaskAltOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default TaskAltOutlineIcon
