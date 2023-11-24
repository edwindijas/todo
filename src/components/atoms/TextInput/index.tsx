import { type VariantProps, cva } from 'class-variance-authority'
import {useCallback, useState, useRef } from 'react'

const TextInput = ({
  label,
  startIcon,
  endIcon,
  onChange,
  onFocus,
  placeholder,
  ...variantProps
}: InputProps): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const changeValue = useCallback(({target: {value: inputValue}}: React.ChangeEvent<HTMLInputElement>): void => {
    onChange !== undefined && onChange(inputValue)
    setValue(inputValue)
  }, [])

  const setFocus = useCallback((): void => {
    onFocus !== undefined && onFocus()
  }, [])

  return <label onClick={setFocus} className={TextInputVariants(variantProps)}>
    <span >{label}</span>
    {
      startIcon !== undefined && startIcon
    }
    <input
      className={InputElementVariants(variantProps)}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChange={changeValue}
    />
    {endIcon !== undefined && endIcon}
  </label>
}


const TextInputVariants = cva('flex ', {
  variants: {
    intent: {
      primary: 'border border-blue-medium'
    },
    border: {
      none: '',
      default: ''
    },
    size: {
      sm: '',
      md: 'h-12',
      lg: ''
    }
  },
  defaultVariants: {
    size: 'md',
    intent: 'primary',
    border: 'default'
  }
})

const InputElementVariants = cva('block outline-none bg-none', {
  variants: {
    padding: {
      sm: 'px-2',
      md: 'px-4',
      lg: 'px-6'
    },
    size: {
      sm: '',
      md: 'h-12',
      lg: ''
    }
  },
  defaultVariants: {
    padding: 'md',
    size: 'md'
  }
})


type TextInputProps = VariantProps<typeof TextInputVariants>
type InputElementProps = VariantProps<typeof InputElementVariants>

export interface InputProps extends TextInputProps, InputElementProps {
  label: string
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
  placeholder?: string
  onChange?: (value: string) => void,
  onFocus?: () => void
}


export default TextInput