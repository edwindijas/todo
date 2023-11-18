import { render } from '@testing-library/react'
import PropTypes, {type InferProps} from 'prop-types'
import Icon from '..'


function SampleComponent ({className}: InferProps<typeof SampleComponent.propTypes>): JSX.Element {
  return <div className={className ?? ''} >Hello World</div>
} 

SampleComponent.propTypes = {
  className: PropTypes.string
}

SampleComponent.defaultProps = {
  className: ''
} 

describe ('the main icon renders correctly', () => {
  it ('matches the snapshot', () => {
    const {container} = render(<Icon className='bg-black h-34' component={SampleComponent} />)
    expect(container).toMatchSnapshot()
  })
})