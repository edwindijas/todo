import React from 'react'
import ReactComponent from '@/assets/icons/progress_activity.svg?react'
import Icon from '.'

const ProgressActivityIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ProgressActivityIcon
