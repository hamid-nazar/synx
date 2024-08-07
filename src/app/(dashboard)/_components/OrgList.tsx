"use client"
import React from 'react'

import { useOrganizationList } from '@clerk/nextjs'
import { OrgItem } from './OrgItem';

export function OrgList() {

    const {userMemberships} = useOrganizationList({
        userMemberships: {
            infinite:true
        },
    });

    if(!userMemberships.data?.length){
        return null;
    }


  return (
    <ul className='space-y-4'>
        {userMemberships.data?.map((member) => (
            <li key={member.organization.id}>
               <OrgItem 
               key={member.organization.id}
               id={member.organization.id} 
               name={member.organization.name}
               imageUrl={member.organization.imageUrl}/>
            </li>
        ))}
    </ul>
  )
}
