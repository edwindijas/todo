
import { type ComponentType, lazy } from 'react'
import type {Meta} from '@storybook/react'
import Component from '..'

const LOAD_TIME = 100000

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Components/molecules/PageLoader'
}


const WaitedComponent = async (): Promise<{ default: ComponentType<any>; }> => {
  const prom = new Promise<{ default: ComponentType<any>; }>((resolve) => {
    window.setTimeout(() => {
      resolve(({default: () => (
        <div className='flex h-full w-full items-center justify-center'>Loading Completed</div>
      )}))
    }, LOAD_TIME)
  })

  return await prom
}

const SuspenseChild = lazy(WaitedComponent)

export const PageLoader = (): JSX.Element => (
  <Component ><SuspenseChild /></Component>
)


export default meta