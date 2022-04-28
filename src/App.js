import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Connect from './pages/connect/Connect'
import './App.scss';
import Home from './pages/home/Home'



function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/connect' element={<Connect />} />
        </Route>
         
      </Routes>
    </>
  );
}

export default App;
