import { type RouteObject } from 'react-router-dom'
import PageNotFound from '@/components/pages/PageNotFound/Loadable'
import Dashboard from '../pages/dashboard/Loadable'

import todoRoutes from './todo'
import calendarRoutes from './calendar'
import boardRoutes from './board'

export const routes: RouteObject[] = [
  ...todoRoutes,
  ...calendarRoutes,
  ...boardRoutes,
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]

export default routes