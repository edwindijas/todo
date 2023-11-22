import {lazy} from 'react'
import Loader from '@/components/molecules/Loader'

const BoardPage = lazy(async () => await import('.'))

const Loadable = (): JSX.Element => <Loader >
  <BoardPage />
</Loader>

export default Loadable