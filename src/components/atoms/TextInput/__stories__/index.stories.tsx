import { type Meta, type StoryObj } from '@storybook/react'
import Component from '..'

const meta: Meta = {
  component: Component,
  title: 'Components/Atoms/TextInput',
  argTypes: {
    label: {
      type: 'string'
    }
  }
}

type Story = StoryObj<typeof meta>

export const TextInput: Story = {
  args: {
    label: 'TextInput'
  }
} 

export default meta