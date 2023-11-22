import LogoIcon from '@/components/atoms/Icon/Logo'
import Menu, { type MenuItem } from '@/components/molecules/menu'

const menuItems: MenuItem[] = [
  {
    label: 'ToDo',
    to: '/todo'
  },
  {
    label: 'Calendar',
    to: '/calendar'
  },
  {
    label: 'Board',
    to: '/board'
  }
]

const Main = (): JSX.Element => <div className='w-64 border-r border-solid h-full'>
  <div className='flex p-4 gap-2 items-center'>
    <div className='w-10 h-10'><LogoIcon /></div>
    <p className='text-lg flex flex-col gap-0 leading-6'>
      <span>Task</span>
      <span className='font-bold'>Flow</span>
    </p>
  </div>
  <div>

  </div>
  <div className='p-2' >
    <Menu items={menuItems} isNavLink />
  </div>
</div>

export default Main