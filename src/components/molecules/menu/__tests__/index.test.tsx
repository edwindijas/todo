import Menu  from '..';
import render from '@/utils/test-utils/customRender';
import { type MenuItemProps } from '../components/MenuItem';

const dummyMenu: Array<MenuItemProps | string> = [
  'one',
  'two',
  'three',
  {
    label: 'Hello',
    to: 'Bingo',
    startIcon: <p>Start</p>,
    endIcon: <p>Start</p>
  }
]

describe ('Menu', () => {
  it ('matches snapnshot', () => {
    const {container} = render(<>
      <Menu items={dummyMenu} />
      <Menu items={dummyMenu} isNavLink />
    </>)
    expect(container).toMatchSnapshot()
  })
})