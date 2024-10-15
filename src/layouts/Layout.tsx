import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponent } from './components/HeaderComponent'

export const Layout = () => {

  return (
    <>
        <HeaderComponent />
            <main className="container mx-auto py-16">
                <Outlet />
            </main>
    </>
  )
  
}
