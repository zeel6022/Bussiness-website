function Button({ text }) {
  return (
    <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300">
      {text}
    </button>
  )
}

export default Button