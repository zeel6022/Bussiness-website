import { useState } from "react"
import SEO from "../components/SEO"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Message submitted!")
  }

  return (
    <>
    
     <SEO
    title="ZEEL | Contact Us"
    description="Get in touch with our team to discuss your project and how we can help you achieve your digital goals."
    keywords="contact, web development, react developer, frontend developer"
  />
    
    <div className="pt-40 pb-24 bg-black text-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            Contact
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Let’s Work Together
          </h1>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none"
          />

          <button className="px-10 py-5 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            Send Message
          </button>

        </form>

      </div>

    </div>
    </>
  )
}

export default Contact