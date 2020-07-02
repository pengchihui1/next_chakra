import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'

// Use at the root of your app

export default function (props) {
  return (
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  )
}
