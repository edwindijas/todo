import propTypes, { type InferProps } from 'prop-types'

export default function Icon ({
  component: Component,
  className: importClassName
}: InferProps<typeof Icon.propTypes>): JSX.Element {
  const className = `${importClassName} w-full h-full`
  return <Component
    className={className}
  />
}

Icon.propTypes = {
  component: propTypes.func.isRequired,
  className: propTypes.string
}

Icon.defaultProps = {
  className: ''
}

