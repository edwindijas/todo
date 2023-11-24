import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/view_week.svg?react'
import Icon from '.'

const ViewWeekIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ViewWeekIcon
