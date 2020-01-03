import React from 'react'
import './app.css'
import Footer from './components/footer'
import AddTodo from './components/add-todo'
import List from './components/list'


function App() {
  return (
    <div className="app-wrapper">
      <AddTodo />
      <List />
      <Footer />
    </div>
  )
}

export default App
