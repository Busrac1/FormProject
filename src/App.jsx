import { useState } from 'react'
import './assets/style.scss'
import AddPostControl from './pages/AddPost/AddPostControl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPostControl from './pages/ListPost/ListPostControl';
import Header from './components/Header';
 

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<ListPostControl/>}/>
  <Route path='/add-post' element={<AddPostControl/>}/>
</Routes>
</BrowserRouter>


  )
}

export default App
