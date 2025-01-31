'use client'

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
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

type NavbarProps = {
  isInViewRef?: boolean
}

const Navbar = ({ isInViewRef }: NavbarProps) => {
  const { isAuthenticated, getUser } = useKindeBrowserClient()
  const user = getUser()

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

  if (isAuthenticated) {
    initial = user?.given_name?.match(/[A-Z]/g)?.join('') ?? 'U'
    truncatedUserEmail = user?.email
      ? user.email.slice(0, 13) + '...'
      : 'unknown@example.com'
  }

  const textColor = (isInViewRef ?? false) ? 'text-white' : 'text-slate-900'

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between ${isInViewRef ? 'bg-transparent' : 'border-b border-slate-300 bg-white/15 shadow-sm backdrop-blur-sm'}`}
    >
      <div className='container mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link
          href={'/'}
          className={buttonVariants({
            variant: 'link',
            className: `text-base ${textColor}`
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
                className: `text-base ${textColor}`
              })}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className='h-8 w-8 cursor-pointer'>
                  <Image
                    src={user?.picture ?? 'https://i.pravatar.cc/40'}
                    alt={user?.given_name ?? 'User'}
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
                      src={user?.picture ?? '/default-avatar.png'}
                      alt={user?.given_name ?? 'User'}
                      width={40}
                      height={40}
                    />
                    <AvatarFallback>{initial}</AvatarFallback>
                  </Avatar>
                  <div className='block p-4'>
                    <h3 className='font-medium'>
                      {user?.given_name ?? 'User'}
                    </h3>
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
