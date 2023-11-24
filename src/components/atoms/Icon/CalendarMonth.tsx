import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/calendar_month.svg?react'
import Icon from '.'

const CalendarMonthIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default CalendarMonthIcon
