import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Content */}
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative max-w-7xl mx-auto px-6 w-full"
>

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            Modern Digital Agency
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Build Premium Digital Experiences
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            We create modern websites, scalable products,
            and immersive user experiences for brands worldwide.
          </p>

          <div className="flex gap-5 flex-wrap">

            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Start Project
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Explore More
            </button>
            
            

          </div>
          

        </div>
        <div className="mt-20 flex justify-center">

  <div className="w-7 h-12 border border-white/30 rounded-full flex justify-center">

    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />

  </div>

</div>

      </motion.div>

    </section>
  )
}

export default Hero