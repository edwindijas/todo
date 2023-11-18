import { type RouteObject } from 'react-router-dom'
import PageNotFound from '@/components/pages/PageNotFound/Loadable'


export const routes: RouteObject[] = [
  {
    path: '*',
    element: <PageNotFound />
  }
]

export default routes