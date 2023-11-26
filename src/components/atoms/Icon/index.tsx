import { type VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const Icon =  ({
  component,
  className: importClassName = '',
  ...variants
}: IconProps): JSX.Element => {
  const className = `${importClassName} ${IconVariants(variants)}`

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


const IconVariants= cva('', {
  variants: {
    fillContainer: {
      true: 'w-full h-full',
      false: ''
    }
  },
  defaultVariants: {
    fillContainer: true
  }
})

type IconVariantProps = VariantProps<typeof IconVariants>

interface IconProps extends IconVariantProps {
  component: React.FunctionComponent<any> | keyof JSX.IntrinsicElements,
  className?: string
}

export default Icon


