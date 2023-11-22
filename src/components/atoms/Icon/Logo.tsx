import React from 'react'
import ReactComponent from '@/assets/icons/logo.svg?react'
import Icon from '.'

const LogoIcon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default LogoIcon