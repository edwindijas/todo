import { FormattedMessage } from 'react-intl'
import Button from '@/components/atoms/Button'
import AddIcon from '@/components/atoms/Icon/Add'
import CalendarMonthIcon from '@/components/atoms/Icon/CalendarMonth'
import DashboardOutlineIcon from '@/components/atoms/Icon/DashboardOutline'
import ExpandCircleDownOutlineIcon from '@/components/atoms/Icon/ExpandCircleDownOutline'
import GroupsOutlineIcon from '@/components/atoms/Icon/GroupsOutline'
import LogoIcon from '@/components/atoms/Icon/Logo'
import SettingsOutlineIcon from '@/components/atoms/Icon/SettingsOutline'
import TaskAltIcon from '@/components/atoms/Icon/TaskAlt'
import ViewWeekOutlineIcon from '@/components/atoms/Icon/ViewWeekOutline'
import SearchInput from '@/components/molecules/SearchInput'
import Menu from '@/components/molecules/menu'
import { type MenuItemProps } from '@/components/molecules/menu/components/MenuItem'
import messages from '../messages'

const menuItems: MenuItemProps[] = [
  {
    label: 'dashboard',
    to: '/',
    startIcon: <DashboardOutlineIcon />
  },
  {
    label: messages.tasks,
    to: '/tasks',
    startIcon: <TaskAltIcon />
  },
  {
    label: messages.calendar,
    to: '/calendar',
    startIcon: <CalendarMonthIcon />
  },
  {
    label: messages.board,
    to: '/board',
    startIcon: <ViewWeekOutlineIcon />
  },
  {
    label: messages.projectSettings,
    to: '/project-settings',
    startIcon: <SettingsOutlineIcon />
  },
  {
    label: messages.members,
    to: '/members',
    startIcon: <GroupsOutlineIcon />
  }
]

const Main = (): JSX.Element => <div className=' w-52 h-full bg-white relative'>
  <div >
    <div className='flex py-4 px-6 gap-2 items-center'>
      <div className='w-8 h-8'><LogoIcon className=' fill-blue-dark' /></div>
      <p className='text-md text-blue-dark flex flex-col gap-0 leading-4'>
        <span className='uppercase'><FormattedMessage {...messages.task} /></span>
        <span className='font-extrabold uppercase'>
          <FormattedMessage {...messages.space} />
        </span>
      </p>
    </div>
    <div className='px-4 pt-4' >
      <SearchInput rounded='full' size='sm' capitalizeLabel label={messages.search} />
    </div>
    <div className='p-4'>
      <Menu items={[menuItems[0]]} isNavLink />
    </div>
    <div className='px-6 font-bold flex flex-col gap-3 border-t-2 border-b py-3 border-bg'>
      <p className='text-sm text-blue-medium capitalize'>
        <FormattedMessage {...messages.projects} />
      </p>
      <div className='flex justify-between items-center'>
        <p className='text-blue-dark'>Office Work</p>
        <div > 
          <ExpandCircleDownOutlineIcon className='w-5 h-5 fill-blue-dark' fill-container='false' />
        </div>
      </div>
    </div>
    <div className='p-4 text-sm' >
      <Menu items={menuItems.slice(1)} isNavLink />
    </div>
  </div>
  <div className='px-6 absolute bottom-4 w-full'>
    <Button 
      isLink 
      intent='secondary'
      className='w-full justify-center'
      startIcon={<AddIcon />}
      float
      >
        <FormattedMessage {...messages.newTasks} />
      </Button>
  </div>
</div>

export default Main