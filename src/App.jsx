import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBord from './components/NewsBord'

const App = () => {
  const [category,setCategory]=useState("general")
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBord category={category}  />
    </>
  )
}

export default App
