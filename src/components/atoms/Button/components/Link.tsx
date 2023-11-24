import {useCallback} from 'react'
import { cva } from 'class-variance-authority'
import { Link, NavLink } from 'react-router-dom'

interface CustomLinkProps {
  isNavLink: boolean,
  children: React.ReactElement | string ,
  className: string,
  to: string,
  onClick?: () => void
}

const customLinkVariants = cva('', {
  variants: {
    isActive: {
      true: ['bg-blue-light text-blue-medium fill-blue-medium relative',
      'before:absolute before:top-2 before:bottom-2 before:left-0 before:bg-blue-medium before:w-1 before:block before:rounded-sm'
      ],
      false: 'text-blue-desaturated fill-blue-desaturated'
    }
  },
  defaultVariants: {
    isActive: false
  }
})

const CustomLink = ({
  children,
  className,
  isNavLink,
  to,
  onClick
}: CustomLinkProps): JSX.Element => {

  const getClassName = useCallback(({isActive}: {isActive: boolean}): string => {
    const cvaClass = customLinkVariants({isActive})
    return `${className} ${cvaClass}`
  }, [className])

  if (isNavLink) {
    return<NavLink to={to} className={getClassName} >{children}</NavLink>
  }

  return <Link to={to} className={className} onClick={onClick} >{children}</Link>
}




export default CustomLink 