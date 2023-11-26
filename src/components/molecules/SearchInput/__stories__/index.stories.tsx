import { type Meta, type StoryObj } from '@storybook/react'
import Component from '..'

const meta: Meta = {
  component: Component,
  title: 'Components/Molecules/SearchInput',
  argTypes: {
    label: {
      type: 'string'
    }
  }
}

type Story = StoryObj<typeof meta>

export const SearchInput: Story = {
  args: {
    label: 'Search'
  }
}


export default meta