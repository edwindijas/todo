import { render } from '@testing-library/react'
import PageLoader from '..'

it ('renders snapshot tests correctly', () => {
  const {container} = render(<PageLoader />)
  expect(container).toMatchSnapshot()
})