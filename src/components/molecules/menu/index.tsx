import { cva, type VariantProps } from 'class-variance-authority'
import { isString } from 'lodash';
import MenuItem, {type MenuItemProps} from './components/MenuItem';

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
    gap: 'none'
  }
})

export type ButtonVariantProps = VariantProps<typeof getTypeClassName>;


interface MenuProps extends ButtonVariantProps {
  items: Array<MenuItemProps | string>,
  isNavLink?: boolean
}

const Menu = ({
  items,
  isNavLink = false,
  orientation
}: MenuProps): JSX.Element => <ul
  className={getTypeClassName({orientation})} >
    {
      items.map((item: MenuItemProps | string) => {
          const menuProps: MenuItemProps = typeof item === 'string' ? {
            label: item,
            to: item
          } : item

          return <li
            key={isString(menuProps.label) ? menuProps.label : menuProps.label.id} >
              <MenuItem isNavLink={isNavLink} {...menuProps} />
          </li>
        }
      )
    }
  </ul> 

export default Menu