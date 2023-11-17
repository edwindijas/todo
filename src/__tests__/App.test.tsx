import { type RenderResult, render } from '@testing-library/react'
import App from '../App.tsx'

const renderComponent = (): RenderResult => render(<App />)

it('correctly renders', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
