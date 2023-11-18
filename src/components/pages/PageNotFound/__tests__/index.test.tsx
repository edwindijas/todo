import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react'
import PageNotFound from '..'

it ('Renders snapshot correctly', async () => {
  const {container, getByText} = render(<PageNotFound />)
  await waitFor( () => { expect(getByText('Page Not Found')).toBeInTheDocument() })
  expect(container).toMatchSnapshot()
})
