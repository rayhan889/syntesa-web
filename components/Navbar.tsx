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

  let initial
  let truncatedUserEmail

  if (await isAuthenticated()) {
    initial = user.given_name?.match(/[A-Z]/g)?.join('')
    truncatedUserEmail = user.email?.slice(0, 13) + '...'
  }

  return (
    <div className='fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-zinc-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/75'>
      <div className='container mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link href={'/'} className={buttonVariants({ variant: 'link' })}>
          🖥️Syntesa.
        </Link>

        <div className='hidden gap-4 md:flex'>
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
                    <span className='text-muted-foreground text-sm'>
                      {truncatedUserEmail}
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <LogoutLink
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'flex w-full'
                  })}
                  style={{ justifyContent: 'flex-start' }}
                >
                  Logout
                </LogoutLink>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginLink className={buttonVariants({ variant: 'ghost' })}>
              Sign in
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
