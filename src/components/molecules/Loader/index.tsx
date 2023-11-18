import React, {Suspense} from 'react'
import Fallback from './components/Fallback'


const Loader = ({ children }: Props): JSX.Element => (
  <Suspense fallback={<Fallback />}>
    {children}
  </Suspense>
)

interface Props  {
  children?: React.ReactElement
}


export default Loader