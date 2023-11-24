import Button from '@/components/atoms/Button'
import AddIcon from '@/components/atoms/Icon/Add'
import CalendarMonthIcon from '@/components/atoms/Icon/CalendarMonth'
import DashboardOutlineIcon from '@/components/atoms/Icon/DashboardOutline'
import GroupsOutlineIcon from '@/components/atoms/Icon/GroupsOutline'
import LogoIcon from '@/components/atoms/Icon/Logo'
import SettingsOutlineIcon from '@/components/atoms/Icon/SettingsOutline'
import TaskAltIcon from '@/components/atoms/Icon/TaskAlt'
import ViewWeekOutlineIcon from '@/components/atoms/Icon/ViewWeekOutline'
import Menu from '@/components/molecules/menu'
import { type MenuItemProps } from '@/components/molecules/menu/components/MenuItem'

const menuItems: MenuItemProps[] = [
  {
    label: 'dashboard',
    to: '/',
    startIcon: <DashboardOutlineIcon />
  },
  {
    label: 'tasks',
    to: '/tasks',
    startIcon: <TaskAltIcon />
  },
  {
    label: 'calendar',
    to: '/calendar',
    startIcon: <CalendarMonthIcon />
  },
  {
    label: 'board',
    to: '/board',
    startIcon: <ViewWeekOutlineIcon />
  },
  {
    label: 'project-settings',
    to: '/project-settings',
    startIcon: <SettingsOutlineIcon />
  },
  {
    label: 'members',
    to: '/members',
    startIcon: <GroupsOutlineIcon />
  }
]

const Main = (): JSX.Element => <div className='w-64 h-full bg-white relative'>
  <div >
    <div className='flex py-4 px-6 gap-2 items-center'>
      <div className='w-8 h-8'><LogoIcon className=' fill-blue-dark' /></div>
      <p className='text-md text-blue-dark flex flex-col gap-0 leading-4'>
        <span>TASK</span>
        <span className='font-extrabold'>SPACE</span>
      </p>
    </div>
    <div>
    </div>
    <div className='p-4' >
      <Menu items={menuItems} isNavLink />
    </div>
  </div>
  <div className='px-6 absolute bottom-4 w-full'>
    <Button 
      isLink 
      intent='secondary'
      className='w-full justify-center'
      startIcon={<AddIcon />}
      float
      >New Tasks</Button>
  </div>
</div>

export default Main