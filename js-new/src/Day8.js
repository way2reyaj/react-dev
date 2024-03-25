
import React from 'react'

import HomePage from './pages/HomePage'
import Header from './components/Header'
import { person } from './dummy/recipe'

const App = () => {

  console.log(person);
  return (
    <div>

      <Header />

      <HomePage />
    </div>
  )
}

export default App
