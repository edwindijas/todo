import { type Meta, type StoryObj } from '@storybook/react'
import Component from '..'

const meta: Meta = {
  component: Component,
  title: 'Components/Molecules/Menu',
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  }
}

type Story = StoryObj<typeof Component>

export const Menu: Story = {
  args: {
    items: [
      'Todo',
      'Calendar',
      'Board'
    ],
    orientation: 'horizontal'
  }
}

export default meta