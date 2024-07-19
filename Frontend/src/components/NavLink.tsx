import { Button } from '@/components/ui/button.tsx'
import { Link, LinkProps } from 'react-router-dom'

interface INavLink extends LinkProps {
  children: string
}

export function NavLink({ children, to }: INavLink) {
  return (
    <Link to={to}>
      <Button variant={'ghost'} className={'text-base'}>
        {children}
      </Button>
    </Link>
  )
}
