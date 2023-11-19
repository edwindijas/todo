import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/arrow_back.svg?react'
import Icon from '.'

const ArrowBackOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ArrowBackOutlineIcon
