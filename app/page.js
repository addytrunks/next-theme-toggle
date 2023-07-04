'use client'

import { useTheme } from "next-themes"

export default function Home() {

  const {setTheme,theme,systemTheme} = useTheme()

  const handleToggle = () => {
    if(theme == 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen">
      <p className="dark:text-white text-black font-serif">Current Theme: {theme.toUpperCase()}</p>
      <button onClick={handleToggle} className="mt-5 p-5 dark:bg-white dark:text-black bg-black text-white rounded-md">
        Change Theme
      </button>
    </div>
  )
}
