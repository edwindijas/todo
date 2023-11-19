import ProgressActivityIcon from '@/components/atoms/Icon/ProgressActivity'

const Fallback = (): JSX.Element => (
  <div className='w-full h-full flex items-center justify-center'>
    <ProgressActivityIcon className='w-14 h-14 animate-spin' />
  </div>
)
export default Fallback