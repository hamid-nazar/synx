'use client'
import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'
import { Hint } from '@/components/Hint'

export function NewButton() {
  return (
    <Dialog>
        <DialogTrigger>
            <Hint
             label='Create organization'
             side='right'
             align='start'
             sideOffset={18}>
                <div className='aspect-square'>
                    <button className='bg-white/25 h-full w-full rounded-md flex justify-center items-center opacity-60 hover:opacity-100 transition'>
                        <Plus className='text-white'/>
                    </button>
                </div>
            </Hint>
            
        </DialogTrigger>
        <DialogContent className='max-w-[480px] p-0 border-none bg-transparent'>
            <CreateOrganization/>
        </DialogContent>

    </Dialog>
  )
}
