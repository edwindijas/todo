import { fireEvent } from '@testing-library/react'
import render from '@/utils/test-utils/customRender'
import SelectInput from '..'
import { type SelectOptionItem } from '../components/Option'

const menu: SelectOptionItem[] = [
  'Wowo',
  {
    value: 'Hey',
    id: 'people'
  }
]

describe('Select Input', () => {
  it('Matches snapshot', () => {
    const {container, getAllByTestId} = render(<>
      <SelectInput label="Hello World" options={menu} />
      <SelectInput label="Hello World" />
    </>)
    fireEvent.click(getAllByTestId('btn-toggle-select')[0])
    expect(container).toMatchSnapshot()
  })
})