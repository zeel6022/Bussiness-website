import { Routes, Route, useLocation  } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { useEffect, useState } from "react"
import Loader from "./components/Loader"



function App() {
  
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  const isNotFoundPage =
    !["/", "/about", "/services", "/projects", "/contact"].includes(
      location.pathname
    )
    // console.log(location.pathname)
    // console.log(isNotFoundPage)
useEffect(() => {

  setTimeout(() => {
    setLoading(false)
  }, 2000)

}, [])

if (loading) {
  return <Loader />
}

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      
            <div className="fixed top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="fixed bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />

      {!isNotFoundPage && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />

      </Routes>

     {!isNotFoundPage && <Footer />}

    </div>
  )
}

export default App