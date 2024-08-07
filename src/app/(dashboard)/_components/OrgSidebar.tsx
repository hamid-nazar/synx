"use client"
import React from 'react'

import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Star } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export  function OrgSidebar() {
  const searchParams = useSearchParams();

  const favorites = searchParams.get("favorites");

  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5'>
        <Link href='/'>
          <div className='flex items-center gap-x-2'>
            <Image
              src="/logo.svg"
              alt="Sunx Logo"
              width={60}
              height={60}
              className=""
            />
            <span className={cn("font-semibold text-2xl",font)}>
              Synx
            </span>
          </div>
        </Link>
      <OrganizationSwitcher 
      hidePersonal
      appearance={{
        elements: {
          rootBox:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
          },
          organizationSwitcherTrigger: {
            padding: "6px",
            width:"100%",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            justifyContent:"space-between",
            backgroundColor:"white"
          }
        }
      }}/>

      <div className='space-y-1 w-full'>
        <Button
        asChild
        size={"lg"}
        variant={favorites?"ghost":"secondary"}
        className='w-full font-normal justify-start px-2'>
          <Link href='/'>
            <LayoutDashboard className='h-4 w-4 mr-2'/>
            Team boards
          </Link>
        </Button>
        
        <Button
        asChild
        size={"lg"}
        variant={favorites?"secondary":"ghost"}
        className='w-full font-normal justify-start px-2'>
          <Link href={{pathname: "/", query: {favorites: true}}}>
            <Star className='h-4 w-4 mr-2'/>
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  )
}
