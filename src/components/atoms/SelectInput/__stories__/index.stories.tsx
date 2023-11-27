import type { Meta, StoryObj } from '@storybook/react'
import Component from '..'

const meta: Meta = {
  component: Component,
  title: 'Components/Atoms/SelectInput'
}

type Story = StoryObj<typeof meta>

export const SelectInput: Story = {
  args: {
    label: 'Select Input',
    options: [
      'item 1',
      'item 2',
      'item 3',
      'item 4'
    ]
  }
}

export default meta