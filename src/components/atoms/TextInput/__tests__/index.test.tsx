import { fireEvent, render } from '@testing-library/react'
import TextInput from '..'



describe('TextInput', () => {
  it ('maatches snapshot', () => {
    const {container} = render(<>
      <TextInput label='Hello' placeholder='Hello' />
      <TextInput label='lab' endIcon={<span>A</span>} startIcon={<span>A</span>} placeholder='Hello' />
    </>)
    expect(container).toMatchSnapshot()
  })

  it ('Changes the value according', () => {
    const onChange = jest.fn((val: string): void => { void(val) })
    const {getByPlaceholderText} = render(<TextInput placeholder='test-placeholder' onChange={onChange} label='bigger' />)
    const node = getByPlaceholderText('test-placeholder') as HTMLInputElement
    
    fireEvent.change(node, {target: {value: 'New Value'}})
    expect(onChange).toHaveBeenCalledWith('New Value')
  })

  it ('Calles onFocus on Click', () => {
    const onFocus = jest.fn((): void => {})
    const {getByPlaceholderText} = render(<TextInput placeholder='test-placeholder' onFocus={onFocus} label='bigger' />)
    const node = getByPlaceholderText('test-placeholder') as HTMLInputElement
    fireEvent.click(node)
    expect(onFocus).toHaveBeenCalled()
  })

  it ('Renders start and end Icon', () => {
    const  {getByTestId} = render(<TextInput
      label='Test Case' 
      startIcon={<span data-testid='start-icon' >StartIcon</span>}
      endIcon={<span data-testid='end-icon' >StartIcon</span>}  
    />)

    expect(getByTestId('start-icon')).toBeInTheDocument()
    expect(getByTestId('end-icon')).toBeInTheDocument()
  })
})