import { type StoryObj, type Meta } from '@storybook/react'
import Component from '..'

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Components/Atoms/Buttons',
  argTypes: {
    children: {
      type: 'string',
      group: 'FunctionalConfigurations'
    },
    isLink: {
      type: 'boolean',
      table: 'FunctionalConfigurations'
    },
    isNavLink: {
      type: 'boolean',
      table: 'FunctionalConfigurations'
    },
    to: {
      type: 'string',
      table: 'FunctionalConfigurations'
    },
    onClick: {
      type: 'function',
      table: 'FunctionalConfigurations'
    }
  }
}

type Story = StoryObj<typeof Component>

export const Primary: Story = {
  args: {
    children: 'My Button',
    isLink: false,
    isNavLink: false,
    to: '#',
    onClick: () => {
      global.console.log('button Clicked')
    }
  }
}

export default meta