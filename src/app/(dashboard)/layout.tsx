import React from 'react'
import { Sidebar } from './_components/ Sidebar'
import { OrgSidebar } from './_components/OrgSidebar'
import { Navbar } from './_components/Navbar'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='h-full'>
        <Sidebar/>
        <div className='pl-[60px] h-full'>
          <div className='flex gap-x-3 h-full'>
            <OrgSidebar/>
            <div className='h-full flex-1'>
              <Navbar/>
              {children}
            </div>
          </div>
        </div>
    </main>
  )
}
