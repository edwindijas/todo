import Signin from '..'
import render from '@/utils/test-utils/customRender'

describe('Signin Organisms', () => {
  it ('matches snapshot', () => {
    const {container} = render(<Signin />)
    expect(container).toMatchSnapshot()
  })
})