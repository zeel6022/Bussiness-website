import Hero from "../components/Hero"
import { motion } from "framer-motion"
import SEO from "../components/SEO"


function Home() {

  const features = [
    {
      title: "Modern Architecture",
      desc: "Scalable frontend systems designed for performance and future growth.",
    },
    {
      title: "Premium UI Design",
      desc: "Immersive user interfaces focused on clarity and engagement.",
    },
    {
      title: "Fast Performance",
      desc: "Optimized experiences with fast loading and responsive interactions.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Research",
      desc: "Understanding goals, audience, and digital strategy.",
    },
    {
      step: "02",
      title: "Design",
      desc: "Creating modern and intuitive user experiences.",
    },
    {
      step: "03",
      title: "Development",
      desc: "Building scalable and responsive digital products.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "Deploying optimized products ready for growth.",
    },
  ]

  return (
    <div>
      <SEO
    title="ZEEL | Modern Digital Agency"
    description="ZEEL builds premium digital experiences, responsive websites, and scalable frontend solutions."
    keywords="web development, react developer, frontend developer, ui ux, modern websites"
  />

      <Hero />

      {/* Features */}
      <section className="py-28 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
              Why Choose Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Built For Modern Brands
            </h2>

            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We combine modern design systems, scalable frontend
              architecture, and immersive user experiences to create
              premium digital products.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature, index) => (
             <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  key={index}
                className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-3xl mb-8">
                  ✦
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {feature.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* About Preview */}
      <section className="py-28 bg-zinc-950 text-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
              About Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Digital Experiences Designed For The Future
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We focus on building premium digital products
              that combine modern technology, responsive systems,
              and immersive design experiences.
            </p>

            <p className="text-white/50 leading-relaxed">
              Our team works closely with startups, businesses,
              and creators to transform ideas into scalable
              and impactful digital platforms.
            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/5 rounded-[32px] h-72 border border-white/10" />

            <div className="bg-cyan-400/10 rounded-[32px] h-56 mt-16 border border-cyan-400/20" />

            <div className="bg-cyan-400/10 rounded-[32px] h-56 border border-cyan-400/20" />

            <div className="bg-white/5 rounded-[32px] h-72 margin border border-white/10" />

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="py-28 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
              Our Process
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              How We Build Products
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-[32px] p-10"
              >

                <h1 className="text-5xl md:text-7xl font-bold text-cyan-400/20 mb-8">
                  {item.step}
                </h1>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-28 bg-zinc-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center p-10 border border-white/10 rounded-[32px]">
              <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
                120+
              </h2>

              <p className="text-white/60">
                Completed Projects
              </p>
            </div>

            <div className="text-center p-10 border border-white/10 rounded-[32px]">
              <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
                80+
              </h2>

              <p className="text-white/60">
                Global Clients
              </p>
            </div>

            <div className="text-center p-10 border border-white/10 rounded-[32px]">
              <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
                5+
              </h2>

              <p className="text-white/60">
                Years Experience
              </p>
            </div>

            <div className="text-center p-10 border border-white/10 rounded-[32px]">
              <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
                24/7
              </h2>

              <p className="text-white/60">
                Support Available
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            Start Your Project
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
            Ready To Create Something Exceptional?
          </h2>

          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-12">
            Let’s build immersive digital experiences that help
            your business stand out in the modern digital world.
          </p>

          <button className="px-10 py-5 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
            Let’s Talk
          </button>

        </div>

      </section>

    </div>
  )
}

export default Home