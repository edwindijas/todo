import {lazy} from 'react'
import Loader from '@/components/molecules/Loader'

const CalendarPage = lazy(async () => await import('.'))

const Loadable = (): JSX.Element => <Loader >
  <CalendarPage />
</Loader>

export default Loadable