import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/done.svg?react'
import Icon from '.'

const DoneOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default DoneOutlineIcon
