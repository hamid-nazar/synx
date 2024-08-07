import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Hint } from '@/components/Hint';

interface OrgItemProps {
    id: string;
    name:string;
    imageUrl:string;
}

export function OrgItem({id, name, imageUrl}:OrgItemProps) {

    const {organization} = useOrganization();
    const {setActive} = useOrganizationList();

    const isActive = organization?.id === id;

    function onClick() {
        if(!setActive){
          return;
        }
        setActive({ organization: id })
    }

  return (
    <div className='aspect-square relative'>
        <Hint 
        label={name}
        side='right'
        align='start'
        sideOffset={18}>
          <Image
          fill
          src={imageUrl}
          alt={name}
          onClick={onClick}
          className={cn('rounded-md cursor-pointer opacity-75 hover:ring-opacity-100',
              isActive && 'opacity-100')}
          />
        </Hint>
    </div>
  )
}
