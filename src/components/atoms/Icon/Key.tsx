import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/key.svg?react'
import Icon from '.'

const KeyIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default KeyIcon
