import { render } from '@testing-library/react'
import Fallback from '../Fallback'

it ('renders snapshot tests correctly', () => {
  const {container} = render(<Fallback />)
  expect(container).toMatchSnapshot()
})  