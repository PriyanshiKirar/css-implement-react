import React from 'react'
import Header from './components/Header'

const App = () => {
  const css={
    fontSize:"400",
    color:"blue"

  }
  return (
    <>
    <h1  style={{fontSize:"20px"}}>  hellow</h1>
    <h2  style={css}>  Hllow</h2>
<Header/>
    </>
  )
}

export default App;