import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/calendar_month.svg?react'
import Icon from '.'

const CalendarMonthOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default CalendarMonthOutlineIcon
