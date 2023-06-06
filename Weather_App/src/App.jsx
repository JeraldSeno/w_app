import { useState } from 'react'
import Search from './components/Search'

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <>
      <div className='max-w-full m-2 mx-2-auto'>
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      
    </>
  )
}

export default App
