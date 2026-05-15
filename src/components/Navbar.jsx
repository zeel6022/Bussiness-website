import { useState } from "react"
import { Link, NavLink  } from "react-router-dom"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2"
        >
         <img src="/Zeel_logo.png" alt="Zeel" className="w-10 h-10" />
         Zeel
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-10">

          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "text-white/70"
  }
>
  Home
</NavLink>
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "text-white/70"
  }
>
  About
</NavLink>
<NavLink
  to="/services"
  className={({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "text-white/70"
  }
>
  Services
</NavLink>
<NavLink
  to="/projects"
  className={({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "text-white/70"
  }
>
  Projects
</NavLink>
<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "text-white/70"
  }
>
  Contact
</NavLink>




        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-black border-t border-white/10 text-white/70">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar