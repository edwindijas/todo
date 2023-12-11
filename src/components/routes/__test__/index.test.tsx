import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import {render, waitFor, type RenderResult} from '@testing-library/react'
import {IntlProvider} from 'react-intl'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import {routes} from ".."


const getComponent = (initialEntries: string[]): RenderResult =>{
  const router = createMemoryRouter(routes, {
    initialEntries,
  })
  return render(<IntlProvider locale='en-gb' >
      <RouterProvider router={router} />
  </IntlProvider>)
}


describe('Router', () => {
  it ('shows 404 page on error', async () => {
    const { getByText } = getComponent(['/pagenotfound'])
    await waitFor(() => {
      expect(getByText('Page Not Found')).toBeInTheDocument()
    })
  })
  it ('navigates to dashboard',async () => {
    const { getByTestId } = getComponent(['/'])
    await waitFor(() => {
      expect(getByTestId('page-dashboard')).toBeInTheDocument()
    })
  })
  it ('navigates to board',async () => {
    const { getByTestId } = getComponent(['/board'])
    await waitFor(() => {
      expect(getByTestId('page-board')).toBeInTheDocument()
    })
  })

  it ('navigates to todo',async () => {
    const { getByTestId } = getComponent(['/tasks'])
    await waitFor(() => {
      expect(getByTestId('page-tasks')).toBeInTheDocument()
    })
  })

  it ('navigates to calendar',async () => {
    const { getByTestId } = getComponent(['/calendar'])
    await waitFor(() => {
      expect(getByTestId('page-calendar')).toBeInTheDocument()
    })
  })
})
