import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Book from "./assets/Book.jpg"
import Home from './pages/Home.jsx'
import Store from './pages/Store.jsx'
import Book from './pages/Book.jsx'
import Nav from './componants/navbar.jsx'
import Footer from './componants/footer.jsx'

// import './App.css'

function App() {  
  return (
    <>
      <Routes>
        <Route path='/'       element={<Home />}></Route>
        <Route path='/Store'  element={<Store />}></Route>
        <Route path='/Book'   element={<Book />}></Route>
      </Routes>
    </>
  )
}

export default App
