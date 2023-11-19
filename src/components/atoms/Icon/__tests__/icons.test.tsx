import { lowerCase } from 'lodash'
import { type LazyExoticComponent, type ComponentType, lazy } from 'react'

import { render, waitFor } from '@testing-library/react'
import icons from '../icons'

const iconFetched: Record<string, LazyExoticComponent<ComponentType<any>>> = {}

icons.forEach((icon: string) => {
  iconFetched[icon] = lazy(async () => await import(`../${icon}.tsx`))
})


const ShowIcon = ({name}: {name: string}): JSX.Element => {
  const Icon = iconFetched[name]
  return <div className='w-16'>
      <div className='bg-[#eee] p-2 h-16 w-16 rounded-md border-2 border-solid border-[#ccc]'  >
        <Icon className='fill-[#444]' />
      </div>
      <p className='text-sm w-full text-center py-2 font-bold capitalize'>{lowerCase(name)}</p>
    </div>
}

const AllIcons = (): JSX.Element => (
  <ul >
    {
      icons.map((iconName: string) => <li key={iconName}>
        <ShowIcon name={iconName} />
      </li>)
    }
  </ul>
)

it ('Snapshot all icons', async () => {
  const {container, getAllByTestId} = render(<AllIcons />)
  await waitFor(() => getAllByTestId('component-atom-icon'))
  expect(container).toMatchSnapshot()
})