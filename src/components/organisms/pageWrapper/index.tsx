import Header from '@/components/organisms/header'

interface PageWrapperProps {
  children: React.ReactElement | string
}



const PageWrapper = ({
  children
}: PageWrapperProps): JSX.Element => <div className='h-full flex bg-bg' >
    <Header />
    <div className='w-full h-full'  >
      <div>
        {children}
      </div>
    </div>
  </div>

export default PageWrapper