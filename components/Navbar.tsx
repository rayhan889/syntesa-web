import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Link from 'next/link'
import Image from 'next/image'

import { buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = await getUser()

  const navLinks = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Member',
      href: '/member'
    },
    {
      name: 'Projects',
      href: '/projects'
    }
  ]

  let initial
  let truncatedUserEmail

  if (await isAuthenticated()) {
    initial = user.given_name?.match(/[A-Z]/g)?.join('')
    truncatedUserEmail = user.email?.slice(0, 13) + '...'
  }

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between'>
      <div className='container mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link
          href={'/'}
          className={buttonVariants({
            variant: 'link',
            className: 'text-base text-white'
          })}
        >
          🖥️Syntesa.
        </Link>

        <div className='hidden gap-4 md:flex'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={buttonVariants({
                variant: 'link',
                className: 'text-base text-white'
              })}
            >
              {link.name}
            </Link>
          ))}
          {(await isAuthenticated()) ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className='h-8 w-8 cursor-pointer'>
                  <Image
                    src={user.picture!}
                    alt={user.given_name!}
                    width={40}
                    height={40}
                  />
                  <AvatarFallback>{initial}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className='flex items-center px-3'>
                  <Avatar>
                    <Image
                      src={user.picture!}
                      alt={user.given_name!}
                      width={40}
                      height={40}
                    />
                    <AvatarFallback>{initial}</AvatarFallback>
                  </Avatar>
                  <div className='block p-4'>
                    <h3 className='font-medium'>{user.given_name}</h3>
                    <span className='text-sm text-muted-foreground'>
                      {truncatedUserEmail}
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <LogoutLink
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'flex w-full text-base'
                  })}
                  style={{ justifyContent: 'flex-start' }}
                >
                  Logout
                </LogoutLink>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginLink
              className={buttonVariants({
                variant: 'ghost',
                className: 'text-base text-white'
              })}
            >
              Sign In
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
