import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Card from './Components/Card'
import MovieList from './Components/MovieList'
import Movie from './Components/Movie'

function App() {
  return (
    <div className='bg-black text-white w-full min-h-screen'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/movie/:id' element={<Movie/>}></Route>
        <Route path='/movies/:type' element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>Error page</h1>}></Route>

        
      </Routes>
    </div>
  )
}

export default App