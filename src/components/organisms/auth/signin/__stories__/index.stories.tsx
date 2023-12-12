import { type Meta, type StoryObj } from '@storybook/react'
import Component from '..'


const WrappedComponent = (): JSX.Element => <div className='flex w-full h-full items-center justify-center'>
  <div className='border max-w-md w-9/12 p-10'>
    <Component />
  </div>
</div>
const meta: Meta = {
  component: WrappedComponent,
  title: 'Components/Organisms/Auth/Signin'
}

type Story = StoryObj<typeof meta>

export const Signin: Story = {
  args: {
    
  }
}

export default meta