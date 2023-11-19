import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/done.svg?react'
import Icon from '.'

const DoneIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default DoneIcon
