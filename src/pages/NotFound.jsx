import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-cyan-400 mb-6">
          404
        </h1>

        <p className="text-white/70 text-xl mb-10">
          Page not found
        </p>

        <Link
          to="/"
          className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold"
        >
          Go Home
        </Link>

      </div>

    </div>
  )
}

export default NotFound