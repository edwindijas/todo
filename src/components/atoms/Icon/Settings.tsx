import React from 'react'
import ReactComponent from '@material-design-icons/svg/round/settings.svg?react'
import Icon from '.'

const SettingsIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default SettingsIcon
