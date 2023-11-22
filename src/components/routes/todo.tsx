import { type RouteObject } from 'react-router-dom'
import TodoPage from '@/components/pages/todo/Loadable'

export const todoRoutes: RouteObject[] = [
  {
    path: '/todo',
    element: <TodoPage />
  }
]

export default todoRoutes