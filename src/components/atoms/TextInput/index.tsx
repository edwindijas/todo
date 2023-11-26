import { type VariantProps, cva } from 'class-variance-authority'
import {useCallback, useState, useRef } from 'react'

const TextInput = ({
  label,
  startIcon,
  endIcon,
  onChange,
  onFocus,
  className,
  placeholder,
  ...variantProps
}: InputProps): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const changeValue = useCallback(({target: {value: inputValue}}: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(inputValue)
    setValue(inputValue)
  }, [])

  const setFocus = useCallback((): void => {
    onFocus?.()
  }, [])

  return <label onClick={setFocus}
    className={ `${className}  ${TextInputVariants(variantProps)}`}
  >
    { 
      startIcon !== undefined && 
      <div className='w-7 shrink-0' >{startIcon}</div>
    }
    <div className='relative' >
      <span className={labelVariants({...variantProps, activeOpacity: Boolean(value)})} >{label}</span>
      <input
        className={InputElementVariants(variantProps)}
        placeholder={placeholder}
        value={value}
        ref={inputRef}
        onChange={changeValue}
      />
    </div>
    
    { 
      endIcon !== undefined &&
      <div className='w-7 shrink-0' >{endIcon}</div>
    }
  </label>
}


const TextInputVariants = cva('flex relative cursor-text', {
  variants: {
    intent: {
      primary: 'border-blue-medium',
      secondary: 'border-[#A6B7D0] bg-[#F4F8FC]  fill-blue-desaturated '
    },
    outline: {
      true: 'border',
      false: ''
    },
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full'
    },
    size: {
      sm: '',
      md: 'h-12',
      lg: ''
    },
    padding: {
      sm: 'px-2',
      md: 'px-4',
      lg: 'px-6'
    }
  },
  defaultVariants: {
    size: 'md',
    intent: 'primary',
    outline: true,
    rounded: 'lg',
    padding: 'sm'
  }
})

const InputElementVariants = cva('block outline-none w-full h-full bg-transparent', {
  variants: {
    size: {
      sm: '',
      md: 'h-12',
      lg: ''
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const labelVariants = cva('absolute flex top-0 bottom-0 left-0 items-center', {
  variants: {
    intent: {
      primary: 'text-blue-medium',
      secondary: 'text-blue-desaturated'
    },
    activeOpacity: {
      true: 'opacity-0',
      false: 'opacity-100'
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})


type TextInputProps = VariantProps<typeof TextInputVariants>
type InputElementProps = VariantProps<typeof InputElementVariants>
type LabelVariantsProps = VariantProps<typeof labelVariants>

export interface InputProps extends TextInputProps, InputElementProps, LabelVariantsProps {
  label: string
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
  placeholder?: string
  className?: string
  onChange?: (value: string) => void,
  onFocus?: () => void
}


export default TextInput