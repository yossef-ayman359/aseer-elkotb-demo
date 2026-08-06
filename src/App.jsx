import { useState } from 'react'
// import Book from "./assets/Book.jpg"
import Home from './pages/Home.jsx'
import Store from './pages/Store.jsx'
import Book from './pages/Book.jsx'
import Nav from './componants/navbar.jsx'

// import './App.css'

function App() {  

  console.log(window.innerWidth);
  console.log(window.innerHeight);
  

  return (
    <>
      <Book></Book>
    </>
  )
}

export default App
