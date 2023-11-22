import { fireEvent } from '@testing-library/react'
import Button from '..'
import render from '@/utils/test-utils/customRender'

const onClick = jest.fn((): void => {})

describe ('button', () => {
  it ('matches snapshot', () => {
    const {container} = render(<>
      <Button isLink isNavLink className='someGEneric' >Button 1</Button>
      <Button isNavLink className='someGeneric' >Button 1</Button>
      <Button isLink >Button 3</Button>
      <Button >Button 1</Button>
      <Button className='someGEneric' >Button 1</Button>
    </>)

    expect(container).toMatchSnapshot()
  })

  it ('expects normal button', () => {
    const {queryByRole} = render(<Button >Button1</Button>)
    expect(queryByRole('button')).toBeInTheDocument()
    expect(queryByRole('link')).not.toBeInTheDocument()
  })

  it('correctly renders link', () => {
    const {queryByRole} = render(<Button isLink >Button</Button>)
    expect(queryByRole('link')).toBeInTheDocument()
    expect(queryByRole('button')).not.toBeInTheDocument()
  }) 

  it ('it calls onClick', () => {
    const {getByTestId} = render(<Button onClick={onClick} >Button 1</Button>)
    fireEvent.click(getByTestId('button-btn'))
    expect(onClick).toHaveBeenCalled()
  })
})