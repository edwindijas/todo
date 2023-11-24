import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/add.svg?react'
import Icon from '.'

const AddIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default AddIcon
