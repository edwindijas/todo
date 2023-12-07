import { useRef } from 'react'
import { type SelectOptionItem } from './components/Option'
import OptionsList from './components/OptionList'
import Button from '../Button'
import ExpandCircleDownIcon from '../Icon/ExpandCircleDown'
import useExpandable from '@/hooks/useExpandable'


const SelectInput = ({
  label,
  options = []
}: SelectProps): JSX.Element => {
  const wrapper = useRef<HTMLDivElement | null>(null)
  const [active, toggleDropDown] = useExpandable({wrapper})

  return <div role='select' ref={wrapper} >
    <Button
      dataTestId='btn-toggle-select'
      intent='secondary'
      onClick={toggleDropDown} endIcon={<ExpandCircleDownIcon />}><p>{label}</p></Button>
    { 
      active && 
      <OptionsList options={options} />
    }
  </div>
}

interface SelectProps  {
  defaultValue?: string
  label?: string,
  options?: SelectOptionItem[]
}

export default SelectInput