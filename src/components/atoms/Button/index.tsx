import { cva, type VariantProps } from 'class-variance-authority'
import CusButton from './components/Button'
import CustomLink from './components/Link'

const Button = ({
  className = '',
  to = '',
  isLink = false,
  isNavLink = false,
  children,
  startIcon,
  endIcon,
  dataTestId = 'button-btn',
  onClick,
  ...variants
}: ButtonProps): JSX.Element => {
  const Component = isLink || isNavLink ? CustomLink : CusButton

  return <Component to={to}
    isNavLink={isNavLink}
    onClick={onClick}
    dataTestId={dataTestId}
    className={`${className} ${buttonVariants(variants)}`} >
      <>
        {startIcon !== undefined &&
        <div className={iconVariants({left: true, ...variants})}>
          {startIcon}
        </div>
        }
        <span className='w-full' >{children}</span>
        { endIcon !== undefined &&
          <div>
            {endIcon}
          </div>
        }
      </>
  </Component>
}

const buttonVariants = cva(['flex w-full capitalize items-center gap-2 relative'], {
  variants: {
    intent: {
      none: '',
      primary: 'text-center text-white bg-blue-medium',
      secondary: 'text-center border border-blue-medium bg-blue-light text-blue-medium fill-blue-medium'
    },
    padding: {
      sm: 'px-1',
      md: 'px-2',
      lg: 'px-4'
    },
    size: {
      lg: '',
      md: 'h-14',
      sm: ''
    },
    isNavLink: {
      true: '',
      false: ''
    },
    rounded: {
      'none': '',
      'sm': 'rounded-sm',
      'md': 'rounded-md',
      'lg': 'rounded-lg',
      'full': 'rounded-full'
    }
  },
  defaultVariants: {
    intent: 'none',
    size: 'md',
    padding: 'md',
    rounded: 'md'
  }
})

const iconVariants = cva('shrink-0', {
  variants: {
    left: {
      true: '',
      false: ''
    },
    size: {
      lg: '',
      md: 'h-6 w-6',
      sm: ''
    },
    float: {
      true: 'absolute top-0 bottom-0 my-auto'
    }
  },
  compoundVariants: [
    {
      float: true,
      left: true,
      className: 'left-4',
    }
  ],
  defaultVariants: {
    size: 'md'
  }
})

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type IconVariantProps = VariantProps<typeof iconVariants>

interface ButtonProps extends ButtonVariantProps, IconVariantProps {
  className?: string,
  isLink?: boolean
  isNavLink?: boolean,
  to?: string
  children: React.ReactElement | string
  onClick?: () => void,
  startIcon?: React.ReactElement,
  endIcon?: React.ReactElement,
  dataTestId?: string
}

export default Button
