import {
  ArrowRight,
  ArrowLeft,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react'
import { membersStatic } from '@/static/members'
import Image from 'next/image'
import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'

const Member = () => {
  return (
    <section className='h-[75%] w-full lg:h-[65%]'>
      <div className='container mx-auto h-full max-w-7xl overflow-x-auto py-14'>
        <div className='flex h-full w-full flex-col justify-between space-y-8 md:space-y-12'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-y-4'>
              <h2 className='text-3xl text-slate-900 md:text-4xl'>
                Meet Our Buddies.
              </h2>
              <p className='text-sm text-muted-foreground md:text-base'>
                Exploring the Talented Members of our Community.
              </p>
            </div>
            <div className='hidden items-center gap-x-4 md:flex'>
              <Button variant={'outline'} size={'icon'}>
                <ArrowLeft />
              </Button>
              <Button variant={'outline'} size={'icon'}>
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className='relative h-full'>
            <div className='custom-scrollbar flex h-full w-full space-x-4 overflow-x-auto scroll-smooth'>
              {membersStatic.map(member => (
                <div
                  key={member.id}
                  className='flex h-[26rem] min-w-[300px] flex-col justify-between gap-y-8 md:min-w-[380px]'
                >
                  <div className='h-[75%] max-w-[380px]'>
                    <Image
                      src={`/assets/${member.picture}`}
                      alt={member.name}
                      width={1000}
                      height={1000}
                      className='h-full rounded-md object-cover'
                    />
                  </div>
                  <div className='flex h-[25%] items-start justify-between'>
                    <div className='gap-y-2'>
                      <h4 className='text-lg'>{member.name}</h4>
                      <span className='text-muted-foreground'>
                        {member.role}
                      </span>
                    </div>
                    <div className='flex items-center gap-x-1'>
                      <Link
                        href={member.socials.instagram}
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'icon'
                        })}
                        style={{ borderRadius: '9999px' }}
                      >
                        <Instagram className='text-slate-500' />
                      </Link>
                      <Link
                        href={member.socials.twitter}
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'icon'
                        })}
                        style={{ borderRadius: '9999px' }}
                      >
                        <Twitter className='text-slate-500' />
                      </Link>
                      <Link
                        href={member.socials.linkedin}
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'icon'
                        })}
                        style={{ borderRadius: '9999px' }}
                      >
                        <Linkedin className='text-slate-500' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-full items-center justify-between gap-x-4 md:hidden'>
            <Button variant={'outline'} size={'icon'}>
              <ArrowLeft />
            </Button>
            <Button variant={'outline'} size={'icon'}>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Member
