import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/app.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from '@/components/routes'

const root = document.getElementById('root')
const router = createBrowserRouter(routes)


if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )  
}
