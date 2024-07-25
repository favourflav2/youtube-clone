'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

const ThemesProvider = ({children}: {children: React.ReactNode}) => {

    // defaultTheme === the default dark/light mode based on user device
  return (
   <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    {children}
   </ThemeProvider>
  )
}

export default ThemesProvider