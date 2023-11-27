import render from '@/utils/test-utils/customRender'
import Component from '..'

describe('Tasks Create', () => {
  it ('matches snapshot', () => {
    const {container} = render(<Component />)
    expect(container).toMatchSnapshot()
  })
})