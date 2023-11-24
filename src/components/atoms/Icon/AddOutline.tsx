import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/add.svg?react'
import Icon from '.'

const AddOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default AddOutlineIcon
