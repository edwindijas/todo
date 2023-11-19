import React from 'react'
import ReactComponent from '@material-design-icons/svg/outlined/settings.svg?react'
import Icon from '.'

const SettingsOutlineIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default SettingsOutlineIcon
