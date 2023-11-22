import { cva, type VariantProps } from 'class-variance-authority'
import Button from '@/components/atoms/Button'

const getTypeClassName = cva('', {
  variants: {
    orientation: {
      vertical: 'flex flex-col',
      horizontal: 'flex'
    },
    gap: {
      none: '',
      sm: 'gap-2',
      lg: 'gap-4'
    }
  },

  compoundVariants: [

  ],
  defaultVariants: {
    orientation: 'vertical',
    gap: 'sm'
  }
})

export type ButtonVariantProps = VariantProps<typeof getTypeClassName>;

export type MenuItem = string | {
  startIcon?: React.ReactElement,
  endIcon?: React.ReactElement,
  label: string,
  to: string
}

interface MenuProps extends ButtonVariantProps {
  items: MenuItem[],
  isNavLink?: boolean
}

const Menu = ({
  items,
  isNavLink = false,
  orientation
}: MenuProps): JSX.Element => <ul
  className={getTypeClassName({orientation})} >
    {
      items.map((item: MenuItem) => {
          const label = typeof item === 'string' ? item : item.label
          const to = typeof item === 'string' ? item : item.to
          return <li
            key={label} >
              <Button
                isNavLink={isNavLink}
                isLink to={to}
              >{ label }</Button>
          </li>
        }
      )
    }
  </ul> 



export default Menu