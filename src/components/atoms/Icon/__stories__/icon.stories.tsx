import {lazy, type ComponentType, type LazyExoticComponent} from 'react'

import PropTypes, {type InferProps} from 'prop-types'
import { lowerCase } from 'lodash'
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

function IconHolder ({icon, showAll, outline}: InferProps<typeof IconHolder.proptypes>): JSX.Element {
  return <div className='w-full h-full flex flex-col' >
    <h1 className='text-center text-[#222] text-3xl font-extrabold'>This story is only for display Icons</h1>
    <div className='w-full h-full overflow-auto flex p-4 justify-center items-center'>
      {!showAll && <ShowIcon name={icon} />}
      {showAll && <ul className='w-max h-max max-w-full flex-wrap justify-center flex gap-2' >
        {
          icons.filter((name) => (
            (outline && name.includes('Outline')) || (!outline && !name.includes('Outline'))
          )).map(iconName => (
            <li key={iconName} ><ShowIcon name={iconName} /></li>
          ))
        }
      </ul>}
    </div>
  </div>
} 

IconHolder.proptypes = {
  icon: PropTypes.string.isRequired,
  showAll: PropTypes.bool.isRequired,
  outline: PropTypes.bool.isRequired,
}

IconHolder.defaultProps = {
  icon: 'Refresh',
  showAll: true,
  outline: false
}

export default {
  component: IconHolder,
  title: 'Components/Atoms/Icon',
  argTypes: {
    icon: {
      control: 'select', 
      options: icons
    },
    showAll: {
      control: 'boolean',
      description: 'Shows all icons'
    },
    outline: {
      control: 'boolean',

    }
  }
}

export const Icon = (props: InferProps<typeof IconHolder.proptypes>):
  JSX.Element => (<IconHolder {...props} />)

  Icon.args = {
    showAll: true,
    icon: 'Refresh',
    outline: false
  }