import React from 'react'
import { useLocation } from 'react-router'
import { AppRoutes } from './routes'

// Styles
import { GlobalStyles } from './helpers/styles/GlobalStyles'
import { getBgColor } from './helpers/styles/getBgColor'

export default function App() {
  const pathname = useLocation().pathname

  return (
    <>
      <GlobalStyles bgColor={getBgColor(pathname)} />
      <AppRoutes />
      <footer></footer>
    </>
  )
}
