import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react'
import Dashboard from '..'
import render from '@/utils/test-utils/customRender'

it ('Renders snapshot correctly', async () => {
  const {container, getByTestId} = render(<Dashboard />)
  await waitFor(() => { expect(getByTestId('page-dashboard')).toBeInTheDocument() })
  expect(container).toMatchSnapshot()
})
