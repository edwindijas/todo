import ProgressActivityIcon from '@/components/atoms/Icon/ProgressActivity'

const Fallback = (): JSX.Element => (
  <div className='w-full h-full flex items-center justify-center'>
    <div className='w-10 h-10'>
      <ProgressActivityIcon className='animate-spin' />
    </div>
  </div>
)
export default Fallback