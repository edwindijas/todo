import { lazy } from 'react';
import Loader from '@/components/molecules/Loader';

const TodoPage = lazy(async () => await import('.'))

const Loadable = (): JSX.Element => <Loader >
  <TodoPage />
</Loader>

export default Loadable

