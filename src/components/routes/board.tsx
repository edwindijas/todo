import { type RouteObject } from 'react-router-dom'
import BoardPage from '@/components/pages/board/Loadable'

export const boardRoutes: RouteObject[] = [
  {
    path: '/board',
    element: <BoardPage />
  }
]

export default boardRoutes