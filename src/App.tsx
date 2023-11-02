import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Education from './Pages/Education';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
