import { lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const Nav = lazy(() => import('./components/Nav/Nav'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const Project = lazy(() => import('./components/Projects/Project'))
const Footer = lazy(() => import('./components/Footer/Footer'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const About = lazy(() => import('./components/About/About'))


function App() {


  return (<>

    <BrowserRouter>
      <div className="app">
        <Nav />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  </>
  )
}

export default App
