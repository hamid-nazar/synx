import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { OrganizationProfile, RedirectToCreateOrganization, RedirectToOrganizationProfile } from '@clerk/nextjs';



export function InviteButton() {

  return (
    <Dialog>
        <DialogTrigger>
            <Button
            variant={"outline"}
            >
                <Plus className='mr-2 h-4 w-4'/>
                Invite members
            </Button>
        </DialogTrigger>
        <DialogContent className='p-0 border-none bg-transparent max-w-[880px]'>
            <OrganizationProfile/>
        </DialogContent>
    </Dialog>
  )
}
