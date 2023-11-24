import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/app.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from '@/components/routes'
import getFaviconURL from './utils/favicon'

const root = document.getElementById('root')
const router = createBrowserRouter(routes)


const setIcon = (dark: boolean): void => {
  const iconURL = getFaviconURL(dark)
  const linksIcons = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]'))

  if (linksIcons.length === 0) {
    return
  }

  if (linksIcons.length > 1) {
    for (let x = linksIcons.length - 1; x > 0 ; x-=1) {
      const lnk =  linksIcons[x]
      lnk.parentNode?.removeChild(lnk)
    }
  }

  const linkIcon = linksIcons[0]
  linkIcon.setAttribute('sizes', '')
  linkIcon.href = iconURL
}

window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches}) => {
  setIcon(matches)
})

if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
  setIcon(window.matchMedia('(prefers-color-scheme: dark)').matches)
}

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )  
}
