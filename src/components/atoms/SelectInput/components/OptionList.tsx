import { useState } from 'react'
import SelectOption, { type SelectOptionItem } from './Option'

const OptionsList = (
  {
    options
  }: OptionListProps
): JSX.Element => {
  const [selected, setSelected] = useState<SelectOptionItem>('')
  
  return  <ul >
  {
    options.map((option) => <li role='select-option' key={typeof option === 'string' ? option : option.id} >
      <SelectOption onClick={setSelected} selected={selected} item={option} />
    </li>)
  }
</ul>
}

interface OptionListProps {
  options: SelectOptionItem[]
}

export default OptionsList