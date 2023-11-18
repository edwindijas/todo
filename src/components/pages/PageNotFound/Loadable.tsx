import { lazy } from 'react'
import Loader from '@/components/molecules/Loader'

const PageNotFound = lazy(async () => await import('.'))

const Loadable = (): JSX.Element => (
  <Loader >
    <PageNotFound />
  </Loader>
)

export default Loadable