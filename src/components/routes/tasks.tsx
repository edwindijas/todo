import { type RouteObject } from 'react-router-dom'
import TodoPage from '@/components/pages/tasks/Loadable'

export const todoRoutes: RouteObject[] = [
  {
    path: '/tasks',
    element: <TodoPage />
  }
]

export default todoRoutes