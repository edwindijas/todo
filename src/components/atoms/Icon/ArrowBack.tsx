import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/arrow_back.svg?react'
import Icon from '.'

const ArrowBackIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ArrowBackIcon
