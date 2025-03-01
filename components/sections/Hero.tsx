'use client'

import Image from 'next/image'
import { useState, useEffect, useMemo, forwardRef } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  const fullText = useMemo(() => ['Syntax Unesa', 'Community'], [])
  const [displayedText, setDisplayedText] = useState(['', ''])
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!isDeleting) {
      if (index < fullText.length) {
        if (subIndex < fullText[index].length) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => {
              const newText = [...prev]
              newText[index] = fullText[index].substring(0, subIndex + 1)
              return newText
            })
            setSubIndex(subIndex + 1)
          }, 100)
          return () => clearTimeout(timeout)
        } else if (index < fullText.length - 1) {
          setTimeout(() => {
            setIndex(index + 1)
            setSubIndex(0)
          }, 1000)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    } else {
      if (index >= 0) {
        if (subIndex > 0) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => {
              const newText = [...prev]
              newText[index] = fullText[index].substring(0, subIndex - 1)
              return newText
            })
            setSubIndex(subIndex - 1)
          }, 50)
          return () => clearTimeout(timeout)
        } else if (index > 0) {
          setTimeout(() => {
            setIndex(index - 1)
            setSubIndex(fullText[index - 1].length)
          }, 100)
        } else {
          setTimeout(() => {
            setIsDeleting(false)
            setIndex(0)
            setSubIndex(0)
            setDisplayedText(['', ''])
          }, 1000)
        }
      }
    }
  }, [subIndex, index, isDeleting, fullText])

  return (
    <section
      className='relative h-full w-full bg-black/40'
      id='hero-section'
      ref={ref}
    >
      <Image
        src='/assets/main_img.jpg'
        alt='Main Image'
        fill
        objectFit='cover'
        priority
        quality={100}
        className='absolute -z-50'
      />
      <div className='container mx-auto h-full max-w-7xl py-24'>
        <div className='flex h-full flex-col items-center justify-center space-y-4'>
          <Link
            href='https://www.unesa.ac.id/page/akademik/fakultas-teknik/s1-teknik-informatika'
            className='flex items-center gap-x-1 rounded-full border border-zinc-300 bg-white/25 px-5 py-1 text-sm text-white shadow-sm backdrop-blur-sm'
          >
            <span>Part of UNESA Informatics Engineering.</span>
            <ExternalLink size={14} />
          </Link>
          <h1 className='text-center text-5xl text-white md:text-7xl'>
            {displayedText[0]} <br /> {displayedText[1]}
            <span className='animate-blink ml-1 inline-block h-12 w-1 bg-white'></span>
          </h1>
          <h4 className='w-full px-3 text-center text-base text-white md:w-[60%] md:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </h4>
          <Button
            size={'lg'}
            className='w-[80%] border border-white/20 bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 shadow-md shadow-blue-950/15 transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-800 lg:w-[25%]'
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
