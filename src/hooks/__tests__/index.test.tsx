import { useRef } from 'react';
import { fireEvent, type RenderResult } from '@testing-library/react';
import useExpandable from '../useExpandable';
import render from '@/utils/test-utils/customRender';

const TestComponent = (): JSX.Element => {
  const wrapper = useRef<HTMLDivElement | null>(null)
  const [expanded, setExpandable] = useExpandable({wrapper})

  return <div>
    <div ref={wrapper}>
    <button data-testId='btn' onClick={setExpandable} >Expand</button>
    {
      expanded && <p data-testid='check-expanded' >Expanded</p>
    }
  </div>
  <button data-testid='btn-outside' >Outside</button>
    </div>
}


const renderComponent = (): RenderResult => render(<TestComponent />)


describe('Hook useExpandable', () => {
  it ('changes state on click', () => {
    const {queryByTestId, getByTestId} = renderComponent()
    expect(queryByTestId('check-expanded')).not.toBeInTheDocument()
    fireEvent.click(getByTestId('btn'))
    expect(queryByTestId('check-expanded')).toBeInTheDocument()
    fireEvent.click(getByTestId('btn'))
    expect(queryByTestId('check-expanded')).not.toBeInTheDocument()
    
  })

  it ('doesn\'t deactivate onInside click on outside click', () => {
    const {queryByTestId, getByTestId} = renderComponent()
    expect(queryByTestId('check-expanded')).not.toBeInTheDocument()
    fireEvent.click(getByTestId('btn'))
    expect(queryByTestId('check-expanded')).toBeInTheDocument()
    fireEvent.click(getByTestId('btn-outside'))
    expect(queryByTestId('check-expanded')).not.toBeInTheDocument()
  })
})
