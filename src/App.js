import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Connect from './pages/connect/Connect'
import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/connect' element={<Connect />}/>
      </Routes>
    </>
  );
}

export default App;
