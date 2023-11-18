import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import {render, waitFor, type RenderResult} from '@testing-library/react'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import {routes} from ".."



const getComponent = (initialEntries: string[]): RenderResult =>{
  const router = createMemoryRouter(routes, {
    initialEntries,
  })
  return render(<RouterProvider router={router} />)
}
  


describe('Router', () => {
  it ('shows 404 page on error', async () => {
    const { getByText } = getComponent(['/pagenotfound'])
    await waitFor(() => {
      expect(getByText('Page Not Found')).toBeInTheDocument()
    })
  })
})