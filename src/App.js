import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Connect from './pages/connect/Connect'
import NavBar from './components/navbar/NavBar'
import './App.scss';
import Home from './pages/home/Home'



function App() {

  return (
    <>
      <NavBar />
      <>
        <Home />
        <Projects/>
        <About />
        <Connect />
      </>
    </>
  );
}

export default App;
