function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">

      <div className="text-center">

        <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6" />

        <h1 className="text-white text-md font-bold">
          Loading...
        </h1>

      </div>

    </div>
  )
}

export default Loader