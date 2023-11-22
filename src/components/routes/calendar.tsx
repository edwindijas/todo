import { type RouteObject } from 'react-router-dom'
import CalendarPage from '@/components/pages/calendar/Loadable'

export const calendarRoutes: RouteObject[] = [
  {
    path: '/calendar',
    element: <CalendarPage />
  }
]

export default calendarRoutes