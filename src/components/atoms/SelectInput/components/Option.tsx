import { cva } from 'class-variance-authority'
import { useMemo } from 'react'

const SelectOption = ({item, selected}: SelectOptionProps): JSX.Element => {

  const isSelected = useMemo<boolean>((): boolean => {

  if (typeof item === 'string' && typeof selected === 'string') {
    return item === selected
  }
  
    return false
  }, [selected])

  const label = typeof item === 'string' ? item : item.value
  return <div className={selectOptionVariants({selected: isSelected})} >
    { label }
  </div>
}


const selectOptionVariants = cva('', {
  variants: {
    selected: {
      true: 'bg-blue-medium text-white'
    }
  }
})


interface SelectOptionProps {
  item: SelectOptionItem
  selected: SelectOptionItem
  onClick?: (v: SelectOptionItem) => void
}

export type SelectOptionItem = string | {
  value: string
  id: string
}

export default SelectOption