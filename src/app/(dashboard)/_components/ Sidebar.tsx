import React from 'react'
import { NewButton } from './NewButton'
import { OrgList } from './OrgList'

export  function  Sidebar() {
  return (
    <aside className='h-full w-[60px] fixed z-[1] left-0 flex flex-col p-3 gap-y-4 bg-blue-950 text-white'> 
        <OrgList/>
        <NewButton/>
    </aside>
  )
}
