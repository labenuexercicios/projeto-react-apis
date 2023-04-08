import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

function App() {


  return (
    <>
      <GlobalStyle />
      
    </>
  )
}

export default App
