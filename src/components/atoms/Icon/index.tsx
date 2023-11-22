import React from 'react'

interface IconProps {
  component: React.FunctionComponent<any> | keyof JSX.IntrinsicElements,
  className?: string
}

const Icon =  ({
  component,
  className: importClassName = ''
}: IconProps): JSX.Element => {
  const className = `${importClassName} w-full h-full`

  let Component = component

  if (typeof Component === 'string') {
    Component = PsuedoComp
  }

  return <Component
    className={className}
    data-testid='component-atom-icon'
  />
}

const PsuedoComp = (props: any): JSX.Element => <svg {...props} />

export default Icon


