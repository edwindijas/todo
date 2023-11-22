import Component  from '..';
import render from '@/utils/test-utils/customRender';

const dummyMenu = [
  'one',
  'two',
  'three'
]

describe ('Menu', () => {
  it ('matches snapnshot', () => {
    const {container} = render(<Component items={dummyMenu} />)
    expect(container).toMatchSnapshot()
  })
})