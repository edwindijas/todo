import {lazy} from 'react'
import Loader from '@/components/molecules/Loader';

const Dashboard = lazy(async () => await import('.') )

const Loadable = (): JSX.Element => <Loader >
  <Dashboard />
</Loader>

export default Loadable