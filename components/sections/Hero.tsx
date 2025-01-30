'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Hero = () => {
  const fullText = ['Syntax Unesa', 'Community']
  const [displayedText, setDisplayedText] = useState(['', ''])
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
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
  }, [subIndex, index, isDeleting])

  return (
    <section className='relative h-full w-full bg-black/40'>
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
            className='flex items-center gap-x-1 rounded-full border border-zinc-400 bg-white/25 px-5 py-1 text-sm text-white backdrop-blur-sm'
          >
            <span>Part of UNESA Informatics Engineering.</span>
            <ExternalLink size={14} />
          </Link>
          <h1 className='text-center text-5xl text-white md:text-7xl'>
            {displayedText[0]} <br /> {displayedText[1]}
            <span
              className={`animate-blink ml-1 inline-block h-12 w-1 bg-white ${showCursor ? '' : 'hidden'}`}
            ></span>
          </h1>
          <h4 className='w-full px-3 text-center text-base text-white md:w-[60%] md:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h4>
          <Button
            size={'lg'}
            className='bg-blue-600 shadow-sm shadow-blue-500/40 transition-colors duration-300 hover:bg-blue-700'
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
